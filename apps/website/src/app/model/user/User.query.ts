import { BaseQueryEntity } from '../BaseQueryEntity';
import { UserState, UserStore, userStore } from './User.store';

export class UserQuery extends BaseQueryEntity<UserState> {
    constructor(protected override store: UserStore) {
        super(store);
    }
}
export const userQuery = new UserQuery(userStore);
