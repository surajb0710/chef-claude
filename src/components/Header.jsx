import { logo } from '../assets/assets';

const Header = () => {
  return (
    <header className="flex justify-center gap-4 items-center px-5 lg:px-100 py-4">
      <img src={logo} alt="" className="h-8 w-8 rounded-full" />
      <h1 className="text-4xl">Chef Claude</h1>
    </header>
  );
};

export default Header;
