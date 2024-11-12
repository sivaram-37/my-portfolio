import "./globals.css";
import { Lato } from "next/font/google";
import RootHeader from "@/components/root-header";
import RootFooter from "@/components/root-footer";

export const metadata = {
	title: "Sivaram Portfolio",
	description: "My Portfolio Of Web Developer",
};

const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${lato} bg-gray-800 text-gray-200 antialiased`}>
				<RootHeader />
				{children}
				<RootFooter />
			</body>
		</html>
	);
}
