import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex-1">
        <div className="flex flex-col bg-red-500 rounded-2xl mt-[15vh] w-72 sm:w-1/2 mx-auto p-10  items-center justify-center">
          <div className="m-6 w-60 rounded-full overflow-hidden border-4 border-white">
            <Image
              layout="responsive"
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2043&q=80"
              width={746}
              height={523}
            />
          </div>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Whoops! Looks like you may have lost your way. That page does not
            exist.
          </h2>
          <p className="text-white">
            Head back to the
            <Link href="/">
              <a className="underline text-yellow-500 hover:text-yellow-700">
                {" "}
                Petfinder homepage{" "}
              </a>
            </Link>
            or use the menu above
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
