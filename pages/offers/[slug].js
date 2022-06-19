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
      <p>{pet.name}</p>
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
