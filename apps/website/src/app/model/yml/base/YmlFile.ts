import { YmlField } from './YmlField';

export interface IYmlFile {
    fileName: string;
    authorId?: string;
    root: YmlField<any>[];
}

export class YmlFile implements IYmlFile {
    fileName: string;
    authorId?: string;
    root: YmlField<any>[];

    constructor(original: IYmlFile) {
        this.fileName = original.fileName;
        this.authorId = original.authorId;
        this.root = original.root;
    }
}
