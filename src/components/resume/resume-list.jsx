import { cn } from "@/lib/utils";

export default function ResumeList({ classname, array }) {
	return (
		<ul
			role="list"
			className={cn(
				"ml-4 list-disc marker:text-primary marker:text-lg md:marker:text-2xl",
				classname
			)}
		>
			{array.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
}
