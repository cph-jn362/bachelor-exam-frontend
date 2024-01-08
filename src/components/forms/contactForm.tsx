import { ContactForm, PrimaryButton } from "./contactForm.styled";

const ContactSection = () => {
  return (
    <ContactForm>
      <h2>Want to contact us?</h2>
      <p style={{ width: "70%" }}>
        A large number of our titles come with discounts, and we also offer
        special deals during holidays and other special periods. Free shipping
        is also included for orders above 90 euros.
      </p>
      <div>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="..."></textarea>
        <PrimaryButton>
        Send Message  
        </PrimaryButton>
      </div>
    </ContactForm>
  );
};

export default ContactSection;
