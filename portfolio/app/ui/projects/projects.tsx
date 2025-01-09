import { projects } from "@/app/lib/data";
import { ProjectCardProps } from "@/app/lib/definitions";
import Technology from "../experience/technology";

export default function Projects() {

    return (
        <section id="projects" className="mb-8">
            <h2 className="text-lg">Projects</h2>
            <ul>{projects.map(project => <ProjectCard key={project.id} project={project} />)}</ul>
        </section>
    )
}

export function ProjectCard({ project }: ProjectCardProps) {

    return (
        <li className="my-8">
            <a href={project.link}>
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>
                <img className="mb-4" src={project.image} alt={project.title} />
                <ul className="flex flex-wrap gap-4">
                    {project.technologiesUsed.map(technology => <Technology key={technology} technology={technology} />)}
                </ul>
            </a>

        </li>
    )
}