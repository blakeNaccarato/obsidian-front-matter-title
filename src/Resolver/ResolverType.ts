import { ResolverDynamicInterface } from "@src/Resolver/Interfaces";

export type ResolverEvents = {
    "resolver:unresolved": { path: string };
    "resolver.clear": { path?: string; all?: boolean };
    "resolver:delete": { path: string };
    "resolver:clear": undefined;
    "resolver:resolved": { value: string | null; modify: (v: string | null) => void };
};

export type NullResolverFactory = () => ResolverDynamicInterface;
export type ResolverTemplateFactory = (feature: string) => string;
