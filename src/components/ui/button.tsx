import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-variant shadow-luxury transition-all duration-500 hover:shadow-soft hover:scale-[1.02]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft transition-all duration-500",
        outline: "border-2 border-primary/20 bg-background hover:bg-primary/5 hover:border-primary/40 text-foreground transition-all duration-500",
        secondary: "bg-secondary/10 text-foreground hover:bg-secondary/20 border border-secondary/20 transition-all duration-500",
        ghost: "hover:bg-muted hover:text-foreground transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-light transition-colors duration-300",
        luxury: "bg-gradient-luxury text-primary-foreground hover:opacity-95 shadow-luxury transition-all duration-500 hover:shadow-gold hover:scale-[1.02]",
        gold: "bg-gradient-gold text-foreground shadow-gold hover:shadow-luxury transition-all duration-500 hover:scale-[1.02] font-semibold",
        glass: "bg-white/80 backdrop-blur-glass border border-white/20 text-foreground hover:bg-white/90 shadow-card transition-all duration-500 hover:shadow-soft",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
