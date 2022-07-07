import Link from "next/link";
import Image from "next/image";

const PetCard = ({ pet }) => {
  return (
      <Link href={`/pets/${pet.attributes.slug}`}>
    <a className="flex flex-col group cursor-pointer transition duration-200  transform hover:scale-105 border border-purple-700 bg-purple-500 rounded-xl overflow-hidden text-white">
      
     <div className="w-sm">
     <Image
        src={pet.attributes.image ? pet.attributes.image.data.attributes.formats.medium.url : "/images/pet-default.jpg"}
        width={920}
        height={800}

      />
     </div>
    
      <div className="p-2 h-16 flex items-center justify-center text-xl  ">
        <p className="truncate max-w-md  font-semibold text-center uppercase ">
        {pet.attributes.name}
        </p>
      </div>
    </a>
  </Link>
  );
};

export default PetCard;
