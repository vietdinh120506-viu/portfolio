import * as React from 'react';

interface ContactIconProps {
	className?: string;
	size?: number;
}

export function ContactIcon({ className = '', size = 20 }: ContactIconProps) {
	return (
		<span
			className={`inline-flex items-center justify-center shrink-0 contact-icon-bounce ${className}`}
			aria-hidden="true"
		>
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="overflow-visible"
			>
				{/* Cartoon Envelope Body */}
				<rect
					x="2"
					y="4.5"
					width="20"
					height="15"
					rx="3.5"
					fill="#ffffff"
					stroke="#090312"
					strokeWidth="2"
				/>
				{/* Envelope Flap Crease */}
				<path
					d="M3 6.5L10.6 12.3C11.4 12.9 12.6 12.9 13.4 12.3L21 6.5"
					stroke="#090312"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				{/* Cute Cartoon Heart Stamp */}
				<path
					d="M12 16.5C12 16.5 8.5 14.2 8.5 12C8.5 10.8 9.4 10 10.5 10C11.2 10 11.7 10.4 12 10.8C12.3 10.4 12.8 10 13.5 10C14.6 10 15.5 10.8 15.5 12C15.5 14.2 12 16.5 12 16.5Z"
					fill="#ff599c"
					stroke="#090312"
					strokeWidth="1.2"
					className="animate-pulse-soft"
				/>
			</svg>
		</span>
	);
}
