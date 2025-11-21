import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const jetbrains_mono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://maheshportfolio101.vercel.app/"),
	title: {
		default: "Mahesh Gudooru | Full Stack Developer",
		template: "%s | Mahesh Gudooru",
	},
	description:
		"Portfolio of Mahesh Gudooru, a Full Stack Developer specializing in React, Next.js, and modern web technologies. View my projects, skills, and experience in a unique terminal interface.",
	keywords: [
		"Full Stack Developer",
		"Software Engineer",
		"React Developer",
		"Next.js Developer",
		"Frontend Developer",
		"Web Developer",
		"Mahesh Gudooru",
		"Portfolio",
		"Terminal Portfolio",
		"Java",
		"TypeScript",
		"TailwindCSS",
	],
	authors: [
		{ name: "Mahesh Gudooru", url: "https://github.com/dragon-slayer99" },
	],
	creator: "Mahesh Gudooru",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://mahesh-portfolio.vercel.app",
		title: "Mahesh Gudooru | Full Stack Developer",
		description:
			"Interactive terminal-style portfolio showcasing my projects and skills.",
		siteName: "Mahesh.dev",
		images: [
			{
				url: "/og-image.png", // You'll need to add this image to your public folder later
				width: 1200,
				height: 630,
				alt: "Mahesh Gudooru Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Mahesh Gudooru | Full Stack Developer",
		description: "Check out my terminal-themed developer portfolio!",
		creator: "@dragon_slayer99", // Update if you have a different handle
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="dark"
		>
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body
				className={`${jetbrains_mono.variable} font-code antialiased`}
			>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Mahesh Gudooru",
							url: "https://mahesh-portfolio.vercel.app",
							sameAs: [
								"https://github.com/dragon-slayer99",
								"https://www.linkedin.com/in/gudooru-mahesh-6b49b3254/",
								"https://leetcode.com/u/Gudoorumahesh/",
							],
							jobTitle: "Software Developer",
							worksFor: {
								"@type": "Organization",
								name: "Open to Opportunities",
							},
						}),
					}}
				/>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
