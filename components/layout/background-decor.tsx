'use client';

export function BackgroundDecor() {
	return (
		<div
			className="fixed inset-0 pointer-events-none select-none overflow-hidden -z-10 bg-gradient-to-b from-[#120921] via-[#1c0f33] to-[#120921]"
			aria-hidden="true"
		>
			{/* Top-Left Floating Cloud */}
			<div className="absolute top-[6%] left-[4%] opacity-35 animate-float-1">
				<svg width="120" height="70" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M25 50C15 50 10 42 10 32C10 20 22 15 32 18C37 8 50 4 62 10C72 3 90 6 95 18C105 18 112 25 112 35C112 45 105 50 95 50L25 50Z"
						fill="#ff8ab8"
						opacity="0.35"
					/>
					<circle cx="50" cy="28" r="16" fill="#ffd02b" opacity="0.3" />
				</svg>
			</div>

			{/* Top-Right Floating Cloud */}
			<div className="absolute top-[8%] right-[6%] opacity-30 animate-float-2">
				<svg width="140" height="80" viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M30 60C18 60 12 50 12 38C12 24 26 18 38 22C44 10 60 5 74 12C86 4 108 8 114 22C126 22 134 30 134 42C134 54 126 60 114 60L30 60Z"
						fill="#45e6a8"
						opacity="0.3"
					/>
				</svg>
			</div>

			{/* Bottom-Left Floating Cloud */}
			<div className="absolute bottom-[10%] left-[5%] opacity-25 animate-float-3">
				<svg width="110" height="60" viewBox="0 0 110 60" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M20 45C10 45 6 37 6 28C6 17 18 12 28 15C33 6 46 3 57 8C66 2 82 5 87 15C96 15 102 21 102 30C102 39 96 45 87 45L20 45Z"
						fill="#ffd02b"
						opacity="0.25"
					/>
				</svg>
			</div>

			{/* Bottom-Right Floating Cloud */}
			<div className="absolute bottom-[14%] right-[6%] opacity-25 animate-float-1 hidden sm:block">
				<svg width="130" height="70" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M25 50C15 50 10 42 10 32C10 20 22 15 32 18C37 8 50 4 62 10C72 3 90 6 95 18C105 18 112 25 112 35C112 45 105 50 95 50L25 50Z"
						fill="#ff8ab8"
						opacity="0.25"
					/>
				</svg>
			</div>

			{/* Sparkling Stars - 4-pointed cartoon stars */}
			{/* Top-Left Star (Lemon Yellow) */}
			<div className="absolute top-[15%] left-[16%] text-[#ffd02b] opacity-80 animate-float-1">
				<svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
				</svg>
			</div>

			{/* Top-Right Star (Candy Pink) */}
			<div className="absolute top-[20%] right-[15%] text-[#ff599c] opacity-75 animate-float-2">
				<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
				</svg>
			</div>

			{/* Mid-Left Star (Mint Green) */}
			<div className="absolute top-[48%] left-[8%] text-[#2ee69c] opacity-70 animate-float-3">
				<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
				</svg>
			</div>

			{/* Mid-Right Star (Lemon Yellow) */}
			<div className="absolute top-[52%] right-[9%] text-[#ffd02b] opacity-75 animate-float-1">
				<svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
				</svg>
			</div>

			{/* Bottom-Left Star (Candy Pink) */}
			<div className="absolute bottom-[24%] left-[14%] text-[#ff599c] opacity-70 animate-float-2">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
				</svg>
			</div>

			{/* Bottom-Right Star (Lemon Yellow) */}
			<div className="absolute bottom-[22%] right-[16%] text-[#ffd02b] opacity-75 animate-float-1">
				<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
				</svg>
			</div>

			{/* Swirl Spiral - Pink (Top Left) */}
			<div className="absolute top-[28%] left-[5%] opacity-35 animate-float-2 text-[#ff599c]">
				<svg width="42" height="42" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
					<path d="M50 50 A 10 10 0 0 1 60 50 A 20 20 0 0 1 40 60 A 30 30 0 0 1 40 20 A 40 40 0 0 1 80 50" />
				</svg>
			</div>

			{/* Swirl Spiral - Mint (Middle Right) */}
			<div className="absolute top-[38%] right-[7%] opacity-35 animate-float-3 text-[#2ee69c]">
				<svg width="38" height="38" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
					<path d="M50 50 A 10 10 0 0 1 60 50 A 20 20 0 0 1 40 60 A 30 30 0 0 1 40 20 A 40 40 0 0 1 80 50" />
				</svg>
			</div>

			{/* Swirl Spiral - Pink (Bottom Left) */}
			<div className="absolute bottom-[36%] left-[6%] opacity-30 animate-float-1 text-[#ff8ab8] hidden sm:block">
				<svg width="36" height="36" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
					<path d="M50 50 A 10 10 0 0 1 60 50 A 20 20 0 0 1 40 60 A 30 30 0 0 1 40 20 A 40 40 0 0 1 80 50" />
				</svg>
			</div>

			{/* Glowing Cartoon Bubbles & Accent Dots */}
			<div className="absolute top-[12%] left-[45%] w-4 h-4 rounded-full bg-[#ff7e47]/50 shadow-[0_0_12px_#ff7e47] animate-float-2 hidden sm:block" />
			<div className="absolute top-[26%] right-[28%] w-3.5 h-3.5 rounded-full bg-[#ffd02b]/60 shadow-[0_0_10px_#ffd02b] animate-float-1 hidden sm:block" />
			<div className="absolute top-[62%] left-[20%] w-4 h-4 rounded-full bg-[#ff599c]/45 shadow-[0_0_12px_#ff599c] animate-float-3" />
			<div className="absolute bottom-[28%] right-[32%] w-4 h-4 rounded-full bg-[#2ee69c]/50 shadow-[0_0_12px_#2ee69c] animate-float-2 hidden sm:block" />
			<div className="absolute bottom-[15%] left-[32%] w-3 h-3 rounded-full bg-[#ffd02b]/50 animate-pulse-soft hidden sm:block" />
			<div className="absolute top-[72%] right-[18%] w-3 h-3 rounded-full bg-[#ff8ab8]/60 animate-pulse-soft" />
		</div>
	);
}
