import GameMenu from "./components/GameMenu";
import { pages } from "./config/pages";


export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen w-full py-10 overflow-x-hidden bg-gradient-to-br from-primary/10 to-secondary/10'>
      <span
        className="text-[clamp(2.8rem,8vw,5.5rem)] font-black tracking-tight leading-none text-foreground">
        JEDEN Z <span className="text-primary">ILUŚ</span>
      </span>
      <GameMenu buttons={pages.home.buttons} />
    </div>
  );
}
