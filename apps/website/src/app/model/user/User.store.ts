import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { User } from './User.model';

export interface UserState extends EntityState<User, string> {}

@StoreConfig({ name: 'user', idKey: 'id' })
export class UserStore extends EntityStore<UserState> {}
export const userStore: UserStore = new UserStore();
