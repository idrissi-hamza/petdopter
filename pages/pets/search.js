import qs from "qs";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "/components/Layout";
// import { API_URL } from "@/config/index";
import PetCard from "../../components/PetCard";
import { API_URL } from "../../config";

export default function SearchPage({ pets }) {
  const router = useRouter();
  console.log(pets);

  return (
    <>
      <Layout>
        <div className="p-6 px-8 sm:px-10">
          <Link href="/pets">
            <a className="text-blue-500 font-semibold">Go Back</a>
          </Link>
          {/* { <h3>no pets to show</h3>} */}
          <h1 className="text-4xl text-purple-700 text-center m-6">
            {pets.length !== 0
              ? `Search Results for ${router.query.term}`
              : `No pets to show for ${router.query.term}`}
          </h1>
          <div className=" px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center gap-5 sm:space-y-0 space-y-5">
            {pets.map((pet) => (
              <>
                <PetCard key={pet.id} pet={pet} />
                {/* <pre>{JSON.stringify(pet,null,2)}</pre> */}
              </>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

// http://localhost:3000/pets/search?term=fes
export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    filters: {
      $or: [
        { name: { $contains: term } },
        { characteristics: { $contains: term } },
        { breed: { $contains: term } },
        { adress: { $contains: term } },
      ],
    },
  });
  console.log(term);
  const res = await fetch(`${API_URL}/api/pets?populate=*&${query}`);
  const pets = await res.json();

  return {
    props: { pets: pets.data },
  };
}
