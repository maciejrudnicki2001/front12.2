import React from 'react';
import { useLocation } from 'react-router-dom';

export function Error404(){
    let location = useLocation();
    return (
        <div>
            <h1>Nie znaleziono strony: {location.pathname}</h1>
        </div>
    );
}

export function Add( {x, y} ){
    return (
        <div>
            <h1>Wynik dodawania: {x + y}</h1>
        </div>
    );
}

export function Sub( {x, y} ){
    return (
        <div>
            <h1>Wynik odejmowania: {x - y}</h1>
        </div>
    );
}

export function Mul( {x, y} ){
    return (
        <div>
            <h1>Wynik mnożenia: {x * y}</h1>
        </div>
    );
}

export function Div( {x, y} ){
    return (
        <div>
            <h1>Wynik dzielenia: {x / y}</h1>
        </div>
    );
}