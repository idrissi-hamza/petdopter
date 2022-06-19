import Link from "next/link";
import Image from "next/image";

const PetCard = ({ pet }) => {
  return (
    <div className=" group cursor-pointer transition duration-200  transform sm:hover:scale-105 border border-purple-500 bg-purple-500 rounded-xl overflow-hidden">
      <Image
        src={pet.image ? pet.image : "/images/pet-default.jpg"}
        width={920}
        height={800}
      />
      <div className="p-2 h-14 flex items-center justify-center text-xl ">
        <p className="truncate max-w-md text-purple-50 font-semibold text-center ">{pet.name}</p>
      </div>
    </div>
  );
}; 

export default PetCard;
