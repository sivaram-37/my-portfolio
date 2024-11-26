import Link from "next/link";

export default function DownloadCv() {
	return (
		<Link
			href="/resume.pdf"
			target="_blank"
			rel="noopener noreferrer"
			className="text-xs md:text-sm lg:text-base px-4 py-1 bg-primary hover:bg-blue-500 rounded-lg"
		>
			Download CV
		</Link>
	);
}
