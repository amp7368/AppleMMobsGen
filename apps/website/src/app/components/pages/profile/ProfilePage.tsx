import { Box } from '@mui/material';

import { RouteInfo } from '../../../routes/RouteInfo';
import { PageWrapper } from '../PageWrapper';
import { PrivateRouteInfo } from '../../../routes/PrivateRouteInfo';

export class ProfilePage extends PageWrapper {
    override createRoute(): RouteInfo {
        return new PrivateRouteInfo(this);
    }

    override renderMainPage(): JSX.Element {
        return <Box />;
    }
}
