import { RoleProps } from "@/app/lib/definitions"
import Technology from "./technology"

export default function Role({ role }: RoleProps) {
    return (
        <li className="lg:inline-flex my-8">
            <header className="min-w-[20%]"><span>{`${role.dateStarted} - ${role.dateEnded}`}</span></header>
            <div >
                <h3 className="font-bold mb-2">{role.companyName}</h3>
                <div className="mb-2">
                    {role.titles.map(title => <h3>{title}</h3>)}
                </div>
                <p className="mb-4">{role.description}</p>
                <ul className="inline-flex justify-center space-x-4">
                    {role.technologiesUsed.map(technology => <Technology key={technology} technology={technology} />)}
                </ul>
            </div>
        </li>
    )
}