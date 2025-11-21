"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { name } from "@/lib/portfolio-data";

import Welcome from "@/components/sections/welcome";
import Help from "@/components/sections/help";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Contact from "@/components/sections/contact";
import Socials from "@/components/sections/socials";
import CommandNotFound from "@/components/sections/command-not-found";
import TerminalHeader from "./terminal-header";
import CommandOutput from "./command-output";
import { TypingEffect } from "../ui/typing-effect";

type HistoryItem = {
	id: number;
	command: string;
	output: React.ReactNode;
	showCommand?: boolean;
};

const DateDisplay = () => {
	const [date, setDate] = useState("");
	useEffect(() => {
		setDate(new Date().toLocaleString());
	}, []);
	return <span>{date}</span>;
};

const Terminal = () => {
	const [input, setInput] = useState("");
	const [history, setHistory] = useState<HistoryItem[]>([]);
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const [commandHistoryIndex, setCommandHistoryIndex] = useState(-1);
	const inputRef = useRef<HTMLInputElement>(null);
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const username = name.split(".")[0].toLowerCase();

	const initialHistoryItem: HistoryItem = {
		id: 0,
		command: "welcome",
		output: <Welcome />,
		showCommand: false,
	};

	const executeCommand = useCallback(
		(command: string): React.ReactNode => {
			const [cmd, ...args] = command.toLowerCase().trim().split(" ");
			switch (cmd) {
				case "help":
					return <Help />;
				case "about":
					return <About />;
				case "whoami":
					return (
						<TypingEffect
							text={username}
							speed={30}
						/>
					);
				case "pwd":
					return (
						<TypingEffect
							text={`/home/${username}`}
							speed={30}
						/>
					);
				case "skills":
					return <Skills />;
				case "projects":
					return <Projects />;
				case "experience":
					return <Experience />;
				case "education":
					return <Education />;
				case "contact":
					return <Contact />;
				case "socials":
					return <Socials />;
				case "date":
					return <DateDisplay />;
				case "clear":
					setHistory([initialHistoryItem]);
					return null;
				case "":
					return null;
				default:
					return <CommandNotFound command={cmd} />;
			}
		},
		[username, initialHistoryItem]
	);

	useEffect(() => {
		if (history.length === 0) {
			setHistory([initialHistoryItem]);
		}
	}, [history.length, initialHistoryItem]);

	useEffect(() => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollTop =
				scrollContainerRef.current.scrollHeight;
		}
	}, [history]);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const command = input.trim();
		if (command === "welcome") {
			setInput("");
			return;
		}
		if (command === "") return;

		const output = executeCommand(command);

		if (command === "clear") {
			setInput("");
			return;
		}

		if (output !== null) {
			const newHistoryItem: HistoryItem = {
				id: history.length,
				command,
				output,
			};
			setHistory((prev) => [...prev, newHistoryItem]);
		}

		if (
			command !== "" &&
			command !== commandHistory[commandHistory.length - 1]
		) {
			setCommandHistory((prev) => [...prev, command]);
		}
		setCommandHistoryIndex(commandHistory.length);
		setInput("");
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "ArrowUp") {
			e.preventDefault();
			if (commandHistoryIndex > 0) {
				const newIndex = commandHistoryIndex - 1;
				setCommandHistoryIndex(newIndex);
				setInput(commandHistory[newIndex]);
			} else if (commandHistory.length > 0) {
				const newIndex = commandHistory.length - 1;
				setCommandHistoryIndex(newIndex);
				setInput(commandHistory[newIndex]);
			}
		} else if (e.key === "ArrowDown") {
			e.preventDefault();
			if (commandHistoryIndex < commandHistory.length - 1) {
				const newIndex = commandHistoryIndex + 1;
				setCommandHistoryIndex(newIndex);
				setInput(commandHistory[newIndex]);
			} else {
				setCommandHistoryIndex(commandHistory.length);
				setInput("");
			}
		}
	};

	const handleTerminalClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (
			e.target instanceof HTMLElement &&
			!e.target.closest("a, button, input, textarea, select")
		) {
			inputRef.current?.focus();
		}
	};

	const prompt = (
		<span className="mr-2">
			<span style={{ color: "#8be9fd" }}>{username}</span>
			<span style={{ color: "#f8f8f2" }}>@</span>
			<span style={{ color: "#ff79c6" }}>dev</span>
			<span style={{ color: "#f8f8f2" }}>:</span>
			<span style={{ color: "#50fa7b" }}>~$</span>
		</span>
	);

	return (
		<div
			className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)] border-2 border-primary/30 rounded-none shadow-2xl shadow-primary/20 bg-background/80 backdrop-blur-sm flex flex-col"
			onClick={handleTerminalClick}
		>
			<TerminalHeader />
			<div
				ref={scrollContainerRef}
				className="flex-grow p-4 overflow-y-auto"
			>
				<div className="space-y-4">
					{history.map((item, index) => (
						<div
							key={item.id}
							style={{
								opacity: index === history.length - 1 ? 1 : 0.8,
							}}
						>
							<CommandOutput
								command={item.command}
								showCommand={item.showCommand}
							>
								{item.output}
							</CommandOutput>
						</div>
					))}
				</div>
				<form
					onSubmit={handleFormSubmit}
					className="flex items-center mt-4"
				>
					<label
						htmlFor="terminal-input"
						className="flex items-center"
					>
						{prompt}
					</label>
					<div className="relative flex-grow">
						<Input
							ref={inputRef}
							id="terminal-input"
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleKeyDown}
							autoComplete="off"
							spellCheck="false"
							className="flex-grow bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base animate-blink"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Terminal;
