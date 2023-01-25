tailwind.config = {
	theme: {
		fontFamily : {
			'sans': ['Kumbh Sans', 'sans-serif'],
		},
		extend: {
			colors: {
				'blue-gray-light': 'hsl(240, 5%, 91%)', // Divider
				'blue': 'hsl(240, 73%, 65%)', // Gradient
				'blue-gray-dark': 'hsl(240, 6%, 50%)', // Text
				'blue-gray-darker': 'hsl(237, 12%, 33%)', // Text
				'blue-gray-darkest': 'hsl(238, 29%, 16%)', // Text
				'soft-red': 'hsl(14, 88%, 65%)', // Text
				'violet': 'hsl(273, 75%, 66%)', // Gradient
			},
			fontSize: {
				's': '0.8125rem',
				'header': '2rem',
			},
			margin: {
				'18': '4.5rem',
			},
			maxHeight: {
				'11b': '2.8125rem'
			},
			boxShadow: {
				'bold': [
					'0 55px 35px -20px rgba(0, 0, 0, 0.30)',
					'0 55px 65px -10px rgba(0, 0, 0, 0.15)'
				]
			},
			animation: {
				'float': 'float 4s cubic-bezier(.4,0,.6,1) infinite',
				'scale': 'scale 4s cubic-bezier(.4,0,.6,1) infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(-3px)' },
					'50%': { transform: 'translateY(3px)' },
				},
				scale: {
					'0%, 100%': { transform: 'scale(1.02)', opacity: 0.8 },
					'50%': { transform: 'scale(0.98)', opacity: 1},
				}
			}
		}
	}
}
