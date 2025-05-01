import Converter from "./components/converter";
import Mapa from "./components/localizacao";
import SectionFirst from "./components/Section-first";

export default function Home() {
  return (
    <div>
      <SectionFirst />
      <Converter />
      <Mapa />
    </div>
  );
}
