/** @format */

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

/**
 * AdvancedCard
 * - Matches the original styling (border-accent / slate borders / DDE1E5 bg)
 * - Can be used as a selectable, clickable card OR a simple display-only card
 * - Accepts an optional icon
 * - Accessible (keyboard + screen readers)
 */

// tiny helper (avoids bringing in an external clsx dependency)
function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export type AdvancedCardProps<T = string | number> = {
    /** Primary label shown at the top */
    label: string;
    /** Small supporting text */
    description?: string;
    /** Optional leading icon (React node) */
    icon?: React.ReactNode;
    /** When provided, the card can represent a value in a selection group */
    value?: T;
    /** Currently selected value in the group */
    selectedValue?: T | null;
    /** Called when the card is clicked (makes the card interactive) */
    onSelect?: (value: T | undefined) => void;
    /** Disable interaction/hover states */
    disabled?: boolean;
    /** Optional right-side adornment (e.g., a badge or meta) */
    endAdornment?: React.ReactNode;
    /** Custom className passthrough */
    className?: string;
    /** Optional data-only mode where the card is just for display */
    displayOnly?: boolean;
    /** Optional height override (defaults to h-36 to match your snippet) */
    heightClassName?: string; // e.g., "h-36", "h-auto"
    /** Children render zone below description (for chips, stats, etc.) */
    children?: React.ReactNode;
};

export function AdvancedCard<T = string | number>(props: AdvancedCardProps<T>) {
    const {
        label,
        description,
        icon,
        value,
        selectedValue = null,
        onSelect,
        disabled = false,
        endAdornment,
        className,
        displayOnly,
        heightClassName = "h-36",
        children,
    } = props;

    const isSelectable = !!onSelect && !displayOnly;
    const isSelected =
        isSelectable && selectedValue !== null && value === selectedValue;

    const baseStyles = cn(
        // layout + spacing (copied from your snippet)
        "border sm:w-full sm:min-w-min min-w-72 rounded-lg shadow-sm transition-all px-4 py-4 flex flex-col space-y-0.5",
        heightClassName,
        disabled && "opacity-60 cursor-not-allowed",
        // color logic (mirrors your snippet exactly)
        isSelected
            ? "border-accent bg-white"
            : "border-slate-300 bg-[#DDE1E5]/50",
        className
    );

    const content = (
        <motion.div
            layout
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
                mass: 0.6,
            }}
            className="flex w-full flex-1"
        >
            {/* Left: Icon */}
            {icon && (
                <div className="mr-3 mt-0.5 flex h-6 w-6 items-center justify-center shrink-0">
                    {icon}
                </div>
            )}

            {/* Middle: Texts */}
            <div className="flex min-w-0 flex-1 flex-col space-y-1">
                <p className="font-semibold text-base truncate" title={label}>
                    {label}
                </p>
                {description && (
                    <p
                        className="text-slate-700 font-medium text-sm line-clamp-2"
                        title={description}
                    >
                        {description}
                    </p>
                )}
                {children && <div className="pt-1">{children}</div>}
            </div>

            {/* Right: Selection check or custom */}
            <div className="ml-3 flex items-start">
                {endAdornment ??
                    (isSelectable && isSelected ? (
                        <Check aria-hidden className="mt-0.5 h-5 w-5" />
                    ) : null)}
            </div>
        </motion.div>
    );

    if (isSelectable) {
        // Interactive button-like surface
        return (
            <button
                type="button"
                onClick={() => !disabled && onSelect?.(value)}
                className={baseStyles}
                disabled={disabled}
                aria-pressed={isSelected}
                aria-label={label}
            >
                {content}
            </button>
        );
    }

    // Display-only card
    return (
        <div
            className={cn(baseStyles, "cursor-default hover:border-slate-300")}
            aria-label={label}
            role="group"
        >
            {content}
        </div>
    );
}
