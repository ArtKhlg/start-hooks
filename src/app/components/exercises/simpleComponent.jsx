import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ name, onClick, onLogin, onLogOut, isAuth }) => {
    return (
        <>
            <button onClick={onClick}>{name}</button>
        </>
    );
};

SimpleComponent.propTypes = {
    onClick: PropTypes.func,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string,
    name: PropTypes.string
};
export default SimpleComponent;
