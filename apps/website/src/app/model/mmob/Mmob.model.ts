import { IYmlFile, YmlFile } from '../yml/base/YmlFile';
import { Optional } from '../../../../../../libs/misc-for-now/src/lib/falsey/Questionable';

export interface IMMob {
    uuid: string;
    yml: IYmlFile;
}
export class MMob implements IMMob {
    static create(mmob: IMMob): MMob {
        return Object.assign(new MMob(), mmob);
    }
    static createOpctional(mmob: Optional<IMMob>): Optional<MMob> {
        if (!mmob) return undefined;
        return Object.assign(new MMob(), mmob);
    }
    uuid: string;
    yml: YmlFile;
    constructor() {}
    getName() {
        return this.yml.fileName;
    }
}
