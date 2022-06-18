import Head from "next/head";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </div>
  );
};
Layout.defaultProps={
  title:"Pets Market | Find your pet",
  description:"Find your pet",
  keywords:'cat,dog, pet,adopt'
}

export default Layout;
