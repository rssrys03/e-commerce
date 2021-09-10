import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, setRegisterForm } from '../store/usersReducer';
// import validator from 'validator';

function Register() {
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  let history = useHistory();

  const onRegister = (e) => {
    e.preventDefault();
      dispatch(registerUser(registerForm));
      history.push('/login');
  };

  const onChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

//   const validateEmail = () => validator.isEmail(registerForm.email);
//   const validateName = () => validator.isAlpha(registerForm.name);
//   const validatePassword = () =>
//     validator.isLength(registerForm.password, 3, 9);
//   const validate = () => {
//     let isValid = true;

//     if (!validateEmail()) {
//       alert.show('INVALID EMAIL');
//       isValid = false;
//     }

//     if (!validateName()) {
//       alert.show('INVALID NAME');
//       isValid = false;
//     }

//     if (!validatePassword()) {
//       alert.show('INVALID PASSWORD');
//       isValid = false;
//     }

//     return isValid;
//   };

  return (
    <Container className="mr-3 margin-top">
      <h1 className="text-center mt-3 mb-3">Register</h1>

      <Row className="mt-3 mb-3">
        <Col></Col>
        <Col xs={6}>
          <Form onSubmit={(e) => onRegister(e)}>
            <Form.Group className="mb-2" controlId="formBasicName">
              <Form.Control
                type="name"
                name="name"
                placeholder="Enter your Name"
                onChange={onChangeRegister}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={onChangeRegister}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={onChangeRegister}
              />
            </Form.Group>
            {/* <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Control type="password" placeholder=" Confirm Password" />
            </Form.Group> */}
            <Button variant="primary" type="submit" className="mt-3 mb-3">
              Create Account
            </Button>
            <p className="mt-1 mb-3">
              If you already have an account
              <Link to={`/login`}> CLICK HERE </Link> to access your account.
            </p>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Register;
