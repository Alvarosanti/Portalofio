import '../styles/globals.css';

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<title>Portfolio - Alvaro S.</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</head>
			<body>{children}</body>
		</html>
	);
}
