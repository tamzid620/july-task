import CustomizedAccordions from "./components/Accordion/Accordion";
import Banner from "./components/Banner/Banner";
import JoinToday from "./components/JoinToday/JoinToday";
import MoreNEET from "./components/MoreNEET/MoreNEET";
import OnlineClassess from "./components/OnlineClasses/OnlineClasses";
import { fontReddit } from "./config/fontsProvider";


export default function Home() {
  return (
    <div>
      <Banner />
      <OnlineClassess/>
      <MoreNEET/>
      <CustomizedAccordions />
      <JoinToday/>
    </div>
  );
}
