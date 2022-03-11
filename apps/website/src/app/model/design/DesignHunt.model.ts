import { Hunt } from '../hunt/Hunt.model';

export interface DesignHuntState {
    savedHunt?: string;
    unsavedChanges: Partial<Hunt>;
}
