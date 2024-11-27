import DownloadCv from "./download-cv";

export default function ResumeHeader({ title, hasDownloadCv = false }) {
	return (
		<div className="mt-2 mb-4 flex justify-between items-center">
			<span className="capitalize text-lg mg:text-xl font-extrabold tracking-wide md:tracking-wider lg:tracking-widest">
				{title}
			</span>
			{hasDownloadCv && <DownloadCv />}
		</div>
	);
}
