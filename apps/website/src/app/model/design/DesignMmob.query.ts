import { Query } from '@datorama/akita';

import { DesignMMobState } from './DesignMMob.model';
import { DesignMMobStore, designMMobStore } from './DesignMMob.store';

export class DesignMMobQuery extends Query<DesignMMobState> {
    constructor(protected override store: DesignMMobStore) {
        super(store);
    }
}
export const designQuery = new DesignMMobQuery(designMMobStore);
