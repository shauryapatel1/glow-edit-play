
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Sunset colors
				'sunset': {
					'50': '#FFF7ED',
					'100': '#FEF3C7',
					'200': '#FEE9AE',
					'300': '#FEC6A1',
					'400': '#F97316', // Primary orange
					'500': '#EA384C', // Sunset red
					'600': '#D946EF', // Sunset purple
					'700': '#C14E63',
					'800': '#92400E',
					'900': '#78350F',
				},
				'sunset-yellow': {
					'50': '#FEFCE8',
					'100': '#FEF9C3',
					'200': '#FEF08A',
					'300': '#FDE047',
					'400': '#FACC15',
					'500': '#EAB308',
					'600': '#CA8A04',
					'700': '#A16207',
					'800': '#854D0E',
					'900': '#713F12',
				},
				'sunset-pink': {
					'50': '#FDF2F8',
					'100': '#FCE7F3',
					'200': '#FBCFE8',
					'300': '#F9A8D4',
					'400': '#F472B6',
					'500': '#EC4899',
					'600': '#DB2777',
					'700': '#BE185D',
					'800': '#9D174D',
					'900': '#831843',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'slide-in': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 15px rgba(249, 115, 22, 0.5)' },
					'50%': { boxShadow: '0 0 30px rgba(249, 115, 22, 0.8)' }
				},
				'pixel-shift': {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'25%': { transform: 'translate(2px, 2px)' },
					'50%': { transform: 'translate(0, 2px)' },
					'75%': { transform: 'translate(2px, 0)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'scale-out': 'scale-out 0.3s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'enter': 'fade-in 0.5s ease-out, scale-in 0.3s ease-out',
				'exit': 'fade-out 0.5s ease-out, scale-out 0.3s ease-out',
				'pixel-shift': 'pixel-shift 0.5s steps(4) infinite',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				pixel: ['"Press Start 2P"', 'cursive'],
				mono: ['"VT323"', 'monospace'],
			},
			boxShadow: {
				'glow-sm': '0 0 10px rgba(249, 115, 22, 0.2)',
				'glow-md': '0 0 20px rgba(249, 115, 22, 0.3)',
				'glow-lg': '0 0 30px rgba(249, 115, 22, 0.4)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
				'glass-sm': '0 4px 16px rgba(0, 0, 0, 0.08)',
				'pixel': '4px 4px 0 0 rgba(249, 115, 22, 0.8)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'grid-pattern': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'%3E%3Cpath fill=\'%239C92AC\' fill-opacity=\'0.05\' d=\'M1 0h2v20H1V0zm0 0h20v2H0V0z\'/%3E%3C/svg%3E")',
				'sunset-gradient': 'linear-gradient(to right, #F97316, #EA384C, #D946EF)',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
