import React from "react";
import { useContext } from "react";
import { FirstName, LastName } from "./ContextApi";

const FileD = () => {
    //useContext
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <h1>My name is {fname} {lname}</h1>
    )
}

export default FileD;