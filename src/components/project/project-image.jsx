import Image from "next/image";

export function ProjectImage({ srcImage, altImage }) {
	return (
		<div className="text-gray-800 flex justify-center">
			<Image
				src={srcImage}
				alt={altImage}
				width={437}
				height={271}
				priority
				className="border border-primary shadow-[0_0_4px] shadow-primary text-gray-200"
			/>
		</div>
	);
}
