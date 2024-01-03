import Accordion from "./components/Accordion";
import Avatar from "./components/Avatar";
import Carousel from "./components/Carousel";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl bg-red-200">Project 1</h1>
      <Navbar />
      <hr />
      <Accordion />
      <hr />
      <Carousel />
      <hr />
      <div className="text-center mb-5">
        <Avatar />
      </div>
    </>
  );
}

export default App;
