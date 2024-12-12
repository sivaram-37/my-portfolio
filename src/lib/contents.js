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

const frontendDevelopment = ["HTML5", "CSS3"];

const programmingLanguages = ["JavaScript", "Java", "Python"];

const databaseManagement = ["MySQL"];

const versionControl = ["Git", "GitHub", "BitBucket"];

const framework = ["TailwindCSS", "ReactJS", "NextJS", "SpringBoot"];

const languageKnown = ["Tamil (Native)", "English"];

const hobbies = ["Playing Cricket", "Listening Musics"];

export const experiences = [
	{
		startYear: "NOV 2023",
		endYear: "MAY 2024",
		firstTitle: "Software Developer - Intern",
		secondTitle: "Kodnest Technologies",
		thirdTitle: "Bengaluru, Karnataka",
		array: internshipDetails,
	},
	{
		startYear: "JUL 2024",
		endYear: "Present",
		firstTitle: "Software Engineer Trainee",
		secondTitle: "Grasko Solution",
		thirdTitle: "Bengaluru, Karnataka",
		array: jobDetails,
	},
];

export const educations = [
	{
		startYear: "AUG 2019",
		endYear: "JUN 2023",
		firstTitle: "B.E - Computer Science",
		secondTitle: "R.M.K. College Of Engineering And Technology",
		thirdTitle: "Thiruvallur, Chennai, Tamilnadu",
		array: degreeDetails,
	},
	{
		startYear: "",
		endYear: "MAR 2019",
		firstTitle: "XII - Standard",
		secondTitle: "St. Mary's Matric. Hr. Sec. School",
		thirdTitle: "Vikravandi, Villupuram, Tamilnadu",
		array: hscDetails,
	},
	{
		startYear: "",
		endYear: "MAR 2017",
		firstTitle: "X - Standard",
		secondTitle: "St. Mary's Matric. Hr. Sec. School",
		thirdTitle: "Vikravandi, Villupuram, Tamilnadu",
		array: sslcDetails,
	},
];

export const skillsets = [
	{
		endYear: "Personal skillsets",
		array: personalSkillsets,
	},
	{
		endYear: "Technical skillsets",
		subSections: [
			{ subTitle: "Frontend Development", array: frontendDevelopment },
			{ subTitle: "Programming Languages", array: programmingLanguages },
			{ subTitle: "Database Management", array: databaseManagement },
			{ subTitle: "Version Control", array: versionControl },
			{ subTitle: "Framework", array: framework },
		],
	},
];

export const others = [
	{
		endYear: "Languages known",
		array: languageKnown,
	},
	{
		endYear: "Hobbies",
		array: hobbies,
	},
];
