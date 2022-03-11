import { Optional } from '@misc/for-now';
import { User } from '../user/User.model';

export type MmobBarebones = Omit<Mmob, 'createdBy' | 'collabs'>;

export interface Mmob {
    uuid: string;
    createdBy: number;
    collabs: number[];
    title: string;
}
export interface MmobWithUser extends MmobBarebones {
    createdBy: Optional<User>;
    collabs: Optional<User>[];
}
