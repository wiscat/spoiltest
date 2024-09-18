import { Overlay, Header, Form, Footer, Slider } from "../features/index";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <div className="flex flex-col">
        <Header />
        <Slider />
        <Form />
        <Footer />
      </div>
      <Overlay />
    </div>
  );
}
