import CustomizedAccordions from "./components/Accordion/Accordion";
import Banner from "./components/Banner/Banner";
import MoreNEET from "./components/MoreNEET/MoreNEET";
import { fontReddit } from "./config/fontsProvider";


export default function Home() {
  return (
    <div>
      <Banner />
      <MoreNEET/>
      <CustomizedAccordions />
    </div>
  );
}
