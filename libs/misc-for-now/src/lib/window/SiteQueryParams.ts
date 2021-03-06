export class SiteQueryParams {
    constructor(public params: Map<string, string>) {}

    get(name: string): string | undefined {
        return this.params.get(name);
    }
    hasParams(): boolean {
        return this.params.size > 0;
    }
    set(name: string, value?: string) {
        if (value) this.params.set(name, value);
        else this.delete('mmob');
        return this;
    }
    delete(name: string) {
        this.params.delete(name);
        return this;
    }
    setLocation() {
        window.location.search = this.serialize();
    }
    serialize(): string {
        return Array.from(this.params.entries())
            .map((entry) => `${entry[0]}=${entry[1]}`)
            .join('&');
    }
}

export function siteQueryParams(): SiteQueryParams {
    let search = window.location.search;
    search = search.replace('?', '');
    if (!search) return new SiteQueryParams(new Map());

    return new SiteQueryParams(
        new Map<string, string>(
            search
                .split('&')
                .filter((query) => query.includes('='))
                .map((query) => query.split('=') as [string, string])
        )
    );
}
