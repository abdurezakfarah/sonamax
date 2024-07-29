"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utilities/cn";

const callToActionVariants = cva(
  "relative z-0 w-fit inline-flex items-center justify-center space-x-2 whitespace-nowrap rounded-md font-title text-base font-semibold uppercase leading-normal ring-offset-background transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:size-full before:origin-top-right before:scale-x-0 before:rounded-[inherit] before:transition-transform before:duration-500 before:ease-custom before:content-[''] hover:before:origin-bottom-left hover:before:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-content before:bg-black",
        secondary: "bg-white text-black before:bg-black hover:text-white",
        outline: "bg-transparent border text-copy hover:text-white before:bg-black",
      },
      size: {
        default: "h-11 px-7 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface CallToActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof callToActionVariants> {
  asChild?: boolean;
}

const CallToAction = React.forwardRef<HTMLButtonElement, CallToActionProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(callToActionVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
CallToAction.displayName = "CallToAction";

export { CallToAction, callToActionVariants };
