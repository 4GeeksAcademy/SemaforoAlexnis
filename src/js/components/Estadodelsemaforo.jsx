import { useState } from "react";

export const Estadodelsemaforo = () => {
    const [cambiarcolor, setcambiarcolor] = useState("red, green, yellow");
    return(
        <>
        <button onClick={()=> {setcambiarcolor (cambiarcolor)}}>Cambio</button>

        </>
    )
}