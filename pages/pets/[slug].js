import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";

const OffersPage = ({ pet }) => {
  return (
    <Layout>
      <div className="sm:my-6  mx-auto flex flex-col ">
        <div className=" flex sm:flex-row flex-col items-center  bg-purple-200 rounded-xl">
          <div className="sm:w-80 w-sm flex   m-4 ">
            <Image
              className="rounded-xl"
              src={
                pet.attributes.image
                  ? pet.attributes.image.data.attributes.formats.medium.url
                  : "/images/pet-default.jpg"
              }
              width={900}
              height={900}
            />
          </div>
          <div className="flex flex-col  items-center justify-center space-y-4 bg-purple-200  p-10 text-purple-900 ">
            <h1 className="text-4xl   mb-6  ">{pet.attributes.name}</h1>
            <div className="w-full h-[2px] bg-purple-300 " />
            <div className="flex space-x-3  items-center justify-center">
              <span className="relative font-semibold tracking-wide">
                {pet.attributes.breed}{" "}
              </span>
              <div className="w-1 h-1 bg-purple-500 rounded flex "></div>

              <span className=""> {pet.attributes.adress.split(",").map(c=>c.slice(0,1).toUpperCase() + c.slice(1)).join(", ")}</span>
            </div>
            <div className="flex space-x-3  items-center justify-center ">
              <span className="relative">{pet.attributes.age} </span>
              <div className="w-1 h-1 bg-purple-500 rounded flex "></div>

              <span className=""> {pet.attributes.sexe} </span>
              <div className="w-1 h-1 bg-purple-500 rounded flex "></div>
              <span className=""> {pet.attributes.size} </span>
              <div className="w-1 h-1 bg-purple-500 rounded flex "></div>
              <span className=""> {pet.attributes.color}</span>
            </div>
          </div>
        </div>
        <div className=" rounded-xl pt-4   text-slate-700 ">
          <div className="flex flex-col bg-white py-12 pl-12  rounded-xl">
            <h1 className="text-3xl bg-purple-200 pl-3  rounded-l-lg py-2 ">
              A little more about {pet.attributes.name}
            </h1>
            <div className=" flex-1  px-5 my-10 sm:grid sm:grid-cols-2  justify-center gap-5 sm:space-y-0 space-y-5">
              <div className="w-72">
                <h1 className="text-xl font-medium mb-1">Characteristics</h1>
                <div className="text-slate-600">
                  {pet.attributes.characteristics.map((c) => (
                    <span>{c}, </span>
                  ))}
                </div>
              </div>
              <div className="w-72">
                <h1 className="text-xl font-medium mb-1">Address</h1>
                <div className="text-slate-600">{pet.attributes.adress}</div>
              </div>
              <div className="w-72">
                <h1 className="text-xl font-medium mb-1">Adoption Fees</h1>
                <div className="text-slate-600">
                  {pet.attributes.AdoptionFees} $
                </div>
              </div>
              <div className="w-72">
                <h1 className="text-xl font-medium mb-1">Good in home with</h1>
                <div className="text-slate-600">
                  {pet.attributes.goodInHomeWith}
                </div>
              </div>
              <div className="w-72">
                <h1 className="text-xl font-medium mb-1">House Trained</h1>
                <div className="text-slate-600">
                  {pet.attributes.houseTrained ? "Yes" : "No"}
                </div>
              </div>
              <div className="w-72">
                <h1 className="text-xl font-medium mb-1">Health</h1>
                <div className="text-slate-600">{pet.attributes.health}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OffersPage;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(
    `${API_URL}/api/pets?filters[slug][$eq]=${slug}&populate=*`
  );
  const pets = await res.json();
  console.log(slug, "*******************************slug");
  return {
    props: {
      pet: pets.data[0],
    },
  };
}
