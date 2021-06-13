import React, { useContext, useState } from 'react';
import { Button, Form, FormGroup, Container, Card } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';
import { UserContext } from '../../App';
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Label } from 'reactstrap';

const Signup = () => {

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }


  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <h2 className="text-center mb-4">Sign Up</h2>
              <Input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/> 
              <Label htmlFor="newUser">New User Sign up</Label>
               {newUser && <Input name="name" type="text" onBlur={handleBlur} placeholder="Your name"/>}
              <FormGroup id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" onBlur={handleBlur} required />
              </FormGroup>
              <FormGroup id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onBlur={handleBlur} required />
              </FormGroup>
              <FormGroup id="submit">
                <Form.Label>Sign up</Form.Label>
                <Form.Control type="submit"  value={newUser ? 'Sign up' : 'Sign in'}/>
              </FormGroup>
            </Form>
            <div className="w-100 text-center mt-2">
                Already an account? <Link to="/login">Log in</Link>
            </div>
            <div className="text-center pt-3">
                -or-
            </div>
            { user.isSignedIn ? <Button onClick={signOut}>Sign Out</Button> :
            <Button className="w-100 text-center mt-2" onClick={googleSignIn}>Google Sign in</Button>
            }
              
              <Button className="w-100 text-center mt-2" onClick={fbSignIn}>Facebook Sign in</Button>
          </Card.Body>
        </Card>
        <div className="signIn">
          <p style={{ color: 'red' }}>{user.error}</p>
          {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
        </div>
      </div>
    </Container>
  );
};

export default Signup;