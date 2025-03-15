
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
				// GlowUp custom colors
				'blue': {
					'50': '#f0f7ff',
					'100': '#e0effe',
					'200': '#bae0fd',
					'300': '#7cc7fc',
					'400': '#36aaf8',
					'500': '#0A84FF', // primary blue
					'600': '#026ee0',
					'700': '#0258b6',
					'800': '#064a95',
					'900': '#0c407a',
				},
				'teal': {
					'50': '#f0fdfd',
					'100': '#ccfcff',
					'200': '#99f6ff',
					'300': '#5eeafd',
					'400': '#00C2FF', // secondary teal
					'500': '#06aee6',
					'600': '#088fc0',
					'700': '#0d729c',
					'800': '#146181',
					'900': '#16516b',
				},
				'purple': {
					'50': '#f5f3ff',
					'100': '#ede8ff',
					'200': '#dcd5ff',
					'300': '#c3b5ff',
					'400': '#6C5CE7', // accent purple
					'500': '#6246ea',
					'600': '#5735d9',
					'700': '#4828b9',
					'800': '#3b2299',
					'900': '#321d7d',
				},
				'orange': {
					'50': '#fff8ed',
					'100': '#ffefd4',
					'200': '#ffd9a8',
					'300': '#ffbf73',
					'400': '#FF9F43', // accent orange
					'500': '#fb8215',
					'600': '#ed6c04',
					'700': '#c35205',
					'800': '#9a420c',
					'900': '#7d390e',
				},
				'navy': {
					'50': '#f0f4fa',
					'100': '#dbe4f3',
					'200': '#bccce6',
					'300': '#92aad4',
					'400': '#648bc0',
					'500': '#4572ab',
					'600': '#355c8d',
					'700': '#2d4a72',
					'800': '#0F172A', // dark navy (instead of black)
					'900': '#101928',
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
					'0%, 100%': { boxShadow: '0 0 15px rgba(10, 132, 255, 0.5)' },
					'50%': { boxShadow: '0 0 30px rgba(10, 132, 255, 0.8)' }
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
			},
			fontFamily: {
				sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				'glow-sm': '0 0 10px rgba(10, 132, 255, 0.2)',
				'glow-md': '0 0 20px rgba(10, 132, 255, 0.3)',
				'glow-lg': '0 0 30px rgba(10, 132, 255, 0.4)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
				'glass-sm': '0 4px 16px rgba(0, 0, 0, 0.08)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'grid-pattern': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'%3E%3Cpath fill=\'%239C92AC\' fill-opacity=\'0.05\' d=\'M1 0h2v20H1V0zm0 0h20v2H0V0z\'/%3E%3C/svg%3E")',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
