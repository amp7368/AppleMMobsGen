import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { MMob } from './Mmob.model';

export interface MmobState extends EntityState<MMob, string> {}

@StoreConfig({ name: 'mmob', idKey: 'uuid' })
export class MmobStore extends EntityStore<MmobState> {
    constructor() {
        super();
    }
}
export const mmobStore: MmobStore = new MmobStore();
