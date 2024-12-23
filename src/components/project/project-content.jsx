export function ProjectContent({ aboutProject }) {
	return (
		<ul className="ml-4 md:ml-8 px-3 text-gray-500 text-xs md:text-sm list-disc marker:text-primary marker:text-lg md:marker:text-2xl">
			{aboutProject.map((item, ind) => (
				<li key={ind}>{item}</li>
			))}
		</ul>
	);
}
