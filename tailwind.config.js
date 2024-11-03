/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			background: '#002626',
			backgroundCalendar: 'hsl(var(--background))',
  			buttonBackground: '#A8FF1A',
  			buttonText: '#002626',
  			heading: '#EAFFBD',
  			subtext: '#EAFFBD',
  			body: '#FEFFF8',
  			background2: '#FEFFF8',
  			buttonBackground2: '#A8FF1A',
  			buttonText2: '#002626',
  			heading2: '#003A47',
  			subtext2: '#003A47',
  			body2: '#003A47',
  			background3: '#EAFFBD',
  			buttonBackground3: '#A8FF1A',
  			buttonText3: '#002626',
  			heading3: '#003A47',
  			subtext3: '#003A47',
  			body3: '#003A47',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			heading: ["Area", "sans-serif"],
  			subtext: ["Area", "sans-serif"],
  			body: ["Inter", "sans-serif"],
  			button: ["Martian", "monospace"]
  		},
  		height: {
  			main: '500px'
  		},
  		fontSize: {
  			heading: '60px',
  			body: '16px',
  			subtext: '32px',
  			button: '16px'
  		},
  		gridTemplateColumns: {
  			'12': 'repeat(12, minmax(0, 1fr))'
  		},
  		spacing: {
  			'20': '20px',
  			'170': '170px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
