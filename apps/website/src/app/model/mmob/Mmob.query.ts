import { map, Observable, tap } from 'rxjs';

import { BaseQueryEntity } from '../BaseQueryEntity';
import { IMMob, MMob } from './MMob.model';
import { MMobState, MMobStore, mmobStore } from './MMob.store';

export class MMobQuery extends BaseQueryEntity<MMobState> {
    constructor(protected override store: MMobStore) {
        super(store);
    }
    selectAllMMob$: Observable<MMob[]> = this.selectAll().pipe(
        map((mobs: IMMob[]) => mobs.map((mmob: IMMob) => MMob.create(mmob)))
    );
    selectMMob$(uuid: string) {
        return this.selectEntity(uuid).pipe(map(MMob.createOpctional));
    }
}
export const mmobQuery = new MMobQuery(mmobStore);
