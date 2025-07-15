import { useState } from "react";

export const Estadodelsemaforo = () => {
    const [cambiarcolor, setcambiarcolor] = useState("");

    return (
        <>
            <div
                onClick={() => setcambiarcolor("verde")}
                className={`verde ${cambiarcolor === "verde" && "green"}`}
            ></div>
            <div
                onClick={() => setcambiarcolor("amarillo")}
                className={`amarillo ${cambiarcolor === "amarillo" && "yellow"}`}
            ></div>
            <div
                onClick={() => setcambiarcolor("rojo")}
                className={`rojo ${cambiarcolor === "rojo" && "red"}`}
            ></div>

        </>
    )
}