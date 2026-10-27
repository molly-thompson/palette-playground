import { Card, Chip } from "@heroui/react";
import { Link as RouterLink } from "@tanstack/react-router";
import { ArrowLeft, CircleX } from "lucide-react";

export function NotFound() {
	return (
		<main className="mx-auto w-full max-w-6xl px-4 pb-8 pt-12 sm:pt-14">
			<Card className="border border-separator shadow-lg">
				<Card.Content className="p-6 sm:p-10">
					<p className="mb-3 text-xs font-bold tracking-[0.16em] text-accent uppercase">
						<Chip color="danger" variant="soft">
							<CircleX width={16} strokeWidth={1.5} />
							<Chip.Label>Error 404</Chip.Label>
						</Chip>
					</p>
					<h1 className="mb-5 max-w-3xl text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-6xl">
						Oops, something went wrong.
					</h1>
					<p className="mb-8 max-w-2xl text-base text-muted sm:text-lg">
						The page you were looking for could not be found.
					</p>
					<div className="flex flex-wrap gap-3">
						<RouterLink
							to="/"
							className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground no-underline transition-opacity hover:opacity-90"
						>
							<ArrowLeft width={16} className="m-1" />
							Back to homepage
						</RouterLink>
					</div>
				</Card.Content>
			</Card>
		</main>
	);
}
