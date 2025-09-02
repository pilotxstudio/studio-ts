import type { Metadata } from "next";

import { RootLayout } from "@/components/RootLayout";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
	title: {
		template: "%s - PilotX Studio",
		default: "PilotX Studio.",
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full text-base antialiased">
			<body className="flex min-h-full flex-col">
				<RootLayout>{children}</RootLayout>
			</body>
		</html>
	);
}
