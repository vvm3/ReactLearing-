import React, { createContext } from "react";
// Context API 
import FileA from "./FileA";

// Context API is used for sending data in component tree without passing props(props drilling)
// we just used provider and consumer



// 1st step create context
const FirstName = createContext();
const LastName = createContext();

const ContextApi = () => {
    //Context api Provider
    return (
        <>
            <FirstName.Provider value={"Virat"}>
                <LastName.Provider value={"Kohli"}>
                    <FileA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export default ContextApi;
export { FirstName, LastName };