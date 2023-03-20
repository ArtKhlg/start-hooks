import React from "react";
import CardWrapper from "../common/Card";
const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = () => {
        localStorage.auth = "token";
    };
    const onLogOut = () => {
        delete localStorage.auth;
    };
    return (
        <CardWrapper>
            {!isAuth ? (
                <Component {...props} name="Enter" onClick={onLogin} />
            ) : (
                <Component {...props} name="Exit" onClick={onLogOut} />
            )}{" "}
        </CardWrapper>
    );
};

export default withFunctions;
