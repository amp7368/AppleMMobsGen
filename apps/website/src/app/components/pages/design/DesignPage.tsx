import { RouteInfo } from '../../../routes/RouteInfo';
import { appQueryParams } from '../../../util/AppQueryParams';
import { PageWrapper } from '../PageWrapper';
import { DesignDefaultPage } from './default/DesignDefaultPage';
import { mmobQuery } from '../../../model/mmob/Mmob.query';
import { MmobEditor } from './editor/MmobEditor';
import { ObserveableToElement } from '@appleptr16/elemental';
import { Optional } from '@misc/for-now';
import { Mmob } from '../../../model/mmob/Mmob.model';
import { PrivateRouteInfo } from '../../../routes/PrivateRouteInfo';

function mapToPage(mmob: Optional<Mmob>) {
    console.log(mmob);
    return mmob ? <MmobEditor mmob={mmob} /> : <DesignDefaultPage />;
}
export class DesignPage extends PageWrapper {
    override createRoute(): RouteInfo {
        return new PrivateRouteInfo(this);
    }

    override renderMainPage(): JSX.Element {
        const queryMmob: string = appQueryParams().getQueryMmob() ?? '';
        const mmobObsv = mmobQuery.selectEntity(queryMmob);
        return (
            <ObserveableToElement original={mmobObsv} mappingFn={mapToPage} />
        );
    }
}
