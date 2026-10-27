import { Link } from "@tanstack/react-router";
import { PaintBucket } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-separator bg-surface/75 px-4 backdrop-blur-lg">
			<nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
				<h2 className="m-0 shrink-0 text-base font-medium">
					<Link
						to="/"
						className="inline-flex items-center gap-2 rounded-full border border-transparent hover:border-separator bg-surface px-3 py-1.5 text-sm text-foreground no-underline hover:shadow-sm sm:px-4 sm:py-2"
					>
						<PaintBucket strokeWidth={1.5} className="w-4 h-4 font-medium" />
						<span className="text-md font-medium text-foreground font-sans lowercase">
							Palette Playground
						</span>
					</Link>
				</h2>
				<div className="ml-auto flex items-center gap-1.5 sm:gap-2">
					<ThemeToggle />
				</div>
			</nav>
		</header>
	);
}
