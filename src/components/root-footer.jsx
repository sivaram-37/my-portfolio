import Link from "next/link";
import { AiOutlineX } from "react-icons/ai";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function RootFooter() {
	return (
		<footer className="px-4 md:px-12 border-b-8 md:border-b-[12px] border-primary">
			<div className="px-3 pb-3 md:px-4 md:pb-0 border-t border-gray-500" />
			<ul className="space-y-4 md:flex md:justify-between md:items-center">
				<li>
					<h4 className="text-sm md:text-xl font-semibold">Phone</h4>
					<p className="text-xs md:text-sm font-thin text-gray-400">+91 8940671901</p>
				</li>
				<li>
					<h4 className="text-sm md:text-xl font-semibold">Email</h4>
					<p className="text-xs md:text-sm font-thin text-gray-400">sivaram3710@gmail.com</p>
				</li>
				<li>
					<h4 className="text-sm md:text-xl font-semibold">Follow Me</h4>
					<div className="mt-1 py-1 flex gap-4">
						<Link href="https://www.linkedin.com/in/sivaramvajravelu" target="_blank">
							<BsLinkedin className="hover:text-primary" size={20} />
						</Link>
						<Link href="#" target="_blank">
							<BsGithub className="hover:text-primary" size={20} />
						</Link>
						<Link href="#" target="_blank">
							<BsInstagram className="hover:text-primary" size={20} />
						</Link>
						<Link href="#" target="_blank">
							<AiOutlineX className="hover:text-primary" size={20} />
						</Link>
					</div>
				</li>
			</ul>
			<p className="pt-4 pb-1 md:pt-8 flex justify-center text-gray-400 text-xs md:text-sm">
				&copy; 2024 By Sivaram.
			</p>
		</footer>
	);
}
