import { ObserveableToElement } from '@appleptr16/elemental';
import { Route } from 'react-router-dom';

import { sessionQuery } from '../model/myself/session/Session.query';
import { IPageWrapper, RouteInfo } from './RouteInfo';

export abstract class RestrictedRouteInfo extends RouteInfo {
    protected abstract mapToElement(isLoggedIn: boolean): JSX.Element;
    constructor(props: IPageWrapper) {
        super(props);
        this.mapToElement = this.mapToElement.bind(this);
    }
    override renderRoute(i: number): JSX.Element {
        const element = ObserveableToElement({
            original: sessionQuery.isLoggedIn,
            mappingFn: this.mapToElement,
        });
        return <Route key={i} path={this.props.link} element={element} />;
    }
}
