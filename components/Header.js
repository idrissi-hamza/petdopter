import Link from "next/link";

const Header = () => {
  return (
    <header className="flex sm:flex-row flex-col justify-between items-center h-auto sm:h-16 px-8 shadow-md">
      <div className="my-5 sm:my-0 ">
        <Link href="/">
          <a className="sm:mr-5   text-red-500 hover:text-red-200 font-extrabold text-xl  ">Petfinder</a>
        </Link>
      </div>
      <nav>
        <ul className="flex items-center justify-center sm:flex-row flex-col text-center  my-5 sm:my-0">
          <li>
            <Link href="/offers">
            <a className="sm:mr-5 text-slate-700 hover:text-black">Offers</a>
            </Link>
          </li>
          <li>
            <Link href="/offers">
            <a className="sm:mr-5 text-slate-700 hover:text-black">signin</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
