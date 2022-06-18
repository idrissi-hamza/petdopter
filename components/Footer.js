import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-24  text-center space-y-2">
      <p >Copyright &copy; Petfinder 2022</p>
      <p >
        <Link href="/about">
          <a>About Petdopter </a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
