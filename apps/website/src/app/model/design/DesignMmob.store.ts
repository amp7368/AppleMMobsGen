import { Store, StoreConfig } from '@datorama/akita';

import { DesignMmobState } from './DesignMmob.model';

@StoreConfig({ name: 'designmmob' })
export class DesignMmobStore extends Store<DesignMmobState> {
    constructor() {
        super({
            unsavedChanges: {},
        });
    }
}

export const designMmobStore = new DesignMmobStore();
