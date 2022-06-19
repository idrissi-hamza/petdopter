import Link from "next/link";
import Image from "next/image";

const MorePets = ({ pet }) => {
  return (
    <Link href="/offers">
      <a className="flex flex-col group cursor-pointer transition duration-200  transform sm:hover:scale-105 border border-purple-700 bg-purple-500 rounded-xl overflow-hidden text-white">
        <Image src={"/images/search-pet.jpg"} width={520} height={350} />
        <div className="p-2 flex-1 flex items-center justify-center text-lg  bg-purple-700">
          More pets available on Petdopter
        </div>
        <div className="p-2 h-16 flex items-center justify-center text-xl border-t border-purple-700 ">
          <p className="truncate max-w-md  font-semibold text-center uppercase ">
            meet them
          </p>
        </div>
      </a>
    </Link>
  );
};

export default MorePets;
