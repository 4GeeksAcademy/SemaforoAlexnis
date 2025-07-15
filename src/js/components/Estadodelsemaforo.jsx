import { useState } from "react";

export const Estadodelsemaforo = () => {
    const [cambiarcolor, setcambiarcolor] = useState("");

    const cambio =() => {
        if (cambiarcolor === ""){
            setcambiarcolor("verde")
        }else if (cambiarcolor === "verde"){
            setcambiarcolor("amarillo")
        }else if (cambiarcolor === "amarillo"){
            setcambiarcolor ("rojo")
        }else{
            setcambiarcolor("verde")
        }
    }

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

            <button onClick={cambio}
            className="btn btn-dark">Cambiar</button>
        </>
    )
}