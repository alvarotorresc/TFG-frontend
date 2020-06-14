import researcher from "../../../../models/researcher";

export type ResearcherProps = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    rol: string;
    nationality: string;
    image: string;
    researcher: researcher;
    phenomena: []
};

export type CardProps = {
    id: string;
    name: string;
    email: string;
    age: number;
    rol: string;
    image: string;
    nationality: string;
    handleDelete: (id: any) => void;
    phenomena: []
};