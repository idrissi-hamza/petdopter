// import Hero from "../components/Hero";
// import Layout from "../components/Layout";
// import PetCard from "../components/PetCard";
// import { API_URL } from "../config/index.js";

import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import PetCard from "../../components/PetCard";
import { API_URL } from "../../config";

export default function Index({ pets }) {
  // console.log("pets***********", pets);
  return (
    <Layout>
      {/* <Hero /> */}
      <h1 className="text-4xl text-purple-700 text-center m-6">
        Pets Available for Adoption
      </h1>
      <div className=" px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center gap-5 sm:space-y-0 space-y-5">
        {pets.length === 0 && <h3>no pets to show</h3>}
        {pets.map((pet) => (
          <>
            <PetCard key={pet.id} pet={pet} />
          </>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/pets?populate=*`);
  const petsResponse = await res.json();
  return { props: { pets: petsResponse.data } };
}
