import { TechnologyProps } from "@/app/lib/definitions"

export default function Technology({ technology }: TechnologyProps) {

    return (
        <li className="list-none"><span className="bg-highlights1 rounded px-2 py-0.5">{technology}</span></li>
    )
}