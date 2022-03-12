import { SiteQueryParams, siteQueryParams } from '@misc/for-now';

enum AppQuery {
    MMob = 'mmob',
}
export class AppQueryParams extends SiteQueryParams {
    setQueryMMob(mmobUUID: string) {
        this.set(AppQuery.MMob, mmobUUID);
        return this;
    }
    getQueryMMob(): string | undefined {
        return this.get(AppQuery.MMob);
    }
}
export function appQueryParams() {
    return new AppQueryParams(siteQueryParams().params);
}
