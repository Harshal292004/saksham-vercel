import { Connection } from "mongoose"

declare global{
    var mongoose:{
        conn:Connection| null;
        promise:Promise<Connection> | null;
    }
}

type FeatureCard={
    title: string;
    icon:  ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    highlights: Array<string>;
    details:string;
    href:string|null;
    requirements:string|null;
}

export {FeatureCard}