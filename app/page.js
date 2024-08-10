import { Animataion } from "./components/animation";
import Footer from "./sections/footer";
import { Header } from "./sections/header";

const Home = () => (
  <>
    <Header />
    <section className="flex justify-center items-center h-full relative flex-col">
      <h1 className="text-7xl font-bold">Helios VPN</h1>
      <div className="m-[-100px] mt-[-140px] mb-[-140px] -z-10">
        <Animataion />
      </div>
      <h2>Coming soon</h2>
    </section>
    <Footer />
  </>
);

export default Home;
