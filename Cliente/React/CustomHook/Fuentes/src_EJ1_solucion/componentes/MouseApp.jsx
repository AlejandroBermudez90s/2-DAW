import { useEffect, useState } from "react";
import useMouseApp from "../hooks/useMouseApp";

    const MouseApp = () => {

    // Función encargada de incrementar el contador haciendo
    // uso del hook

    const mouse = useMouseApp();

    return (
        <div>
            <h1>Mouse App</h1>
            <pre>{JSON.stringify(mouse, null, 2)}</pre>
        </div>
    );
}

export default MouseApp;