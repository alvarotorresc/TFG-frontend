import { Types } from "../components/Phenomena/Phenomena.types";
import researcher from './researcher';

export default interface phenomenon {
    id: number
    title: string
    type: Types
    researcher: researcher
}