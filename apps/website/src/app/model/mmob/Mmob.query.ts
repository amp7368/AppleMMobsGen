import { Optional } from '@misc/for-now';
import { combineLatest, map, Observable } from 'rxjs';

import { BaseQueryEntity } from '../BaseQueryEntity';
import { sessionQuery } from '../myself/session/Session.query';
import { User } from '../user/User.model';
import { userQuery } from '../user/User.query';
import { MmobState, MmobStore, mmobStore } from './Mmob.store';

export class MmobQuery extends BaseQueryEntity<MmobState> {
    constructor(protected override store: MmobStore) {
        super(store);
    }
}
export const mmobQuery = new MmobQuery(mmobStore);
