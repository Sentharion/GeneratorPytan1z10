import Link from 'next/link';

type button = {
    link: string;
    icon?: React.ReactNode;
    text: string;
}

interface GameMenuProps {
    title?: string;
    buttons: button[];
}
const GameMenu = ({title, buttons}: GameMenuProps) => {
  return (
    <div className='flex flex-col justify-center items-center w-full py-10 overflow-x-hidden' >
      <div className='flex flex-col sm:flex-row gap-6 sm:gap-14 justify-center items-center'>
        {buttons.map((button, index) => (
            <Link href={button.link} key={index} className='font-semibold gap-2 flex-col bg-gradient-to-br from-[#ebd197] via-[#b48811] to-[#a2790d] w-48 h-48 sm:w-60 sm:h-60 border-4 border-black rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 duration-300 hover:rotate-3'>
                {button?.icon}
                {button.text}
            </Link>
        ))}
      </div>
    </div>
  );
}

export default GameMenu;
