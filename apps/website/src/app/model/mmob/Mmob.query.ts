import { Optional } from '@misc/for-now';
import { combineLatest, map, Observable } from 'rxjs';

import { BaseQueryEntity } from '../BaseQueryEntity';
import { sessionQuery } from '../myself/session/Session.query';
import { SessionState } from '../myself/session/Session.store';
import { User } from '../user/User.model';
import { userQuery } from '../user/User.query';
import { Mmob, MmobWithUser } from './Mmob.model';
import { MmobState, MmobStore, mmobStore } from './Mmob.store';

type PreJoiningUserMmob = [Mmob[], User[], SessionState];
type JoinedUserMmob = [MmobWithUser[], SessionState];
function doJoinUserMmob(props: PreJoiningUserMmob): JoinedUserMmob {
    const [mmobs, users, session] = props;
    const mappedMmobs = mmobs.map((mmob: Mmob): MmobWithUser => {
        const createdBy: Optional<User> = users.find(
            (user: User) => mmob.createdBy == user.id
        );
        const collabs: Optional<User>[] = users.filter((user: User) => {
            return mmob.collabs.includes(user.id);
        });
        for (const collabId of mmob.collabs) {
            if (!collabs.find((collab) => collab?.id === collabId))
                collabs.push(undefined);
        }
        return { ...mmob, createdBy, collabs };
    });
    return [mappedMmobs, session];
}
export class MmobQuery extends BaseQueryEntity<MmobState> {
    constructor(protected override store: MmobStore) {
        super(store);
    }
    private joinUser$: Observable<PreJoiningUserMmob> = combineLatest([
        this.selectAll(),
        userQuery.selectAll(),
        sessionQuery.select(),
    ]);

    joinUserByMmob$: Observable<JoinedUserMmob> = this.joinUser$.pipe(
        map(doJoinUserMmob)
    );

    createdByMe$: Observable<MmobWithUser[]> = this.filterByWithExtract(
        this.joinUserByMmob$,
        ([mmobs]: JoinedUserMmob) => mmobs,
        (mmob: MmobWithUser, [mmobs, session]: JoinedUserMmob) =>
            mmob.createdBy?.id === session.userId
    );
    sharedWithMe$: Observable<MmobWithUser[]> = this.filterByWithExtract(
        this.joinUserByMmob$,
        ([mmobs]: JoinedUserMmob) => mmobs,
        (mmob: MmobWithUser, [mmobs, session]: JoinedUserMmob) =>
            !!mmob.collabs.find(
                (collab: Optional<User>) => collab?.id === session.userId
            )
    );
}
export const mmobQuery = new MmobQuery(mmobStore);
