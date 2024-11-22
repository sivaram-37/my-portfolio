import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="w-dvh flex flex-col md:flex-row py-9 md:justify-center items-center">
			<div className="md:px-4 md:grid md:grid-cols-2">
				<Image
					src="/profile.jpg"
					alt="My profile image of desktop version"
					height={300}
					width={300}
					className="hidden md:block md:h-80 md:w-80 lg:h-96 lg:w-96 self-center rounded-full"
					priority
				/>
				<div className="flex flex-col">
					<Image
						src="/profile.jpg"
						alt="My profile image of mobile version"
						height={300}
						width={300}
						className="block md:hidden h-64 w-64 mb-5 self-center rounded-full"
						priority
					/>
					<h1 className="px-4 md:px-2 text-3xl md:text-8xl font-bold text-primary mb-3 md:mt-2 md:mb-4">
						Hello
					</h1>
					<div className="px-4 max-w-80 md:max-w-[26rem] mb-6">
						<h3 className="mb-1 md:mb-3 text-lg md:text-2xl font-semibold text-blue-300">
							Here&apos;s who I am & what I do
						</h3>
						<p className="text-sm md:text-base font-light text-gray-400">
							Hi!, I’m Sivaram, a tech enthusiast with a Bachelor’s degree in Computer Science
							and Engineering. I’m passionate about software development and have hands-on
							experience with Java, Next.js, Javascript and Tailwindcss. Through my internship,
							I’ve gained valuable insights into building practical applications, including a
							project on agricultural stock management in e-commerce. Outside of coding, I
							enjoy playing cricket and relaxing with some good music.Thanks for stopping by!
						</p>
					</div>
				</div>
				<ul className="px-4 flex justify-around col-span-2 mb-0 md:mt-10 md:mb-5 text-sm md:text-xl md:font-semibold">
					<li className="rounded-full flex justify-center items-center">
						<Link
							href="/resume"
							className="px-4 py-[30px] md:px-14 md:py-20 bg-fuchsia-600 hover:bg-fuchsia-400 hover:text-gray-800 rounded-full transition-all ease-in-out delay-75 duration-500"
						>
							Resume
						</Link>
					</li>
					<li className="rounded-full flex justify-center items-center">
						<Link
							href="/projects"
							className="px-4 py-[30px] md:px-14 md:py-20 bg-emerald-600 hover:bg-emerald-400 hover:text-gray-800 rounded-full transition-all ease-in-out delay-75 duration-500"
						>
							Projects
						</Link>
					</li>
					<li className="rounded-full flex justify-center items-center">
						<Link
							href="/contact"
							className="px-4 py-[30px] md:px-14 md:py-20 bg-orange-500 hover:bg-orange-400 hover:text-gray-800 rounded-full transition-all ease-in-out delay-75 duration-500"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</main>
	);
}
