import { useEffect, useMemo, useState } from 'react';
import { distinctUntilChanged, map, Observable, Subscription, tap } from 'rxjs';

type DisplayedElement = JSX.Element | null;

export interface ObserveableToElementProps<T> {
    original: Observable<T>;
    mappingFn: (original: T) => DisplayedElement;
}

export function ObserveableToElement<T>(
    props: ObserveableToElementProps<T>
): DisplayedElement {
    const [currentElement, setState] = useState<DisplayedElement>(null);
    useEffect(() => {
        const subscription: Subscription = props.original
            .pipe(
                distinctUntilChanged(),
                tap((t) => {
                    console.log(t);
                }),
                map(props.mappingFn)
            )
            .subscribe(setState);
        return () => subscription.unsubscribe();
    }, [props.original, props.mappingFn]);
    return currentElement;
}
