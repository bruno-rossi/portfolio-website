import Role from "./role"
import { experience } from "@/app/lib/data"

export default function Experience() {
    return (
        <section id="experience">
            <h2 className="text-lg">Experience</h2>
            <ol>{experience.map(role => <Role key={role.id} role={role} />)}</ol>
        </section>
    )
}