"use client";

import { createClient } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

import { Database } from "@/types_db";

interface SupabaseproviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseproviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClient(
      "https://bxuirbxogqpfocuhhufx.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4dWlyYnhvZ3FwZm9jdWhodWZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NjUxMjIsImV4cCI6MjAyMTM0MTEyMn0.FRMNS4cLQT0o2M2Nm_i2J2XHZ2S4XUsIMa8XeEuDHFg"
    )
  );
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
