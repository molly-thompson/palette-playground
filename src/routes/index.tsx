import { Card, Link as HeroLink } from "@heroui/react";
import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="mx-auto w-full max-w-6xl px-4 pb-8 pt-12 sm:pt-14">
			<Card className="border border-separator shadow-lg" variant="secondary">
				<Card.Content className="p-6 sm:p-10">
					<p className="mb-3 text-xs font-bold tracking-[0.16em] text-accent uppercase">
						TanStack Start Base Template
					</p>
					<h1 className="mb-5 max-w-3xl text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-6xl">
						Start simple, ship quickly.
					</h1>
					<p className="mb-8 max-w-2xl text-base text-muted sm:text-lg">
						This base starter intentionally keeps things light: two routes,
						clean structure, and the essentials you need to build from scratch.
					</p>
					<div className="flex flex-wrap gap-3">
						<RouterLink
							to="/about"
							className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground no-underline transition-opacity hover:opacity-90"
						>
							About This Starter
						</RouterLink>
						<HeroLink
							href="https://tanstack.com/router"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center rounded-lg border border-separator bg-surface px-4 py-2 text-sm font-semibold text-foreground no-underline transition-colors hover:bg-surface-secondary"
						>
							Router Guide
						</HeroLink>
					</div>
				</Card.Content>
			</Card>
			<section
				aria-label="TanStack Start features"
				className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
			>
				{[
					[
						"Type-Safe Routing",
						"Routes and links stay in sync across every page.",
					],
					[
						"Server Functions",
						"Call server code from your UI without creating API boilerplate.",
					],
					[
						"Streaming by Default",
						"Ship progressively rendered responses for faster experiences.",
					],
					[
						"Tailwind Native",
						"Design quickly with utility-first styling and reusable tokens.",
					],
				].map(([title, desc]) => (
					<Card
						key={title}
						className="border border-separator shadow-sm transition-transform hover:-translate-y-0.5"
						variant="default"
					>
						<Card.Header className="gap-2">
							<Card.Title className="text-base font-semibold text-foreground">
								{title}
							</Card.Title>
							<Card.Description className="text-sm text-muted">
								{desc}
							</Card.Description>
						</Card.Header>
					</Card>
				))}
			</section>

			<Card
				className="mt-8 border border-separator shadow-sm"
				variant="default"
			>
				<Card.Header className="gap-2">
					<Card.Title className="text-xs font-bold tracking-[0.16em] text-accent uppercase">
						Quick Start
					</Card.Title>
				</Card.Header>
				<Card.Content className="pt-0">
					<ul className="m-0 list-disc space-y-2 pl-5 text-sm text-muted">
						<li>
							Edit <code>src/routes/index.tsx</code> to customize the home page.
						</li>
						<li>
							Update <code>src/components/Header.tsx</code> and{" "}
							<code>src/components/Footer.tsx</code> for brand links.
						</li>
						<li>
							Add routes in <code>src/routes</code> and tweak visual tokens in{" "}
							<code>src/styles.css</code>.
						</li>
					</ul>
				</Card.Content>
			</Card>
		</main>
	);
}
