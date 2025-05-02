import Converter from "./components/converter";

import Info from "./components/Info";
import Mapa from "./components/localizacao";

import SectionFirst from "./components/Section-first";

export default function Home() {
  return (
    <div>
      <SectionFirst />
      <Converter />
      <Mapa />
      <Info />
    </div>
  );
}
