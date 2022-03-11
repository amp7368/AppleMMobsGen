import { Button, Stack, Typography } from '@mui/material';

import { RouteInfo } from '../../../../routes/RouteInfo';
import { AllRoutes } from '../../../../routes/routes';

function AppBarLink({ route }: { route: RouteInfo }): JSX.Element {
    const changeRoute = () => window.location.replace(route.props.link);
    return (
        <Button variant="text" onClick={changeRoute}>
            <Typography variant="h4" color="primary.contrastText">
                {route.getName()}
            </Typography>
        </Button>
    );
}
export function TopNavigation() {
    const buttons = [
        AllRoutes.HomeRoute,
        AllRoutes.DesignRoute,
        AllRoutes.ProfileRoute,
        AllRoutes.AuthRoute,
    ].map((route) => <AppBarLink key={route.props.link} route={route} />);
    return (
        <Stack bgcolor="primary.light" direction="row" spacing={3}>
            {buttons}
        </Stack>
    );
}
