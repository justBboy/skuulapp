// "use client";

// import { useTheme } from "next-themes";
// import { Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function ThemeToggleButton() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       aria-label="Toggle theme"
//     >
//       {theme === "dark" ? (
//         <Sun className="h-5 w-5" />
//       ) : (
//         <Moon className="h-5 w-5" />
//       )}
//     </Button>
//   );
// }

"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full relative cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] text-amber-300" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -180, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
