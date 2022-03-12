import { ObserveableToElement } from '@appleptr16/elemental';
import { Optional } from '@misc/for-now';
import { tap, Observable } from 'rxjs';

import { MMob } from '../../../model/mmob/MMob.model';
import { mmobQuery } from '../../../model/mmob/MMob.query';
import { PrivateRouteInfo } from '../../../routes/PrivateRouteInfo';
import { RouteInfo } from '../../../routes/RouteInfo';
import { appQueryParams } from '../../../util/AppQueryParams';
import { PageWrapper } from '../PageWrapper';
import { DesignDefaultPage } from './default/DesignDefaultPage';
import { MMobEditor } from './editor/MMobEditor';

function mapToPage(mmob: Optional<MMob>) {
    return mmob ? <MMobEditor mmob={mmob} /> : <DesignDefaultPage />;
}
export class DesignPage extends PageWrapper {
    override createRoute(): RouteInfo {
        return new PrivateRouteInfo(this);
    }

    override renderMainPage(): JSX.Element {
        const queryMMob: string = appQueryParams().getQueryMMob() ?? '';
        return (
            <ObserveableToElement
                original={mmobQuery.selectMMob$(queryMMob)}
                mappingFn={mapToPage}
            />
        );
    }
}
