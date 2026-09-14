import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-fg hover:opacity-90 border border-transparent",
        ghost:
          "bg-transparent text-fg border border-border hover:bg-elevated",
        subtle:
          "bg-elevated text-fg border border-border hover:border-fg/30",
      },
      size: {
        md: "h-11 px-5 text-sm rounded-md",
        lg: "h-12 px-6 text-base rounded-lg",
        xl: "h-14 px-8 text-base rounded-xl",
        icon: "size-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
