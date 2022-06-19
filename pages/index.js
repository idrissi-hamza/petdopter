import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { API_URL } from "../config/index.js";

export default function Home({ offers }) {
  console.log(offers);
  return (
    <Layout>
      <Hero />
      <h1>Pets Available for Adoption</h1>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/offers`);
  const offers = await res.json();
  return { props: { offers }, revalidate: 1 };
}
