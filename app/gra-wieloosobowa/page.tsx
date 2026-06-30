import GameMenu from "../components/GameMenu";
import { pages } from "../config/pages";

const GraWieloosobowa = () =>{
    return (
        <div className='flex flex-col justify-center items-center min-h-screen w-full py-10 overflow-x-hidden' >
            <GameMenu title="Gra Wieloosobowa" buttons={pages.graWieloosobowa.buttons}/>
        </div>
    );
}

export default GraWieloosobowa;