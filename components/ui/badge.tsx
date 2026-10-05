import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
	"inline-flex items-center rounded-full border-2 px-3 py-0.5 text-xs md:text-sm font-bold transition-all shadow-[2px_2px_0px_#090312] select-none",
	{
		variants: {
			variant: {
				default:
					"border-[#090312] bg-primary text-primary-foreground",
				secondary:
					"border-[#090312] bg-secondary text-secondary-foreground",
				destructive:
					"border-[#090312] bg-destructive text-destructive-foreground",
				outline: "border-primary/60 text-foreground bg-card/60",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
)

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
	VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	)
}

export { Badge, badgeVariants }