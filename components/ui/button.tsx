import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm md:text-base font-bold ring-offset-background transition-all duration-200 select-none cursor-pointer disabled:pointer-events-none disabled:opacity-50 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground cartoon-btn hover:brightness-105',
				destructive:
					'bg-destructive text-destructive-foreground cartoon-btn hover:brightness-105',
				outline:
					'border-2 border-primary/60 bg-card/90 text-foreground cartoon-btn hover:bg-primary/20 hover:border-primary',
				secondary:
					'bg-secondary text-secondary-foreground cartoon-btn hover:brightness-105',
				ghost:
					'hover:bg-primary/20 hover:text-primary rounded-full hover:scale-105 transition-transform duration-200 border-transparent shadow-none',
				link: 'text-primary underline-offset-4 hover:underline border-transparent shadow-none',
			},
			size: {
				default: 'h-11 px-6 py-2.5 rounded-full',
				sm: 'h-9 px-4 text-xs md:text-sm rounded-full',
				lg: 'h-12 px-8 py-3 text-base md:text-lg rounded-full',
				icon: 'h-10 w-10 rounded-full p-0 flex items-center justify-center cartoon-btn',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
