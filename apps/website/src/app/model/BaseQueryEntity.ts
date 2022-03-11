import {
    EntityState,
    EntityStore,
    getEntityType,
    QueryEntity,
} from '@datorama/akita';
import { Predicate } from '@misc/for-now';
import { map, Observable, filter } from 'rxjs';

export class BaseQueryEntity<
    State extends EntityState<any, any>,
    EntityType = getEntityType<State>
> extends QueryEntity<State> {
    constructor(store: EntityStore<State>) {
        super(store);
    }
    filterThisBy(filterBy: Predicate<EntityType>): Observable<EntityType[]> {
        return this.filterBy(this.selectAll(), filterBy);
    }
    filterBy<T>(
        obsv: Observable<T[]>,
        filterBy: (hunt: T) => boolean
    ): Observable<T[]> {
        return obsv.pipe(map((hunts: T[]) => hunts.filter(filterBy)));
    }
    filterByWithExtract<Original, Extracted>(
        obsv: Observable<Original>,
        extractArray: (original: Original) => Extracted[],
        filterBy: (element: Extracted, original: Original) => boolean
    ): Observable<Extracted[]> {
        return obsv.pipe(
            map((original: Original) => {
                const extractedArray: Extracted[] = extractArray(original);
                return extractedArray.filter((element: Extracted) =>
                    filterBy(element, original)
                );
            })
        );
    }
}
