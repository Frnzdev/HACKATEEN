import MedidaConverter from "./components/MedidaConverter";
import Converter from "./components/converter";

import Info from "./components/Info";
import Mapa from "./components/localizacao";

import SectionFirst from "./components/Section-first";
import News from "./components/New";
import SectionNecessidades from "./components/SectionNecessidades";

export default function Home() {
  return (
    <div>
      <SectionFirst />
      <Converter />
      <MedidaConverter />
      <Mapa />
      <News />
      <SectionNecessidades />
      <Info />
    </div>
  );
}
