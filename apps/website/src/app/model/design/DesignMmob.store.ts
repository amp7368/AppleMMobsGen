import { Store, StoreConfig } from '@datorama/akita';

import { DesignMmobState } from './DesignMmob.model';

@StoreConfig({ name: 'designmmob' })
export class DesignMmobStore extends Store<DesignMmobState> {
    constructor() {
        super({} as DesignMmobState);
    }
}

export const designMmobStore = new DesignMmobStore();
