import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | KingsBridge</title>
        <meta name="description" content="Welcome to KingsBridge Real Estate" />
      </Helmet>
      <h1 className="text-3xl font-bold">This is the About Page</h1>
    </>
  );
};

export default About;
