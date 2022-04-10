import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXElement = () => JSX.Element

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXElement> | JSXElement,
    name: string
}

const lazyLayout = lazy(() => import(/* webpackChunkName: "lazyLayout" */ '../01-lazyload/layout/LazyLayout'));

// const lazy1 = lazy(() => import(/* webpackChunkName: "lazypage1" */ '../01-lazyload/pages/LazyPage1'));
// const lazy2 = lazy(() => import(/* webpackChunkName: "lazypage2" */ '../01-lazyload/pages/LazyPage2'));
// const lazy3 = lazy(() => import(/* webpackChunkName: "lazypage3" */ '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: lazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
];