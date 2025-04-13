import { JSX } from "react";

export type Job = {
    company: string
    title: string
    start: string
    end: string
    link: string
}

export type Study = {
    university: string
    title: string
    start: string
    end: string
}

export type SocialLink = {
    label: string
    link: string
}

export type TechStack = {
    title: string
    content: string
}

export type Project = {
    title: string;
    link: string;
    shortDescription: string;
    longDescription?: string;
    logo: JSX.Element;
    imageUrl?: string;
    finished: boolean;
}