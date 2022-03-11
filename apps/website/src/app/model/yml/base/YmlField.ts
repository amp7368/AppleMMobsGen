export class YmlField<Element> {
    key: string;
    element: Element;
    constructor(key: string, element: Element) {
        this.key = key;
        this.element = element;
    }
}
