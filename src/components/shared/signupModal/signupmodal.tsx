import React from "react";
import {
  Modal,
  SignupForm,
  PrimaryButton,
  SecondaryButton,
  Overlay,
} from "./signupmodal.styled";
import { UserEntity } from "../../../state/users/UserEntity";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../state/store";
import { signup } from "../../../state/users/userSlice";


type propTypes = {
  open: boolean;
  onClose: () => void;
};

const SignupModal: React.FC<propTypes> = ({ open, onClose }) => {
  const error: string | undefined = useSelector(
    (state: RootState) => state.user.error
  );

  const dispatch = useDispatch<AppDispatch>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupAccount = (e:any) => {
    e.preventDefault();
    dispatch(signup(new UserEntity(firstName, lastName, email, password)))
  }  

  if (!open) return null;
  return (
    <Overlay>
      <Modal>
        <h2>Sign up</h2>
        <SignupForm onSubmit={signupAccount}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "360px 360px",
              justifyContent: "space-between",
            }}
          >
            <input type="text" placeholder="First name *" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last name *" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <input type="text" placeholder="Email Address *" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Password *" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <PrimaryButton type="submit">Register</PrimaryButton>
          <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
          <p>{error}</p>
        </SignupForm>
      </Modal>
    </Overlay>
  );
};

export default SignupModal;
