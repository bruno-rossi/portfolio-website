// Import icons here
//  Import fonts
import { SocialLinkListItemProps } from "@/app/lib/definitions"

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brossi1/"
    },
    {
        name: "GitHub",
        url: "https://github.com/bruno-rossi"
    },
    {
        name: "Blog",
        url: "https://brunorossi.hashnode.dev/"
    }
]

export default function SocialLinksList() {

    return (
        <ul className="flex-nowrap justify-center space-x-4">
            {socialLinks.map(link => <SocialLinkListItem key={link.name} link={link} />)}
        </ul>
    )
}

export function SocialLinkListItem({ link }: SocialLinkListItemProps) {
    // const { icon: Icon } = link;

    return (
        <li className="inline-flex">
            <a 
                href={link.url} 
                target="_blank" 
                aria-label={`${link.name} (Opens in a new tab)`} 
                title={link.name}
                rel="noopener noreferrer"
            >
                <span>{link.name}</span>
            </a>
        </li>
    )
}

