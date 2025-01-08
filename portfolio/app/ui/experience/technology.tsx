import { TechnologyProps } from "@/app/lib/definitions"

export default function Technology({ technology }: TechnologyProps) {

    return (
        <li><span className="bg-teal-300 rounded outline-teal-800 px-2 py-0.5">{technology}</span></li>
    )
}