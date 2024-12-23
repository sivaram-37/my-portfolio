import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function ProjectTitle({ projectName, projectLink }) {
	return (
		<div className="px-3 py-2 border-l-8 border-primary flex gap-2 md:gap-4 items-center">
			<h1 className="text-lg md:text-2xl">{projectName}</h1>
			<button className="p-1 bg-primary text-slate-100 rounded hover:bg-blue-500 hover:text-gray-900">
				<Link href={projectLink} target="_blank">
					<ExternalLink size={12} strokeWidth={1.75} className="block md:hidden" />
					<ExternalLink size={18} strokeWidth={2.5} className="hidden md:block" />
				</Link>
			</button>
		</div>
	);
}
