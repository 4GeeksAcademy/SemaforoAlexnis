import { Semaforo } from "./Semaforo";
import { Estadodelsemaforo } from "./Estadodelsemaforo";
const Home = () => {
	return (
		<div className="text-center">
            <h1>Semaforo</h1>
		<Semaforo/>
		<Estadodelsemaforo/>
		</div>
	);
};

export default Home;