import GameMenu from '../../../components/GameMenu';
import { pages } from '../../../config/pages';

const PanelProwadzacego = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen w-full py-10 overflow-x-hidden' >
      <GameMenu title={pages.panelProwadzacego.title} buttons={pages.panelProwadzacego.buttons} />
    </div>
  );
}

export default PanelProwadzacego;

