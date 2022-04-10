import { Suspense } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <Suspense fallback={ <span>espere...</span> || null}>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img
                        src={logo}
                        alt='React logo'
                    />
                    <ul>
                        {
                            routes.map(({ name, to }) => (
                                <li key={to}>
                                    <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''} >{name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map(({ Component, to, path }) => (
                            <Route key={to} path={path} element={<Component />} />

                        ))
                    }
                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                </Routes>
            </div>
        </BrowserRouter>
        </Suspense>
    )
}
