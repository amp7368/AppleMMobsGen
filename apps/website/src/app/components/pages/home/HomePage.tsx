import { Button, Typography } from '@mui/material';

import { clearAppStorage } from '../../../../persistState';
import { RouteInfo } from '../../../routes/RouteInfo';
import { PageWrapper } from '../PageWrapper';

export class HomePage extends PageWrapper {
    override createRoute(): RouteInfo {
        return new RouteInfo(this);
    }

    override renderMainPage(): JSX.Element {
        return (
            <>
                <h1>Main Page</h1>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => clearAppStorage()}
                >
                    <Typography fontWeight="bold">Reset storage</Typography>
                </Button>
            </>
        );
    }
}
