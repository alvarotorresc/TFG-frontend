import researcher from "../../../../models/researcher"



export type PhenomenaProps = {
    id: string
    title: string
    description: string
    type: string
    researcher: researcher
    handleDelete: (id: any) => void
}

export type OcurrencesProps = {
    id: string,
    date: Date,
    ubication: JSON,
    description: string,
    witness: boolean,
    resolved: boolean
    handleDelete: (id: any) => void
}
