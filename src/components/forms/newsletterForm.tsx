import {
  NewsletterForm,
  SecondaryButton,
  EmailInput,
} from "./newsletterForm.styled";

const NewsletterSection = () => {
  return (
    <NewsletterForm>
      <p>Join our newsletter!</p>
      <EmailInput>
        <input type="text" placeholder="Email address" />
        <SecondaryButton>Join</SecondaryButton>
      </EmailInput>
    </NewsletterForm>
  );
};

export default NewsletterSection;
