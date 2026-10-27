import { Card } from "@heroui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: About,
});

function About() {
	return (
		<main className="mx-auto w-full max-w-6xl px-4 py-12">
			<Card className="border border-separator shadow-lg" variant="secondary">
				<Card.Header className="gap-3 p-6 sm:p-8">
					<p className="m-0 text-xs font-bold tracking-[0.16em] text-accent uppercase">
						About
					</p>
					<Card.Title className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
						A small starter with room to grow.
					</Card.Title>
					<Card.Description className="max-w-3xl text-base leading-8 text-muted">
						TanStack Start gives you type-safe routing, server functions, and
						modern SSR defaults. Use this as a clean foundation, then layer in
						your own routes, styling, and add-ons.
					</Card.Description>
				</Card.Header>
			</Card>
		</main>
	);
}
