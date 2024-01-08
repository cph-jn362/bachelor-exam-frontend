import NewsletterSection from "../../forms/newsletterForm";
import SomeIcons from "../../misc/icons/someIcons";
import { FooterStyled, Logo, Stores } from "./footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <Logo to="/">Booksy</Logo>
      <Stores>
        <p>Our stores</p>
        <div>
          <ul>
            <li>Frederiksberg | 12 34 56 78</li>
            <li>Hellerup | 87 65 43 21</li>
            <li>Ballerup | 12 34 87 56</li>
            <li>Herlev | 43 21 56 78</li>
          </ul>
          <ul>
            <li>8:00 AM - 5:00 PM</li>
            <li>9:00 AM - 5:00 PM</li>
            <li>8:00 AM - 4:00 PM</li>
            <li>8:00 AM - 5:00 PM</li>
          </ul>
        </div>
      </Stores>
      <NewsletterSection />
      <SomeIcons />
    </FooterStyled>
  );
};

export default Footer;
