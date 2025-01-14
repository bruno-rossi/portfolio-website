import { projects } from "@/app/lib/data";
import { ProjectCardProps } from "@/app/lib/definitions";
import Technology from "../experience/technology";

export default function Projects() {

    return (
        <section id="projects" className="mb-16">
            <h2 className="text-3xl mb-4 font-bold tracking-tight sm:text-2xl">Projects</h2>
            <ul className="group/list">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</ul>
        </section>
    )
}

export function ProjectCard({ project }: ProjectCardProps) {

    return (
        <li className="group my-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <a href={project.link} className="block">
                <h3 className="font-bold mb-2 lg:group-hover:text-details">
                    {project.title}</h3>
                <p className="mb-2">{project.description}</p>
                <img
                    className="mb-8 rounded-lg shadow-lg block w-full sm:w-4/5 md:w-2/3 lg:w-3/4 min-w-20 object-cover"
                    src={project.image}
                    alt={project.title}
                />
                <ul className="group/list flex flex-wrap gap-4">
                    {project.technologiesUsed.map(technology => <Technology key={technology} technology={technology} />)}
                </ul>
            </a>

        </li>
    )
}