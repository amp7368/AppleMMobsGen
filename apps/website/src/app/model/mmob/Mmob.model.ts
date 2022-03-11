import { YmlFile } from '../yml/base/YmlFile';

export class MMob {
    yml: YmlFile;
    getName() {
        return this.yml.fileName;
    }
}
