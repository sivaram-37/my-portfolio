import React from "react";
import PageHeader from "@/components/page-header";
import ResumeHeader from "@/components/resume/resume-header";
import {
	BoxLayout,
	GroupedBoxLayout,
	MultipleBoxLayout,
	SingleContentLayout,
	TextLayout,
	TitleLayout,
} from "@/components/layouts";
import ResumeSubtitle from "@/components/resume/resume-subtitle";
import ResumeList from "@/components/resume/resume-list";
import { educations, experiences, others, skillsets } from "@/lib/data";

export default function ResumePage() {
	return (
		<section className="mt-6 mb-6 md:mt-10 md:mb-10">
			<PageHeader title="Resume" />

			{/* Experience with download cv*/}
			<GroupedBoxLayout>
				<ResumeHeader title="Experience" hasDownloadCv="true" />
				<MultipleBoxLayout>
					{experiences.map((experience, ind) => (
						<BoxLayout key={ind}>
							<TitleLayout
								startYear={experience.startYear}
								endYear={experience.endYear}
								firstTitle={experience.firstTitle}
								secondTitle={experience.secondTitle}
								thirdTitle={experience.thirdTitle}
							/>
							<TextLayout>
								<ResumeList array={experience.array} />
							</TextLayout>
						</BoxLayout>
					))}
				</MultipleBoxLayout>
			</GroupedBoxLayout>

			{/* Education */}
			<GroupedBoxLayout>
				<ResumeHeader title="Education" />
				<MultipleBoxLayout>
					{educations.map((education, ind) => (
						<BoxLayout key={ind}>
							<TitleLayout
								startYear={education.startYear}
								endYear={education.endYear}
								firstTitle={education.firstTitle}
								secondTitle={education.secondTitle}
								thirdTitle={education.thirdTitle}
							/>
							<TextLayout>
								<ResumeList array={education.array} />
							</TextLayout>
						</BoxLayout>
					))}
				</MultipleBoxLayout>
			</GroupedBoxLayout>

			{/* Skillsets */}
			<GroupedBoxLayout>
				<ResumeHeader title="Skillsets" />
				<MultipleBoxLayout>
					{skillsets.map((skillset, ind) => (
						<SingleContentLayout key={ind}>
							<TitleLayout endYear={skillset.endYear} />
							{skillset.subSections ?
								skillset.subSections.map((subSection, ind) => (
									<React.Fragment key={ind}>
										<ResumeSubtitle subTitle={subSection.subTitle} />
										<ResumeList
											classname="ml-10 md:ml-20 grid grid-cols-1 md:grid-cols-2"
											array={subSection.array}
										/>
									</React.Fragment>
								))
							:	<ResumeList
									classname="ml-10 md:ml-20 grid grid-cols-1 md:grid-cols-2"
									array={skillset.array}
								/>
							}
						</SingleContentLayout>
					))}
				</MultipleBoxLayout>
			</GroupedBoxLayout>

			{/* Others */}
			<GroupedBoxLayout>
				<ResumeHeader title="Others" />
				<MultipleBoxLayout>
					{others.map((other, ind) => (
						<SingleContentLayout key={ind}>
							<TitleLayout endYear={other.endYear} />
							<ResumeList
								classname="ml-10 md:ml-20 grid grid-cols-1 md:grid-cols-2"
								array={other.array}
							/>
						</SingleContentLayout>
					))}
				</MultipleBoxLayout>
			</GroupedBoxLayout>
		</section>
	);
}
