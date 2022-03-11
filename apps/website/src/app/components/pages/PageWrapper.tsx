import { PropsJustChildren } from '@appleptr16/elemental';
import { Box } from '@mui/material';

import { IPageWrapper, RouteInfo } from '../../routes/RouteInfo';
import { PageWrapperProps } from '../../routes/routeProps';
import { TopNavigation } from '../common/nav/top/TopNavigation';

const StyleRootPage = (props: PropsJustChildren) => {
    return (
        <Box color="text.primary" padding={4}>
            {props.children}
        </Box>
    );
};
export abstract class PageWrapper implements IPageWrapper {
    constructor(public props: PageWrapperProps) {}
    abstract createRoute(): RouteInfo;

    PageElement(): JSX.Element {
        return (
            <>
                <TopNavigation />
                <StyleRootPage>
                    <this.renderMainPage />
                </StyleRootPage>
            </>
        );
    }
    abstract renderMainPage(): JSX.Element;
}
