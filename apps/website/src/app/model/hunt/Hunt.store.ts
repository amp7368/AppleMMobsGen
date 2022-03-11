import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { Hunt } from './Hunt.model';

export interface HuntState extends EntityState<Hunt, string> {}

@StoreConfig({ name: 'hunt', idKey: 'uuid' })
export class HuntStore extends EntityStore<HuntState> {
    constructor() {
        super();
    }
}
export const huntStore: HuntStore = new HuntStore();
