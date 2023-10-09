import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, Icon, Grid } from "semantic-ui-react";
import { auth } from '../firebase';

const SignUp = () => {

    const [values, setValues] = useState(
        {
            email: "default",
            password: "default"
        }
    )

    const signup = async () => {
        await createUserWithEmailAndPassword(auth, values.email, values.password).then(() => {
            console.log("signed up!");
            window.location.href = '/';
        })
    }

  return (
    <div>
      <Grid>
        <Grid.Column width={8}>
          <div>
            <a href="/">
              <Button animated>
                <Button.Content visible>Home</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow left" />
                </Button.Content>
              </Button>
            </a>
          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          <div>
            <a href="/sign-in">
              <Button animated>
                <Button.Content visible>Login</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </a>
          </div>
        </Grid.Column>
      </Grid>

      <h1>Sign Up</h1>
      <div class="ui fluid card">
        <div class="content">
          <div class="ui form">
            <div class="field">
              <label>Email</label>
              <input type="text" name="user" placeholder="Email" onChange={(event) => setValues({...values, email: event.target.value})}/>
            </div>
            <div class="field">
              <label>Password</label>
              <input type="password" name="pass" placeholder="Password" onChange={(event) => setValues({...values, password: event.target.value})}/>
            </div>
            <button class="ui primary labeled icon button" onClick={signup}>
              <i class="unlock alternate icon"></i>
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
