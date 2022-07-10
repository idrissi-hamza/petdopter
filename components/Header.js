import Link from "next/link";
import Search from "./Search";

const Header = () => {
  const navLinks = [
    { label: "Pets", link: "pets" },
    { label: "Sign In", link: "signin" },
    { label: "Post pet", link: "pets/postpet" },
  ];
  return (
    <header className="flex sm:flex-row flex-col justify-between items-center h-auto sm:h-16 px-8 shadow-md">
      <div className="my-5 sm:my-0 ">
        <Link href="/">
          <a className="sm:mr-5   text-purple-500 hover:text-purple-200 font-extrabold text-xl  ">
            Petdopter
          </a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul className="flex items-center justify-center sm:flex-row flex-col text-center  my-5 sm:my-0">
          {navLinks.map((link) => (
            <li>
              <Link href={link.link}>
                <a className="sm:mr-5 text-slate-700 hover:text-black">
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
