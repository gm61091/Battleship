import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequireAuth = () => {

    const auth = useSelector(state => state.auth.auth);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!auth) navigate("/login");
    }, [auth])

    return props.children;
}

export default RequireAuth;