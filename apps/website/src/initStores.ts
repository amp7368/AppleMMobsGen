import { v4 } from 'uuid';
import { huntQuery } from './app/model/hunt/Hunt.query';
import { huntStore } from './app/model/hunt/Hunt.store';
import { userStore } from './app/model/user/User.store';
import { User } from './app/model/user/User.model';
import { Hunt } from './app/model/hunt/Hunt.model';

if (huntQuery.getCount() == 0) {
    huntStore.add([
        { uuid: v4(), title: 'title1', createdBy: 2, collabs: [1] },
        { uuid: v4(), title: 'title2', createdBy: 1, collabs: [] },
        { uuid: v4(), title: 'title3', createdBy: 2, collabs: [] },
        { uuid: v4(), title: 'title4', createdBy: 1, collabs: [] },
        { uuid: v4(), title: 'title5', createdBy: 1, collabs: [2] },
        { uuid: v4(), title: 'title6', createdBy: 2, collabs: [1] },
    ] as Hunt[]);
    userStore.add([
        { id: 1, username: 'appleptr16' },
        { id: 2, username: 'ojomFox' },
    ] as User[]);
}
