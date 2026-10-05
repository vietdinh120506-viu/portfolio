import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TextCard = React.forwardRef<HTMLDivElement, TextCardProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn('text-card', className)}
				{...props}
			/>
		);
	}
);
TextCard.displayName = 'TextCard';
