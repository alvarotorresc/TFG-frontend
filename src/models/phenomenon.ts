import { Types } from "../components/Phenomena/utils/Phenomena.types";
import researcher from './researcher';

export default interface phenomenon {
    id: number
    title: string
    type: Types
    researcher: researcher
}