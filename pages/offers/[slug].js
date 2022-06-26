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
      <div className="my-6 mx-auto flex flex-col ">
        <div className=" flex  w-[80vw] items-center justify-center">
          <div className="w-72 border mt-2 ">
            <Image
              src={pet.image ? pet.image : "/images/pet-default.jpg"}
              width={920}
              height={800}
            />
          </div>
        </div>
        <div className=" rounded-xl p-6   mt-5 text-slate-700">
          <div className="flex flex-col  items-center justify-center space-y-4 bg-white mb-4 p-10 rounded-xl">
            <h1 className="text-4xl text-slate-700  mb-6  ">{pet.name}</h1>
            <div className="w-full h-[1px] bg-slate-200"/>
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
          </div>
          <div className="flex flex-col bg-white p-12 rounded-xl">
            <h1 className="text-3xl">About</h1>
            <div className=" flex-1  px-5 my-10 sm:grid sm:grid-cols-2  justify-center gap-5 sm:space-y-0 space-y-5">
              <div className="w-72">
                <h1 className="text-xl font-medium">Characteristics</h1>
                <div>
                  Affectionate, Playful, Curious, Independent, Friendly,
                  Protective
                </div>
              </div>
              <div className="w-72">
                <h1 className="text-xl font-medium">Characteristics</h1>
                <div>
                  Affectionate, Playful, Curious, Independent, Friendly,
                  Protective
                </div>
              </div>
              <div className="w-72">
                <h1 className="text-xl font-medium">Characteristics</h1>
                <div>
                  Affectionate, Playful, Curious, Independent, Friendly,
                  Protective
                </div>
              </div>
              <div className="w-72">
                <h1 className="text-xl font-medium">Characteristics</h1>
                <div>
                  Affectionate, Playful, Curious, Independent, Friendly,
                  Protective
                </div>
              </div>
              <div className="w-72">
                <h1 className="text-xl font-medium">Characteristics</h1>
                <div>
                  Affectionate, Playful, Curious, Independent, Friendly,
                  Protective
                </div>
              </div>
              <div className="w-72">
                <h1 className="text-xl font-medium">Characteristics</h1>
                <div>
                  Affectionate, Playful, Curious, Independent, Friendly,
                  Protective
                </div>
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
  console.log("slug***************************",slug);
  const res = await fetch(`${API_URL}/api/offers?filters[slug][$eq]=${slug}`);
  const pets = await res.json();

  return {
    props: {
      pet: pets.data[0],
    },
  };
}
