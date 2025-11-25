"use client";
import RouteLoader from "@/components/loaders/route-loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [routeLoader, setRouteLoader] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setRouteLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!routeLoader) {
      setTimeout(() => router.push("/auth/login"), 300);
    }
  }, [routeLoader, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <AnimatePresence>
        {routeLoader && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <RouteLoader />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
