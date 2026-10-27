import { Button, useTheme } from "@heroui/react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme("light");
	const isDark = resolvedTheme === "dark";

	return (
		<Button
			isIconOnly
			variant="ghost"
			size="sm"
			onPress={() => setTheme(isDark ? "light" : "dark")}
			aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
		>
			{isDark ? (
				<Moon aria-hidden="true" size={18} />
			) : (
				<Sun aria-hidden="true" size={18} />
			)}
		</Button>
	);
}
