import Role from "./role"
import { experience } from "@/app/lib/data"

export default function Experience() {
    return (
        <section id="experience" className="mb-16">
            <h2 className="text-3xl mb-4 font-bold tracking-tight sm:text-2xl">Experience</h2>
            <ol className="group/list">{experience.map(role => <Role key={role.id} role={role} />)}</ol>
        </section>
    )
}