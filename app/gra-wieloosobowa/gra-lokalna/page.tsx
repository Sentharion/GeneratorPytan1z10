import GameMenu from "../../components/GameMenu";
import { pages } from "../../config/pages";

const GraLokalna = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen w-full py-10 overflow-x-hidden' >
            <GameMenu title="Gra Lokalna" buttons={pages.graLokalna.buttons}/>
        </div>
    );
}

export default GraLokalna;