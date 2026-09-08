"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  CheckCheck,
  Image as ImageIcon,
  MoreVertical,
  Paperclip,
  Phone,
  Plus,
  Search,
  Send,
  Smile,
  Store,
  Video,
  X,
} from "lucide-react";

type Product = {
  id: string | number;
  name: string;
  image?: string;
  price?: number | string;
  oldPrice?: number | string;
  supplier?: string;
  supplierImage?: string;
  verified?: boolean;
};

type Message = {
  id: number;
  text: string;
  time: string;
  sender: "buyer" | "seller";
  read?: boolean;
};

type Conversation = {
  id: number;
  seller: string;
  sellerImage?: string;
  verified?: boolean;
  online?: boolean;
  lastMessage: string;
  time: string;
  unread?: number;
  product?: Product;
};

interface BuyerSellerChatProps {
  selectedProduct?: Product;
  onClose?: () => void;
}

const PRODUCT_FALLBACK = "/images/product-placeholder.png";
const USER_FALLBACK = "/images/user-placeholder.png";

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! Is this product still available?",
    time: "10:31 AM",
    sender: "buyer",
    read: true,
  },
  {
    id: 2,
    text: "Yes, it's available. 😊",
    time: "10:32 AM",
    sender: "seller",
    read: true,
  },
  {
    id: 3,
    text: "Great! Can you tell me a little more about the product?",
    time: "10:33 AM",
    sender: "buyer",
    read: true,
  },
  {
    id: 4,
    text: "Sure. It's brand new and comes with the original packaging and warranty.",
    time: "10:34 AM",
    sender: "seller",
    read: true,
  },
];

const demoConversations: Conversation[] = [
  {
    id: 1,
    seller: "Tech World",
    sellerImage: USER_FALLBACK,
    verified: true,
    online: true,
    lastMessage: "Sure, it's available.",
    time: "10:34 AM",
    unread: 2,
  },
  {
    id: 2,
    seller: "Fashion House",
    sellerImage: USER_FALLBACK,
    verified: true,
    online: false,
    lastMessage: "Thank you for your message.",
    time: "Yesterday",
  },
  {
    id: 3,
    seller: "Smart Electronics",
    sellerImage: USER_FALLBACK,
    verified: true,
    online: true,
    lastMessage: "We can give you a discount.",
    time: "Monday",
    unread: 1,
  },
];

