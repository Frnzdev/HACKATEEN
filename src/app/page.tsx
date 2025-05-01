import Converter from "./components/converter";
import MeasureConverter from "./components/ConvertMedidas";
import Mapa from "./components/localizacao";
import SectionFirst from "./components/Section-first";

export default function Home() {
  return (
    <div>
      <SectionFirst />
      <Converter />
      <MeasureConverter />
      <Mapa />
    </div>
  );
}
