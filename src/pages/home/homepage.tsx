import BookIllustration1 from "../../components/misc/illustrations/bookIllustration1";
import BookIllustration2 from "../../components/misc/illustrations/bookIllustration2";
import HomepageCSS from "./homepage.module.css";
import { PrimaryButton, HomePageLayout } from "./homepage.styled";
import Banner from "../../components/misc/banner/homepageBanner";

const Homepage = () => {
  return (
    <HomePageLayout >
      <Banner />
      <div className={HomepageCSS.layout}>
        <div className={HomepageCSS.content}>
          <div style={{ width: "35em" }}>
            <h1>Looking for a new book?</h1>
            <h2>We got you covered.</h2>
            <p>
              Booksy offers a large selection of high quality books: everything
              from classic literature, cookbooks, best-sellers, travel
              literature, childrens books, non-fiction and much more.
            </p>
            <p>
              Our company is based in Denmark and we deliver books to all
              corners of the world. Our books come from a variety of publishers
              and organizations, and can be acquired in different languages.
            </p>
            <p style={{ marginBottom: 50 }}>
              Don't miss out — explore our vast selection and immerse yourself
              in a world of stories. You can find our products below.
            </p>
            <PrimaryButton to="/books">See our books</PrimaryButton>
            {/* <BookstoreButton /> */}
          </div>
          <div>
          <BookIllustration1 />
          </div>
        </div>
        <div className={HomepageCSS.content}>
          <div>
          <BookIllustration2 />
          </div>
          <div style={{ width: "35em" }}>
            <h2>Get more out of your money!</h2>
            <p>
              A large number of our titles come with discounts, and we also
              offer special deals during holidays and other special periods.
              Free shipping is also included for orders above 90 euros.
            </p>
            <p>
              For us, it is important that we can assist our customers by
              finding the right books they need, without having to go overboard
              with their budget.
            </p>
            <p style={{ marginBottom: 50 }}>
              We also offer exclusive discounts to special members. With a
              booksy membership, you'll have early access to new books and save
              10% off all your purchases. Join now for a better experience!
            </p>
            <PrimaryButton to="/">Become a member</PrimaryButton>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default Homepage;
