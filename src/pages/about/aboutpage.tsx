import PeopleIllustraion from "../../components/misc/illustrations/peopleIllustraion";
import StoresIllustration from "../../components/misc/illustrations/storesIllustration";
import ContactSection from "../../components/forms/contactForm";
import { AboutPageLayout, Layout, Content } from "./aboutpage.styled";

const AboutPage = () => {

  return (
    <AboutPageLayout>
      <Layout>
        <Content>
          <div style={{ width: "35.5em" }}>
            <h1>About us</h1>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
          <PeopleIllustraion />
          </div>
        </Content>
        <Content>
          <div>
          <StoresIllustration />
          </div>
          <div style={{ width: "32em" }}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <div >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            </div>
          </div>
        </Content>
        <ContactSection />
      </Layout>
    </AboutPageLayout>
  );
};

export default AboutPage;
