import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Kolam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainStyle">
        <Header title="Welcome to Kolam" />

        <Image
          src="/kolam.png"
          width={512}
          height={512}
          alt="Picture of a kolam"
        />
        <p
          className="description"
          style={{ maxWidth: "600px", lineHeight: "1.6" }}
        >
          We are under construction
        </p>
        <p
          className="description"
          style={{ maxWidth: "600px", lineHeight: "1.6" }}
        >
          Kolam is a form of drawing that is drawn by using rice flour, chalk,
          chalk powder or rock powder, often using naturally or synthetically
          colored powders, in Sri Lanka, the Indian states of Tamil Nadu,
          Karnataka, Telangana, Andhra Pradesh, Kerala and some parts of Goa,
          Maharashtra as well as Indonesia, Malaysia, Thailand and a few other
          Asian countries. A Kolam is a geometrical line drawing composed of
          curved loops, drawn around a grid pattern of dots. In South India, it
          is widely used during festivals and special occasions.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
