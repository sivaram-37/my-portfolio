"use client";

import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "./ui/sheet";
import { navRoutes } from "@/lib/link";

export function DesktopNavigation() {
	const pathname = usePathname();

	return (
		<ul className="hidden md:flex">
			{navRoutes.map((route, index) => (
				<li key={route.url}>
					<Link
						href={route.url}
						className={cn(
							"font-thin text-blue-400 hover:text-gray-300 md:px-4",
							pathname === route.url && "text-gray-400 hover:text-gray-400",
							index !== navRoutes.length - 1 && "border-r-2 border-gray-600"
						)}
					>
						{route.title}
					</Link>
				</li>
			))}
		</ul>
	);
}

export function MobileNavigation() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};
	const handleLinkClick = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024 && isOpen) {
				setIsOpen(false);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isOpen]);

	return (
		<div className="md:hidden">
			<button
				aria-label="menu"
				onClick={toggleNavbar}
				className="flex flex-row items-center justify-center"
			>
				<MenuIcon className="stroke-gray-200" />
			</button>
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetContent
					side="left"
					className="py-2 w-[65dvw] max-h-[100dvh] overflow-y-auto border-r-0 bg-gray-800"
				>
					<SheetTitle />
					<SheetDescription />
					<nav className="space-y-0 flex flex-col">
						{navRoutes.map((nav, index) => (
							<Link
								key={nav.url}
								className={cn(
									"text-gray-200 text-left w-full py-2",
									index !== navRoutes.length - 1 && "border-b border-b-gray-400",
									pathname === nav.url && "text-blue-500 hover:text-blue-500"
								)}
								href={nav.url}
								onClick={handleLinkClick}
							>
								{nav.title}
							</Link>
						))}
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	);
}
