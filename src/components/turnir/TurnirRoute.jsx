import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CopyComponent from "./CopyComponent.jsx";
import { Turnier_All, CS_GO, DOTA_2, R6_SEGA,PUBG } from './Turner_Type.jsx';
export const TurnirRoute = () => {
    const route = [
        { id: 1, path: "/*", ComponentName: <CopyComponent map={Turnier_All} /> },
        { id: 2, path: "/CS_GO", ComponentName: <CopyComponent map={CS_GO} /> },
        { id: 3, path: "/DOTA_2", ComponentName: <CopyComponent map={DOTA_2} /> },
        { id: 4, path: "/R6_SEGA", ComponentName: <CopyComponent map={R6_SEGA} /> },
        { id: 5, path: "/pubg", ComponentName: <CopyComponent map={PUBG} /> }
    ];
    const mapRoute = route.map(a => <Routes key={a.id}>
        <Route path={a.path} element={a.ComponentName}>
        </Route>
    </Routes>);
    return (
        <div id='tournament'>
            {mapRoute}
        </div>
    );


};
