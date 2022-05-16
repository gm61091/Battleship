import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();
        if (email && password && name && confirmPassword) {
            if (!email.value.match(/.+@.+\....+/)) {
                // please enter valid email address
                setMessage("there's been an error")
            } else if (password !== confirmPassword) {
                // passwords don't match
                setMessage("there's been an error")
            } else {
                try {
                    const response = await axios.post("/register", { email, password, name });
                    console.log(response);
                    if (response.status === 200) {
                        navigate("/login");
                    } else if (response.status === 422) {
                        // email already exists
                        setMessage("there's been an error")
                    } else {
                        // server error
                        setMessage("there's been an error")
                    }
                } catch (error) {
                    setMessage("there's been an error")
                }
            }
        } else {
            // please fill out all input fields
            setMessage("there's been an error")
        }
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                </Form.Group>
                <Button variant="success" onClick={handleSubmit}>
                    Register
                </Button>
                {/* {message && <Component />} */}
            </Form>
        </>
    )
}

export default Register;