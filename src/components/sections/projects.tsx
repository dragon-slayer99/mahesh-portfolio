import React from "react";
import { projects } from "@/lib/portfolio-data";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, CheckCircle } from "lucide-react";

const Projects = () => {
	return (
		<div>
			<div className="flex items-center gap-2 mb-4">
				<Code className="w-5 h-5 text-primary" />
				<h2 className="font-headline text-lg text-primary">Projects</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{projects.map((project, index) => (
					<Card
						key={index}
						className="bg-card/80 border-primary/20 hover:border-primary/50 transition-colors duration-300"
					>
						<CardHeader>
							<CardTitle className="font-headline text-primary flex items-center gap-2">
								{project.title}
							</CardTitle>
							<CardDescription>
								{project.description}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="mb-4">
								<h4 className="font-medium text-sm mb-2 text-muted-foreground">
									Tech Stack:
								</h4>
								<div className="flex flex-wrap gap-2">
									{project.tech_stack.map((tech) => (
										<Badge
											key={tech}
											variant="secondary"
										>
											{tech}
										</Badge>
									))}
								</div>
							</div>
							<div className="mb-4">
								<h4 className="font-medium text-sm mb-2 text-muted-foreground">
									Features:
								</h4>
								<ul className="space-y-1 text-sm">
									{project.features.map((feature, i) => (
										<li
											key={i}
											className="flex items-start gap-2"
										>
											<CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
						</CardContent>
						<CardFooter className="flex gap-2">
							<Button
								asChild
								variant="outline"
								size="sm"
							>
								<a
									href={project.links.github_repo}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github /> GitHub
								</a>
							</Button>
							{project.links.live_demo && (
								<Button
									asChild
									variant="default"
									size="sm"
									className="bg-primary/80 hover:bg-primary text-primary-foreground"
								>
									<a
										href={project.links.live_demo}
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink /> Live Demo
									</a>
								</Button>
							)}
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Projects;
