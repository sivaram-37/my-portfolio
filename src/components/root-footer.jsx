import Link from "next/link";
import { AiOutlineX } from "react-icons/ai";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function RootFooter() {
	return (
		<footer>
			<div className="px-4 md:px-12">
				<div className="px-3 pb-3 md:px-4 md:pb-0 border-t border-primary" />
				<ul className="space-y-4 md:flex md:justify-between md:items-center">
					<li>
						<h4 className="text-sm md:text-xl font-semibold">Phone</h4>
						<Link
							href="tel:+918940671901"
							className="text-xs md:text-sm font-thin text-gray-400 hover:text-blue-400"
						>
							+91 89406 71901
						</Link>
					</li>
					<li>
						<h4 className="text-sm md:text-xl font-semibold">Email</h4>
						<Link
							href="mailto:sivaram3710@gmail.com"
							className="text-xs md:text-sm font-thin text-gray-400 hover:text-blue-400"
						>
							sivaram3710@gmail.com
						</Link>
					</li>
					<li>
						<h4 className="text-sm md:text-xl font-semibold">Follow Me</h4>
						<div className="mt-1 py-1 flex gap-4">
							<Link href="https://www.linkedin.com/in/sivaramvajravelu" target="_blank">
								<BsLinkedin className="text-gray-400 hover:text-blue-400" size={20} />
							</Link>
							<Link href="#" target="_blank">
								<BsGithub className="text-gray-400 hover:text-blue-400" size={20} />
							</Link>
							<Link href="#" target="_blank">
								<BsInstagram className="text-gray-400 hover:text-blue-400" size={20} />
							</Link>
							<Link href="#" target="_blank">
								<AiOutlineX className="text-gray-400 hover:text-blue-400" size={20} />
							</Link>
						</div>
					</li>
				</ul>
			</div>
			<div className="mt-3 py-1 flex justify-center items-start text-gray-200 bg-primary text-[11px] md:text-xs">
				<p>&copy; {new Date().getFullYear()} By Sivaram.</p>
			</div>
		</footer>
	);
}
