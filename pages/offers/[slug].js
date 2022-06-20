import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";

const OffersPage = ({ pet }) => {
  const {
    query: { slug },
  } = useRouter();
  // const { slug } = query;

  return (
    <Layout>
      <div className="mx-auto flex flex-col bg-red-100">
        <div className=" flex  w-[80vw] items-center justify-center">
          <div className="w-72  ">
            <Image
              src={pet.image ? pet.image : "/images/pet-default.jpg"}
              width={920}
              height={800}
            />
          </div>
        </div>
        <div className="  rounded-xl p-6 flex flex-col  items-center justify-center  mt-5 space-y-4">
          <h1 className="text-4xl text-slate-700  mb-6 ">{pet.name}</h1>
          <div className="flex space-x-3  items-center justify-center">
            <span className="relative">{pet.breed} </span>
            <div className="w-1 h-1 bg-slate-500 rounded flex "></div>

            <span className=""> city</span>
          </div>
          <div className="flex space-x-3  items-center justify-center ">
            <span className="relative">Adult </span>
            <div className="w-1 h-1 bg-slate-500 rounded flex "></div>

            <span className=""> Male</span>
            <div className="w-1 h-1 bg-slate-500 rounded flex "></div>
            <span className=""> Small</span>
            <div className="w-1 h-1 bg-slate-500 rounded flex "></div>
            <span className=""> Black & White</span>
          </div>
          <div className="flex flex-col bg-yellow-400 ">
            <h1 className="text-3xl">About</h1>
            <div className=" flex-1 bg-green-500 px-5 my-10 sm:grid sm:grid-cols-2  justify-center gap-5 sm:space-y-0 space-y-5">
              <div className="w-72">
                <h1 className="text-xl font-medium">Characteristics</h1>
                <div>Affectionate, Playful, Curious, Independent, Friendly, Protective</div>
              </div>
              <div className="w-72">
              <h1 className="text-xl font-medium">Characteristics</h1>
                <div>Affectionate, Playful, Curious, Independent, Friendly, Protective</div>
              </div>
              <div className="w-72">
              <h1 className="text-xl font-medium">Characteristics</h1>
                <div>Affectionate, Playful, Curious, Independent, Friendly, Protective</div>
              </div>
              <div className="w-72">
              <h1 className="text-xl font-medium">Characteristics</h1>
                <div>Affectionate, Playful, Curious, Independent, Friendly, Protective</div>
              </div>
              <div className="w-72">
              <h1 className="text-xl font-medium">Characteristics</h1>
                <div>Affectionate, Playful, Curious, Independent, Friendly, Protective</div>
              </div>
              <div className="w-72">
              <h1 className="text-xl font-medium">Characteristics</h1>
                <div>Affectionate, Playful, Curious, Independent, Friendly, Protective</div>
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
  const res = await fetch(`${API_URL}/api/offers/${slug}`);
  const pets = await res.json();

  return {
    props: {
      pet: pets[0],
    },
  };
}
