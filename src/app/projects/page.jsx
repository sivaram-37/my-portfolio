import PageHeader from "@/components/page-header";
import { ProjectBoxLayout, ProjectRootLayout } from "@/components/layouts";
import { ProjectContent } from "@/components/project/project-content";
import { ProjectImage } from "@/components/project/project-image";
import { ProjectTitle } from "@/components/project/project-title";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
	return (
		<section className="mt-6 mb-6 md:mt-10 md:mb-10">
			<PageHeader title="Projects" />
			<ProjectRootLayout>
				{projects.map((project, ind) => (
					<ProjectBoxLayout key={ind}>
						<ProjectTitle
							projectName={project.projectName}
							projectLink={project.projectLink}
						/>
						<ProjectImage srcImage={project.srcImage} altImage={project.altImage} />
						<ProjectContent aboutProject={project.aboutProject} />
					</ProjectBoxLayout>
				))}
			</ProjectRootLayout>
		</section>
	);
}
