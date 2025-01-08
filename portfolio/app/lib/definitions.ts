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