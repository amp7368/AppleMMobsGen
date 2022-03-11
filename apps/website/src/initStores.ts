import { v4 } from 'uuid';
import { mmobQuery } from './app/model/mmob/Mmob.query';
import { mmobStore } from './app/model/mmob/Mmob.store';
import { userStore } from './app/model/user/User.store';
import { User } from './app/model/user/User.model';
import { MMob } from './app/model/mmob/Mmob.model';

if (mmobQuery.getCount() == 0) {
    userStore.add([{ id: 1, username: 'appleptr16' }] as User[]);
}
