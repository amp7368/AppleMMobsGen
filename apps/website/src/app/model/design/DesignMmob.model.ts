import { Mmob } from '../mmob/Mmob.model';

export interface DesignMmobState {
    savedMmob?: string;
    unsavedChanges: Partial<Mmob>;
}
