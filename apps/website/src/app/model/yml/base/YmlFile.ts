import { YmlField } from './YmlField';

export class YmlFile {
    fileName: string;
    authorId: string;
    root: YmlField<any>[];
}
