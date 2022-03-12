import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { IMMob } from './MMob.model';

export interface MMobState extends EntityState<IMMob, string> {}

@StoreConfig({ name: 'mmob', idKey: 'uuid' })
export class MMobStore extends EntityStore<MMobState> {}
export const mmobStore: MMobStore = new MMobStore();
