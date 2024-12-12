export function GroupedBoxLayout({ children }) {
	return <div className="mt-8 md:mt-16 w-[90%] lg:w-3/4 mx-auto">{children}</div>;
}

export function MultipleBoxLayout({ children }) {
	return <div className="flex flex-col gap-4 md:gap-7">{children}</div>;
}

export function BoxLayout({ children }) {
	return (
		<div className="px-4 md:px-16 py-6 md:py-12 bg-white grid grid-cols-12 shadow-[0_0_10px] shadow-white rounded-sm">
			{children}
		</div>
	);
}

export function SingleContentLayout({ children }) {
	return (
		<div className="px-4 md:px-16 py-6 md:py-12 text-gray-500 text-xs md:text-base bg-white shadow-[0_0_10px] shadow-white rounded-sm">
			{children}
		</div>
	);
}

export function TitleLayout({ startYear = "", endYear, firstTitle, secondTitle, thirdTitle }) {
	return (
		<div className="col-span-12 mb-4 md:col-span-5">
			{endYear && (
				<h1 className="mb-1 text-lg md:text-2xl font-bold text-primary">
					{startYear !== "" ? `${startYear} - ${endYear}` : endYear}
				</h1>
			)}
			{firstTitle && (
				<h2 className="mb-1 text-blue-500 text-base md:text-lg leading-tight">{firstTitle}</h2>
			)}
			{secondTitle && (
				<h3 className="mb-1 text-gray-700 text-sm md:text-base">{secondTitle}</h3>
			)}
			{thirdTitle && <h4 className="mb-1 text-gray-400 text-xs md:text-sm">{thirdTitle}</h4>}
		</div>
	);
}

export function TextLayout({ children }) {
	return (
		<div className="text-xs md:text-base text-gray-500 col-span-12 md:col-span-7">
			{children}
		</div>
	);
}
