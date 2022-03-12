import { v4 } from 'uuid';
import { mmobQuery } from './app/model/mmob/MMob.query';
import { mmobStore } from './app/model/mmob/MMob.store';
import { userStore } from './app/model/user/User.store';
import { User } from './app/model/user/User.model';
import { MMob, IMMob } from './app/model/mmob/MMob.model';
import { IYmlFile } from './app/model/yml/base/YmlFile';

if (mmobQuery.getCount() == 0) {
    const authorId = v4();
    userStore.add([{ id: authorId, username: 'appleptr16' }] as User[]);
    mmobStore.add([
        {
            uuid: v4(),
            yml: {
                authorId: authorId,
                fileName: 'mmob_test1',
                root: [],
            } as IYmlFile,
        } as IMMob,
        {
            uuid: v4(),
            yml: {
                authorId: authorId,
                fileName: 'mmob_test2',
                root: [],
            } as IYmlFile,
        } as IMMob,
    ]);
}
