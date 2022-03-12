import { Store, StoreConfig } from '@datorama/akita';

import { DesignMMobState } from './DesignMMob.model';

@StoreConfig({ name: 'designmmob' })
export class DesignMMobStore extends Store<DesignMMobState> {
    constructor() {
        super({});
    }
}

export const designMMobStore = new DesignMMobStore();
