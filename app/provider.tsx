"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserDetailContext, UserDetail } from "@/context/user-context";
import Loading from "@/components/loading";

function Provider({ children }: { children: React.ReactNode }) {
  // Type the state as UserDetail | null to match context expectations
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const createNewUser = async () => {
    try {
      const result = await axios.post<UserDetail>("/api/user");
      setUserDetail(result.data);
    } catch (error) {
      console.error("Failed to create user:", error);
      // Handle error appropriately
      setUserDetail(null); // Set to null on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    createNewUser();
  }, []);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{isLoading ? <Loading /> : children}</div>
    </UserDetailContext.Provider>
  );
}

export default Provider;
