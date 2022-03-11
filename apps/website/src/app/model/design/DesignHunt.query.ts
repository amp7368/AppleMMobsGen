import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';

import { DesignHuntState } from './DesignHunt.model';
import { DesignHuntStore, designHuntStore } from './DesignHunt.store';

export class DesignHuntQuery extends Query<DesignHuntState> {
    constructor(protected override store: DesignHuntStore) {
        super(store);
    }
    designHunt: Observable<DesignHuntState> = this.select();
}
export const designQuery = new DesignHuntQuery(designHuntStore);
