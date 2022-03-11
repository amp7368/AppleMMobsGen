import { Store, StoreConfig } from '@datorama/akita';

import { DesignHuntState } from './DesignHunt.model';

@StoreConfig({ name: 'designhunt' })
export class DesignHuntStore extends Store<DesignHuntState> {
    constructor() {
        super({
            unsavedChanges: {},
        });
    }
}

export const designHuntStore = new DesignHuntStore();
