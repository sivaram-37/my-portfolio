import PageHeader from "@/components/page-header";
import ResumeHeader from "@/components/resume/resume-header";
import {
	BoxLayout,
	GroupedBoxLayout,
	MultipleBoxLayout,
	SingleContentLayout,
	TextLayout,
	TitleLayout,
} from "@/components/resume/box-layout";
import ResumeSubtitle from "@/components/resume/resume-subtitle";
import ResumeList from "@/components/resume/resume-list";

const internshipDetails = [
	"Collaborated with a dynamic team to develop and maintain Java-based backend systems, ensuring robust and scalable solutions for client applications.",
	"Built responsive and interactive user interfaces using HTML and CSS enhancing user experience across multiple web projects.",
	"Participated in weekly code reviews and gained expertise in best practices for clean, maintainable code.",
	"Demonstrated a quick learning curve by mastering Spring Boot, enabling the team to expedite API development.",
];
const jobDetails = [
	`Maintained user interfaces for the healthcare product "KanTime" using modern technologies.`,
	`Contributed to the micro-management and enhancement of "KanTime Home Health", a specialized module for home healthcare services.`,
	`Currently developing "Identity Service" a module in "KanTime Home Health" using modern framework like Next.js and styled in TailwindCSS and also with some libraries like "Zustand" - a state management library, "TanStack Query" - a data fetching library.`,
	`Collaborated with cross-functional teams to integrate APIs seamlessly with the user interface, ensuring a responsive and intuitive user experience.`,
	`Leveraged TanStack Query to efficiently handle data fetching, caching, and synchronization, improving application performance and developer workflow.`,
];
const degreeDetails = [
	`Graduated with a 9.03 CGPA.`,
	`Acquired strong knowledge in Web Development, Algorithms, and Database Management System.`,
	`Completed a project titled "Stock Management of Agricultural Products in an E-commerce Environment", utilizing Java, MySQL, HTML, CSS, and JavaScript.`,
	`Participated in inter-college hackathon and workshop`,
	`Organized and successfully executed "Make it Memes," a non-technical event at my department's symposium, "Xenioz 2022," which was attended by students from other colleges and universities.`,
];
const hscDetails = [
	`Finished my Higher Secondary Certificate(HSC) with percentage of 79.5%`,
	`With major subjects such as Mathematics, Physics, Chemistry and Biology`,
	`Actively participated in inter-school quiz competitions`,
];
const sslcDetails = [
	`Finished my Secondary School Leaving Certificate(SSLC) with percentage of 92%`,
	`With major subjects such as English, Mathematics, Science and Social Science.`,
	`Participated in "Taekwondo" martial arts and won zonal-level school games and also won "Gold" in Tamilnadu Taekwondo Association in 2015 and won "Bronze" in 2016.`,
];
const personalSkillsets = [
	"Teamwork & Collaboration",
	"Effective Communication",
	"Quick Learner",
	"Time Management",
	"Problem-Solving",
];

