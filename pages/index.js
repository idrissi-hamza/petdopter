import Hero from "../components/Hero";
import Layout from "../components/Layout";
import MorePets from "../components/MorePets";
import PetCard from "../components/PetCard";
import { API_URL } from "../config/index.js";

export default function Home({ offers }) {
  console.log(offers);
  return (
    <Layout>
      <Hero />
      <h1 className="text-4xl text-purple-700 text-center m-6">
        Pets Available for Adoption
      </h1>
      <div className=" px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center gap-5 sm:space-y-0 space-y-5">
        {offers.length === 0 && <h3>no pets to show</h3>}
        {offers.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
          // <h3 key={pet.id}>{pet.name}</h3>
        ))}
        <MorePets />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/offers`);
  const offers = await res.json();
  return { props: { offers: offers.slice(0, 2) } };
}
