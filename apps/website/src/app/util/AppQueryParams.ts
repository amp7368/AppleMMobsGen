import { SiteQueryParams, siteQueryParams } from '@misc/for-now';

enum AppQuery {
    Hunt = 'hunt',
}
export class AppQueryParams extends SiteQueryParams {
    setQueryHunt(huntUUID: string) {
        this.set(AppQuery.Hunt, huntUUID);
        return this;
    }
    getQueryHunt(): string | undefined {
        return this.get(AppQuery.Hunt);
    }
}
export function appQueryParams() {
    return new AppQueryParams(siteQueryParams().params);
}
