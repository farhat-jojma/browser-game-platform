import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  // Extract aria attributes and disabled from props
  const { disabled, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-pressed": ariaPressed, "aria-expanded": ariaExpanded, role, onKeyDown, children, ...rest } = props;

  // Accessibility check: Ensure button or role="button" has discernible text or aria-label/aria-labelledby
  const hasAccessibleName =
    (typeof children === "string" && children.trim().length > 0) ||
    (ariaLabel && ariaLabel.trim().length > 0) ||
    (ariaLabelledBy && ariaLabelledBy.trim().length > 0);

  // If rendered as non-button element, add role="button" and keyboard handlers for accessibility
  const accessibilityProps = asChild
    ? {
        role: role || "button",
        tabIndex: disabled ? -1 : 0,
        "aria-disabled": disabled || undefined,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-pressed": ariaPressed,
        "aria-expanded": ariaExpanded,
        onKeyDown: (event) => {
          if (onKeyDown) onKeyDown(event);
          if (disabled) return;
          if (event.key === " " || event.key === "Enter") {
            event.preventDefault();
            if (rest.onClick) rest.onClick(event);
          }
        },
      }
    : {
        disabled,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-pressed": ariaPressed,
        "aria-expanded": ariaExpanded,
      };

  if (!hasAccessibleName && role !== "presentation" && role !== "none") {
    console.warn(
      "Accessibility warning: Button or role='button' element should have discernible inner text, aria-label, or aria-labelledby."
    );
  }

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...rest}
      {...accessibilityProps}
    >
      {children}
    </Comp>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants }
