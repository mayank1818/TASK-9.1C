import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const HomePage = () => {
  const [user] = useAuthState(auth);

  const logoutUser = () => {
    auth.signOut().then(() => {
      console.log("logged out!");
    });
  };

  return (
    <div>
      <Menu>
        <Menu.Item>
          <Button primary as="a" href="/log-in">
            Log in
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button secondary as="a" href="/sign-up">
            Sign Up
          </Button>
        </Menu.Item>
      </Menu>
      <Menu>
        <Menu.Item>
          <Button secondary as="a" href="/" onClick={logoutUser}>
            Log Out
          </Button>
        </Menu.Item>
        <Menu.Item>
          <div>{user ? user.email : `Please Login or Sign Up`}</div>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default HomePage;
