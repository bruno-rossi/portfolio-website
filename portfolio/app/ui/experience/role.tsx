import { RoleProps } from "@/app/lib/definitions"
import Technology from "./technology"

export default function Role({ role }: RoleProps) {

    const mainRole = role.titles.pop();
    role.titles.reverse();

    return (
        <li className="group lg:inline-flex px-2 py-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <header className="min-w-[20%]"><span>{`${role.dateStarted} - ${role.dateEnded}`}</span></header>
            <div>
                <h3 className="font-bold mb-2 lg:group-hover:text-details">
                    {`${mainRole} - ${role.companyName}`}
                </h3>
                <div className="mb-2">
                    {role.titles.map(title => <h3>{title}</h3>)}
                </div>
                <p className="mb-4">{role.description}</p>
                {/* <ul className="flex flex-wrap gap-4">
                    {role.technologiesUsed.map(technology => <Technology key={technology} technology={technology} />)}
                </ul> */}
            </div>
        </li>
    )
}