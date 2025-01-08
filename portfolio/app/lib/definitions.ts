import * as React from 'react';

export type IconObject = {
    name: string;
    Component: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
};

export type SocialLink = {
    name: string;
    // icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    url: string;
}

export type SocialLinkListItemProps = {
    link: SocialLink;
}

export type Role = {
    id: number,
    dateStarted: string,
    dateEnded: string,
    companyName: string,
    titles: string[],
    description: string,
    technologiesUsed: string[]
}

export type RoleProps = {
    role: Role
}

export type TechnologyProps = {
    technology: string
}