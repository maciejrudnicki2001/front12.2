import React  from "react";
import {Routes, Route, useSearchParams} from "react-router-dom";
import { Error404, Add, Sub, Mul, Div } from "./components/Pages";

function App() {
  const [searchParams] = useSearchParams();
    const x = Number(searchParams.get("x") || 0);
    const y = Number(searchParams.get("y") || 0);

    return (
        <Routes>
            <Route path="/add" element={<Add x={x} y={y} />} />
            <Route path="/sub" element={<Sub x={x} y={y} />} />
            <Route path="/mul" element={<Mul x={x} y={y} />} />
            <Route path="/div" element={<Div x={x} y={y} />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );

}

export default App;