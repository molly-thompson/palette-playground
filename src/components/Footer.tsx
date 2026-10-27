import { Link } from "@heroui/react";
import { ExternalLink, PaintBucket } from "lucide-react";

export default function Footer() {
	return (
		<footer className="mt-20 border-t border-separator px-4 pb-4 pt-4 text-muted text-xs lowercase">
			<div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between gap-2 text-center sm:text-left">
				<p className="m-0 text-xs lowercase align-middle">
					<PaintBucket className="w-3 h-3 m-1 inline align-bottom" />
					Built to be played with.
				</p>
				<p>
					<Link
						href="https://github.com/molly-thompson/palette-playground.git"
						rel="noopener noreferrer"
						target="_blank"
					>
						Open Source <ExternalLink className="w-3 h-3 m-1" />
					</Link>
				</p>
			</div>
		</footer>
	);
}
