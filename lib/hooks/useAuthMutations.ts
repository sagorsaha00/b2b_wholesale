import { useMutation } from "@tanstack/react-query";
import {
  ApiResponse,
  RegBuyer,
  RegisterBuyerPayload,
  RegisterSellerPayload,
  RegSeller,
} from "../constant/store.Type";
import { useAuthStore } from "../dataStore/b2bStore";

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

// --- Custom Hooks ---
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
