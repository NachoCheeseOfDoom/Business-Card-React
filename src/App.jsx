import "./App.css";
import { Info } from "./components/Info";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Info />
      <About
        title="About"
        paragraph="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
      />
      <About
        title="Interests"
        paragraph="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
      />
      <Footer />
    </>
  );
}

export default App;
