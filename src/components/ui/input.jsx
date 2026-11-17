import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
  type={type}
  ref={ref}
  {...props}
  className={cn(
    // Layout
    "flex w-full",

    // Responsive height & padding
    "h-10 md:h-11",
    "px-4 py-2",
    "text-sm md:text-base",

    // Shape
    "rounded-xl",

    // Transition
    "transition-all duration-300 ease-in-out",

    // Light Theme (Green)
    "bg-white",
    "border border-[#D1FAE5]",
    "text-[#0F172A]",
    "placeholder:text-[#64748B]",
    "shadow-sm",

    // Focus Light
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-[#16A34A]/30",
    "focus-visible:border-[#16A34A]",

    // Dark Theme Overrides (Purple)
    "dark:bg-[#161621]",
    "dark:border-[#2E2E3A]",
    "dark:text-[#F5F3FF]",
    "dark:placeholder:text-[#A1A1AA]",
    "dark:focus-visible:ring-[#7C3AED]/40",
    "dark:focus-visible:border-[#7C3AED]",

    // Disabled
    "disabled:cursor-not-allowed disabled:opacity-50",

    // File Input Styling
    "file:border-0 file:bg-transparent",
    "file:text-sm file:font-medium",

    className
  )}
/>

  );
})
Input.displayName = "Input"

export { Input }
