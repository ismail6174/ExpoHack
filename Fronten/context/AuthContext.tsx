import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api/api";
import { router } from "expo-router";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setUserToken(token);
        try {
          const res = await api.get("/api/me");
          if (res.data.success) setUser(res.data.user);
        } catch {
          await AsyncStorage.removeItem("token");
          setUserToken(null);
        }
      }
      setLoading(false);
    };
    init();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post("/api/login", { email, password });
    if (res.data.success) {
      await AsyncStorage.setItem("token", res.data.token);
      setUserToken(res.data.token);
      setUser(res.data.user);
      return true;
    }
    return false;
  };

  const signup = async (username: string, email: string, password: string) => {
    const res = await api.post("/api/signup", { username, email, password });
    if (res.data.success) {
      await AsyncStorage.setItem("token", res.data.token);
      setUserToken(res.data.token);
      return true;
    }
    return false;
  };

  const verifyOtp = async (email: string, otpCode: string) => {
    const res = await api.post("/api/verify-otp", { email, otpCode });
    return res.data.success;
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setUserToken(null);
    setUser(null);

    router.replace("/(auth)/login");   // 👈 NOW IT WILL NAVIGATE
  };

  return (
    <AuthContext.Provider
      value={{ userToken, user, login, signup, verifyOtp, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
