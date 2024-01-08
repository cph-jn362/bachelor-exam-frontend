import React from "react";
import {
  Modal,
  LoginForm,
  PrimaryButton,
  SecondaryButton,
  Overlay,
} from "./loginmodal.styled";

type propTypes = {
  open: boolean;
  onClose: () => void;
};

const LoginModal: React.FC<propTypes> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Overlay onClick={onClose}>
      <Modal>
        <h2>Log in</h2>
        <LoginForm>
          <input type="text" placeholder="Email Address *" />
          <input type="text" placeholder="Password *" />
        </LoginForm>
        <PrimaryButton>Login</PrimaryButton>
        <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
      </Modal>
    </Overlay>
  );
};

export default LoginModal;