export default function ResumePage() {
	return (
		<section className="mt-6 mb-6 md:mt-10 md:mb-10">
			<PageHeader title="Resume" />

			{/* Experience with download cv*/}
			<GroupedBoxLayout>
				<ResumeHeader title="Experience" hasDownloadCv="true" />
				<MultipleBoxLayout>
					<BoxLayout>
						<TitleLayout
							startYear="NOV 2023"
							endYear="MAY 2024"
							firstTitle="Software Developer - Intern"
							secondTitle="Kodnest Technologies"
							thirdTitle="Bengaluru, Karnataka"
						/>
						<TextLayout>
							<ResumeList array={internshipDetails} />
						</TextLayout>
					</BoxLayout>
					<BoxLayout>
						<TitleLayout
							startYear="JUL 2024"
							endYear="Present"
							firstTitle="Software Engineer Trainee"
							secondTitle="Grasko Solution"
							thirdTitle="Bengaluru, Karnataka"
						/>
						<TextLayout>
							<ResumeList array={jobDetails} />
						</TextLayout>
					</BoxLayout>
				</MultipleBoxLayout>
			</GroupedBoxLayout>

			{/* Education */}
			<GroupedBoxLayout>
				<ResumeHeader title="Education" />
				<MultipleBoxLayout>
					{/* College */}
					<BoxLayout>
						<TitleLayout
							startYear="AUG 2019"
							endYear="JUN 2023"
							firstTitle="R.M.K. College Of Engineering And Technology"
							secondTitle="B.E - Computer Science"
							thirdTitle="Thiruvallur, Chennai, Tamilnadu"
						/>
						<TextLayout>
							<ResumeList array={degreeDetails} />
						</TextLayout>
					</BoxLayout>

					{/* 12th */}
					<BoxLayout>
						<TitleLayout
							endYear="MAR 2019"
							firstTitle="St. Mary's Matric. Hr. Sec. School"
							secondTitle="XII"
							thirdTitle="Vikravandi, Villupuram, Tamilnadu"
						/>
						<TextLayout>
							<ResumeList array={hscDetails} />
						</TextLayout>
					</BoxLayout>

					{/* 10th */}
					<BoxLayout>
						<TitleLayout
							endYear="MAR 2017"
							firstTitle="St. Mary's Matric. Hr. Sec. School"
							secondTitle="X"
							thirdTitle="Vikravandi, Villupuram, Tamilnadu"
						/>
						<TextLayout>
							<ResumeList array={sslcDetails} />
						</TextLayout>
					</BoxLayout>
				</MultipleBoxLayout>
			</GroupedBoxLayout>

			{/* Skillsets */}
			<GroupedBoxLayout>
				<ResumeHeader title="Skillsets" />
				<MultipleBoxLayout>
					{/* Personal skillsets */}
					<SingleContentLayout>
						<TitleLayout endYear="Personal skillsets" />
						<ResumeList
							classname="ml-10 md:ml-20 grid grid-cols-1 md:grid-cols-2"
							array={personalSkillsets}
						/>
					</SingleContentLayout>

					{/* Technical skillsets */}
					<SingleContentLayout>
						<TitleLayout endYear="Technical skillsets" />

						<ResumeSubtitle subTitle="Frontend Development" />
						<ResumeList
							classname="ml-10 md:ml-20 grid grid-cols-1 md:grid-cols-2"
							array={["HTML5", "CSS3"]}
						/>

						<ResumeSubtitle subTitle="Programming Languages" />
						<ResumeList
							classname="ml-10 md:ml-20 grid grid-cols-1 md:grid-cols-2"
							array={["JavaScript", "Java", "Python"]}
						/>

						<ResumeSubtitle subTitle="Database Management" />
						<ResumeList
							classname="ml-10 md:ml-20 grid grid-cols-1 md:grid-cols-2"
							array={["MySQL"]}
						/>

						<ResumeSubtitle subTitle="Version Control" />
						<ResumeList
							classname="ml-10 md:ml-20 grid grid-cols-1 md:grid-cols-2"
							array={["Git", "GitHub", "BitBucket"]}
						/>

						<ResumeSubtitle subTitle="Framework" />
						<ResumeList
							classname="ml-10 md:ml-20 grid grid-cols-1 md:grid-cols-2"
							array={["TailwindCSS", "ReactJS", "NextJS", "SpringBoot"]}
						/>
					</SingleContentLayout>
				</MultipleBoxLayout>
			</GroupedBoxLayout>

			{/* Others */}
			<GroupedBoxLayout>
				<ResumeHeader title="Others" />
				<MultipleBoxLayout>
					{/* Languages */}
					<SingleContentLayout>
						<TitleLayout endYear="Languages known" />
						<ResumeList
							classname="ml-10 md:ml-20 grid grid-cols-1 md:grid-cols-2"
							array={["Tamil (Native)", "English"]}
						/>
					</SingleContentLayout>

					{/* Hobbies */}
					<SingleContentLayout>
						<TitleLayout endYear="Hobbies" />
						<ResumeList
							classname="ml-10 md:ml-20 grid grid-cols-1 md:grid-cols-2"
							array={["Playing Cricket", "Listening Musics"]}
						/>
					</SingleContentLayout>
				</MultipleBoxLayout>
			</GroupedBoxLayout>
		</section>
	);
}
