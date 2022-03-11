import { SiteQueryParams, siteQueryParams } from '@misc/for-now';

enum AppQuery {
    Mmob = 'mmob',
}
export class AppQueryParams extends SiteQueryParams {
    setQueryMmob(mmobUUID: string) {
        this.set(AppQuery.Mmob, mmobUUID);
        return this;
    }
    getQueryMmob(): string | undefined {
        return this.get(AppQuery.Mmob);
    }
}
export function appQueryParams() {
    return new AppQueryParams(siteQueryParams().params);
}
