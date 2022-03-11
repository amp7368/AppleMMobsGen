import { v4 } from 'uuid';
import { mmobQuery } from './app/model/mmob/Mmob.query';
import { mmobStore } from './app/model/mmob/Mmob.store';
import { userStore } from './app/model/user/User.store';
import { User } from './app/model/user/User.model';
import { Mmob } from './app/model/mmob/Mmob.model';

if (mmobQuery.getCount() == 0) {
    mmobStore.add([
        { uuid: v4(), title: 'title1', createdBy: 2, collabs: [1] },
        { uuid: v4(), title: 'title2', createdBy: 1, collabs: [] },
        { uuid: v4(), title: 'title3', createdBy: 2, collabs: [] },
        { uuid: v4(), title: 'title4', createdBy: 1, collabs: [] },
        { uuid: v4(), title: 'title5', createdBy: 1, collabs: [2] },
        { uuid: v4(), title: 'title6', createdBy: 2, collabs: [1] },
    ] as Mmob[]);
    userStore.add([
        { id: 1, username: 'appleptr16' },
        { id: 2, username: 'ojomFox' },
    ] as User[]);
}
