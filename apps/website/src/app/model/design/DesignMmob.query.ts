import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';

import { DesignMmobState } from './DesignMmob.model';
import { DesignMmobStore, designMmobStore } from './DesignMmob.store';

export class DesignMmobQuery extends Query<DesignMmobState> {
    constructor(protected override store: DesignMmobStore) {
        super(store);
    }
    designMmob: Observable<DesignMmobState> = this.select();
}
export const designQuery = new DesignMmobQuery(designMmobStore);
