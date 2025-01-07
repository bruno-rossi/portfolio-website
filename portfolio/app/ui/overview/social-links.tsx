// Import icons here
//  Import fonts
import { SocialLinkListItemProps } from "@/app/lib/definitions"

const socialLinks = [
    {
        name: "LinkedIn",
        icon: "icon",
        url: "https://www.linkedin.com/in/brossi1/"
    },
    {
        name: "GitHub",
        icon: "icon",
        url: "https://github.com/bruno-rossi"
    },
    {
        name: "Hashnode",
        icon: "icon",
        url: "https://brunorossi.hashnode.dev/"
    }
]

export default async function SocialLinksList() {
    return (
        <ul>
            {socialLinks.map(link => <SocialLinkListItem key={link.name} link={link} />)}
        </ul>
    )
}

export function SocialLinkListItem({ link }: SocialLinkListItemProps) {

    return (
        <li>
            <a 
                href={link.url} 
                target="_blank" 
                aria-label={`${link.name} (Opens in a new tab)`} 
                title={link.name}>
                <img src="" alt={`Icon image for ${link.name}`}/>
            </a>
        </li>
    )
}

