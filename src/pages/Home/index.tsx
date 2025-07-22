import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import ToolboxContent from "../../content/ToolboxContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        icon="landings_book.png"
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="landingb_daily_drills.png"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="landingb_drill_generator.png"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="landingb_games.png"
        id="product"
      />
      <ContentBlock
        direction="left"
        title={ToolboxContent.title}
        content={ToolboxContent.text}
        icon="landingb_toolbox.png"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
