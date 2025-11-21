"use client";
import React, { useState, useEffect } from "react";
import { name } from "@/lib/portfolio-data";

const Welcome = () => {
	const [lastLogin, setLastLogin] = useState("");

	const asciiArt = `
███╗   ███╗ █████╗ ██╗  ██╗███████╗███████╗██╗  ██╗
████╗ ████║██╔══██╗██║  ██║██╔════╝██╔════╝██║  ██║
██╔████╔██║███████║███████║█████╗  ███████╗███████║
██║╚██╔╝██║██╔══██║██╔══██║██╔══╝  ╚════██║██╔══██║
██║ ╚═╝ ██║██║  ██║██║  ██║███████╗███████║██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
`;

	useEffect(() => {
		// Generate a plausible-looking past date and random IP only on the client
		const pastDate = new Date(
			new Date().getTime() - Math.random() * 1000 * 60 * 60 * 24 * 30
		);
		const ip = `203.0.113.${Math.floor(Math.random() * 255)}`;
		setLastLogin(
			`Last login: ${pastDate.toString().slice(0, 24)} from ${ip}`
		);
	}, []);

	return (
		<div className="mb-4">
			<p className="text-muted-foreground">{lastLogin}</p>
			<pre
				className="text-primary text-glow leading-tight mb-2 whitespace-pre break-words"
				style={{
					fontSize: "clamp(0.3rem, 2vw, 1rem)",
					textSizeAdjust: "100%",
				}}
			>
				{asciiArt}
			</pre>
			<p>
				Type{" "}
				<code className="bg-primary/20 text-primary p-1 rounded-md">
					help
				</code>{" "}
				to see a list of available commands.
			</p>
		</div>
	);
};

export default Welcome;
