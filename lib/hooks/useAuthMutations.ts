import { useMutation } from "@tanstack/react-query";
import {
  ApiResponse,
  RegBuyer,
  RegisterBuyerPayload,
  RegisterSellerPayload,
  RegSeller,
} from "../constant/store.Type";
import { useAuthStore } from "../dataStore/b2bStore";
import { useRouter } from "next/navigation";
import { LoginCredentials } from "../constant/userType";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";
const registerBuyerApi = async (
  payload: RegisterBuyerPayload,
): Promise<ApiResponse<RegBuyer>> => {
  const res = await fetch(`${API_URL}/api/buyer/registerBuyer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.message || "Failed to register buyer.");
  }
  return data;
};

const registerSellerApi = async (
  payload: RegisterSellerPayload,
): Promise<ApiResponse<RegSeller>> => {
  const res = await fetch(`${API_URL}/api/seller/createSellerAccount`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.message || "Failed to register seller.");
  }
  return data;
};

const loginUser = async ({ email, password, role }: LoginCredentials) => {
  const endpoint =
    role === "buyer" ? "/api/buyer/loginBuyer" : "/api/seller/loginSeller";
  const response = await fetch(`http://localhost:5000${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const result = await response.json();
  let data = null;
  if (role === "buyer") {
    data = result.data.buyer;
  } else {
    data = result.data.seller;
  }

  return data;
};

export function useLogin() {
  const router = useRouter();
  const { setUser } = useAuthStore();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (setUser) {
        console.log("Login Data", data);
        setUser(data, data.role);
      }
      router.push("/");
    },
  });
}
export function useRegisterBuyer() {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: registerBuyerApi,
    onSuccess: (data) => {
      console.log("dataBuyr", data.data);
      setUser(data.data, "buyer");
    },
  });
}

export function useRegisterSeller() {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: registerSellerApi,
    onSuccess: (data) => {
      console.log("dataSeller", data.data);
      setUser(data.data, "seller");
    },
  });
}
