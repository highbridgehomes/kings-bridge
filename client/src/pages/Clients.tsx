import { Helmet } from "react-helmet-async";

const Clients = () => {
  return (
    <>
      <Helmet>
        <title>Clients | KingsBridge</title>
        <meta name="description" content="Welcome to KingsBridge Real Estate" />
      </Helmet>
      <h1 className="text-3xl font-bold">This is the Clients Page</h1>
    </>
  );
};

export default Clients;
