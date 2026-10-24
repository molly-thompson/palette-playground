import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

interface GreetingProps {
	name: string;
}

function Greeting({ name }: GreetingProps) {
	return (
		<div>
			<h1>Hello, {name}!</h1>
			<p>Welcome to our application</p>
		</div>
	);
}

describe("Greeting Component", () => {
	it("should render the greeting with the provided name", () => {
		render(<Greeting name="Alice" />);

		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toHaveTextContent("Hello, Alice!");
	});

	it("should render the welcome message", () => {
		render(<Greeting name="Bob" />);

		const paragraph = screen.getByText("Welcome to our application");
		expect(paragraph).toBeInTheDocument();
	});
});
