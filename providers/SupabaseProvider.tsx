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
    createClient("https://your-supabase-url.com", "your-supabase-key")
  );
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
