import Link from "next/link";
import { DesktopNavigation, MobileNavigation } from "./navigation";

export default function RootHeader() {
	return (
		<header className="border-t-4 md:border-t-8 border-primary">
			<nav className="px-4 py-3 md:px-8 md:py-6 flex justify-between items-center">
				<ul>
					<li>
						<Link href="/" className="space-x-1 md:space-x-2">
							<span className="inline-block h-3.5 w-3.5 rounded-full md:h-5 md:w-5 bg-primary" />
							<span className="font-bold text-lg md:text-2xl hover:text-gray-300">
								Sivaram V
							</span>
						</Link>
					</li>
					<li className="font-thin text-blue-300 text-xs md:text-sm">Web Developer</li>
				</ul>
				<DesktopNavigation />
				<MobileNavigation />
			</nav>
		</header>
	);
}