export default function BuyerSellerChat({
  selectedProduct,
  onClose,
}: BuyerSellerChatProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [conversations] = useState<Conversation[]>(demoConversations);
  const [activeConversation, setActiveConversation] =
    useState<Conversation | null>(demoConversations[0]);

  const [showSidebar, setShowSidebar] = useState(true);
  const [showProduct, setShowProduct] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const activeProduct = selectedProduct ?? activeConversation?.product;

  const sellerName =
    selectedProduct?.supplier || activeConversation?.seller || "Tech World";

  const sellerImage =
    selectedProduct?.supplierImage ||
    activeConversation?.sellerImage ||
    USER_FALLBACK;

  const sellerVerified =
    selectedProduct?.verified ?? activeConversation?.verified ?? true;

  const sellerOnline = activeConversation?.online ?? true;

  const productPrice = useMemo(() => {
    if (!activeProduct?.price) return "$0";
    return `$${activeProduct.price}`;
  }, [activeProduct]);

  const sendMessage = () => {
    const trimmed = message.trim();

    if (!trimmed) return;

    const newMessage: Message = {
      id: Date.now(),
      text: trimmed,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "buyer",
      read: false,
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((item) =>
          item.id === newMessage.id ? { ...item, read: true } : item,
        ),
      );
    }, 800);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const selectConversation = (conversation: Conversation) => {
    setActiveConversation(conversation);
    setShowSidebar(false);
  };

  return (
    <div className="flex h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden bg-[#f6f8fb]">
      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className={`
          ${showSidebar ? "flex" : "hidden"}
          w-full shrink-0 flex-col border-r border-slate-200
          bg-white
          md:flex md:w-[340px]
          lg:w-[370px]
        `}
      >
        {/* Sidebar Header */}

        <div className="border-b border-slate-200 px-5 py-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900">Messages</h1>

              <p className="mt-1 text-sm text-slate-500">Chat with sellers</p>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>

          {/* Search */}

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search conversations..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Conversation List */}

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => {
            const isActive = activeConversation?.id === conversation.id;

            return (
              <button
                key={conversation.id}
                type="button"
                onClick={() => selectConversation(conversation)}
                className={`
                  flex w-full gap-3 border-b border-slate-100
                  px-4 py-4 text-left transition
                  ${isActive ? "bg-blue-50/70" : "hover:bg-slate-50"}
                `}
              >
                {/* Avatar */}

                <div className="relative shrink-0">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                    <Image
                      src={conversation.sellerImage || USER_FALLBACK}
                      alt={conversation.seller}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {conversation.online && (
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
                  )}
                </div>

                {/* Info */}

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-1">
                      <h3 className="truncate text-sm font-semibold text-slate-900">
                        {conversation.seller}
                      </h3>

                      {conversation.verified && (
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500">
                          <Check className="h-2.5 w-2.5 text-white" />
                        </span>
                      )}
                    </div>

                    <span className="shrink-0 text-[11px] text-slate-400">
                      {conversation.time}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="truncate text-xs text-slate-500">
                      {conversation.lastMessage}
                    </p>

                    {conversation.unread ? (
                      <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[10px] font-bold text-white">
                        {conversation.unread}
                      </span>
                    ) : null}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* =====================================================
          MAIN CHAT
      ====================================================== */}

      <main
        className={`
          ${showSidebar ? "hidden md:flex" : "flex"}
          min-w-0 flex-1 flex-col bg-[#f8fafc]
        `}
      >
        {/* Chat Header */}

        <header className="relative flex h-[76px] shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            {/* Mobile Back */}

            <button
              type="button"
              onClick={() => setShowSidebar(true)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            {/* Avatar */}

            <div className="relative shrink-0">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                <Image
                  src={sellerImage}
                  alt={sellerName}
                  fill
                  className="object-cover"
                />
              </div>

              {sellerOnline && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              )}
            </div>

            {/* Seller Info */}

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h2 className="truncate text-sm font-bold text-slate-900 sm:text-base">
                  {sellerName}
                </h2>

                {sellerVerified && (
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <Check className="h-2.5 w-2.5 text-white" />
                  </span>
                )}
              </div>

              <div className="mt-0.5 flex items-center gap-1.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    sellerOnline ? "bg-emerald-500" : "bg-slate-300"
                  }`}
                />

                <span className="text-xs text-slate-500">
                  {sellerOnline ? "Online now" : "Offline"}
                </span>
              </div>
            </div>
          </div>

          {/* Header Actions */}

          <div className="flex items-center gap-1">
            <button
              type="button"
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:flex"
            >
              <Phone className="h-[18px] w-[18px]" />
            </button>

            <button
              type="button"
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:flex"
            >
              <Video className="h-[18px] w-[18px]" />
            </button>

            <button
              type="button"
              onClick={() => setShowProduct((prev) => !prev)}
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:flex"
            >
              <Store className="h-[18px] w-[18px]" />
            </button>

            <button
              type="button"
              onClick={() => setShowMore((prev) => !prev)}
              className="relative flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <MoreVertical className="h-[18px] w-[18px]" />

              {showMore && (
                <div className="absolute right-0 top-11 z-50 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 text-left shadow-xl">
                  <button className="w-full rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    View profile
                  </button>

                  <button className="w-full rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    Report seller
                  </button>

                  <button className="w-full rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                    Block seller
                  </button>
                </div>
              )}
            </button>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="ml-1 hidden h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 md:flex"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </header>

        {/* =====================================================
            CHAT BODY
        ====================================================== */}

        <div className="relative flex min-h-0 flex-1">
          {/* Messages */}

          <section className="flex min-w-0 flex-1 flex-col">
            <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 lg:px-8">
              {/* Date */}

              <div className="mb-6 flex justify-center">
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-slate-400 shadow-sm ring-1 ring-slate-100">
                  Today
                </span>
              </div>

              <div className="mx-auto flex max-w-3xl flex-col gap-3">
                {messages.map((item) => {
                  const isBuyer = item.sender === "buyer";

                  return (
                    <div
                      key={item.id}
                      className={`flex ${
                        isBuyer ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`
                          max-w-[82%] sm:max-w-[70%]
                          ${isBuyer ? "items-end" : "items-start"}
                          flex flex-col
                        `}
                      >
                        <div
                          className={`
                            rounded-2xl px-4 py-3 text-sm leading-6
                            ${
                              isBuyer
                                ? "rounded-br-md bg-blue-600 text-white shadow-sm shadow-blue-100"
                                : "rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm"
                            }
                          `}
                        >
                          {item.text}
                        </div>

                        <div
                          className={`
                            mt-1 flex items-center gap-1.5 px-1 text-[10px] text-slate-400
                            ${isBuyer ? "justify-end" : "justify-start"}
                          `}
                        >
                          <span>{item.time}</span>

                          {isBuyer && (
                            <span>
                              {item.read ? (
                                <CheckCheck className="h-3.5 w-3.5 text-blue-500" />
                              ) : (
                                <Check className="h-3.5 w-3.5" />
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Product Preview */}

            {showProduct && activeProduct && (
              <div className="border-t border-slate-200 bg-white px-4 py-3 sm:px-6">
                <div className="mx-auto flex max-w-3xl items-center gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <Image
                      src={activeProduct.image || PRODUCT_FALLBACK}
                      alt={activeProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                      Product
                    </p>

                    <h3 className="truncate text-sm font-semibold text-slate-900">
                      {activeProduct.name}
                    </h3>

                    <p className="mt-0.5 text-sm font-bold text-blue-600">
                      {productPrice}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="hidden shrink-0 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 sm:block"
                  >
                    View product
                  </button>
                </div>
              </div>
            )}

            {/* =================================================
                MESSAGE COMPOSER
            ================================================== */}

            <div className="border-t border-slate-200 bg-white p-3 sm:p-4">
              <div className="mx-auto flex max-w-3xl items-end gap-2">
                <button
                  type="button"
                  className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 sm:flex"
                >
                  <Paperclip className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 sm:flex"
                >
                  <ImageIcon className="h-5 w-5" />
                </button>

                <div className="flex min-h-[44px] flex-1 items-center rounded-xl border border-slate-200 bg-slate-50 px-3 transition focus-within:border-blue-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
                  <input
                    ref={inputRef}
                    type="text"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Write a message..."
                    className="min-w-0 flex-1 bg-transparent px-1 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="button"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    <Smile className="h-5 w-5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={!message.trim()}
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-blue-600
                    text-white
                    shadow-sm
                    shadow-blue-200
                    transition
                    hover:bg-blue-700
                    disabled:cursor-not-allowed
                    disabled:bg-slate-200
                    disabled:text-slate-400
                    disabled:shadow-none
                  "
                >
                  <Send className="ml-0.5 h-5 w-5" />
                </button>
              </div>

              <p className="mx-auto mt-2 hidden max-w-3xl text-[10px] text-slate-400 sm:block">
                Press Enter to send
              </p>
            </div>
          </section>

          {/* =================================================
              PRODUCT INFORMATION PANEL
          ================================================== */}

          {showProduct && activeProduct && (
            <aside className="hidden w-[280px] shrink-0 border-l border-slate-200 bg-white lg:block xl:w-[320px]">
              <div className="sticky top-0 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">
                    Product details
                  </h3>

                  <button
                    type="button"
                    onClick={() => setShowProduct(false)}
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Product Image */}

                <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <Image
                    src={activeProduct.image || PRODUCT_FALLBACK}
                    alt={activeProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Info */}

                <div className="mt-4">
                  <h4 className="line-clamp-2 text-base font-bold leading-6 text-slate-900">
                    {activeProduct.name}
                  </h4>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xl font-bold text-blue-600">
                      {productPrice}
                    </span>

                    {activeProduct.oldPrice && (
                      <span className="text-sm text-slate-400 line-through">
                        ${activeProduct.oldPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Seller */}

                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-9 w-9 overflow-hidden rounded-full bg-white">
                      <Image
                        src={sellerImage}
                        alt={sellerName}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-slate-900">
                        {sellerName}
                      </p>

                      <p className="text-[10px] text-emerald-600">
                        {sellerOnline ? "Online now" : "Offline"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* View Product */}

                <button
                  type="button"
                  className="mt-4 flex h-11 w-full items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  View product
                </button>

                <button
                  type="button"
                  className="mt-2 flex h-11 w-full items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Buy now
                </button>
              </div>
            </aside>
          )}
        </div>
      </main>
    </div>
  );
}
