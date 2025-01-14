// Import icons here
//  Import fonts
import { SocialLinkListItemProps } from "@/app/lib/definitions";
import { socialLinks } from "@/app/lib/data";

export default function SocialLinksList() {

    return (
        <ul className="group/list flex-nowrap justify-center space-x-4">
            {socialLinks.map(link => <SocialLinkListItem key={link.name} link={link} />)}
        </ul>
    )
}

export function SocialLinkListItem({ link }: SocialLinkListItemProps) {
    // const { icon: Icon } = link;

    return (
        <li className="group inline-flex lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
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

