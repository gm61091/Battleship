import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import addToken from "../actions/addToken";
import addEmail from "../actions/addEmail";
import loadUserStats from "../actions/loadUserStats";

const Login = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();
        if (email && password) {
            if (email.value.match(/.+@.+\....+/)) {
                try {
                    const response = await axios.post("/login", { email, password });
                    if (response.data) {
                        dispatch(addToken(response.data.token));
                        dispatch(addEmail(email));
                        dispatch(loadUserStats({
                            wins: response.data.wins,
                            losses: response.data.losses
                        }))
                        localStorage.setItem("token", response.data.token);
                        navigate("/");
                    } else {
                        // invalid password and email combination
                        setMessage("there's been an error")
                    }
                } catch (error) {
                    // invalid password and email combination
                    setMessage("there's been an error")
                }
            } else {
                // please enter valid email address
                setMessage("there's been an error")
            }
        } else {
            // please fill out all input fields
            setMessage("there's been an error")
        }
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="success" onClick={handleSubmit}>
                    Login
                </Button>
                {/* {message && <Component />} */}
            </Form>
        </>
    )
}

export default Login;