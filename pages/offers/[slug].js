import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const OffersPage = () => {
  const { query } = useRouter();
  const { slug } = query;
  
  return (
    <Layout>
      <h1>My Offers</h1>
      <p>{slug}</p>
    </Layout>
  );
};

export default OffersPage;
