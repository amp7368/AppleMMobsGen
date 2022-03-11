import { PropsJustChildren } from '@appleptr16/elemental';
import { Box, Container, Stack } from '@mui/material';

import { IPageWrapper, RouteInfo } from '../../routes/RouteInfo';
import { PageWrapperProps } from '../../routes/routeProps';
import { TopNavigation } from '../common/nav/top/TopNavigation';

export abstract class PageWrapper implements IPageWrapper {
    constructor(public props: PageWrapperProps) {}
    abstract createRoute(): RouteInfo;

    PageElement(): JSX.Element {
        return (
            <Box
                width="100vw"
                height="100vh"
                display="flex"
                flexDirection="column"
            >
                <TopNavigation />
                <Box display="flex" flexGrow={1}>
                    <this.renderMainPage />
                </Box>
            </Box>
        );
    }
    abstract renderMainPage(): JSX.Element;
}
