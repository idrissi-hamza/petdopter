import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div className="flex flex-col ">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};
Layout.defaultProps = {
  title: "Pets Market | Find your pet",
  description: "Find your pet",
  keywords: "cat,dog, pet,adopt",
};

export default Layout;
