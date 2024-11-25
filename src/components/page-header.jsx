export default function PageHeader({ title }) {
	return (
		<h1 className="mb-3 md:mb-6 flex justify-center items-center gap-1 md:gap-2">
			<span className="inline-block h-5 w-5 md:h-8 md:w-8 bg-primary rounded-full" />
			<span className="font-bold text-xl md:text-4xl">{title}</span>
		</h1>
	);
}
