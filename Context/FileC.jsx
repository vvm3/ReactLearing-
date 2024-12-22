import React from "react";
import { FirstName, LastName } from "./ContextApi";

const FileC = () => {
    return (
        //Context api Consumer
        <FirstName.Consumer>
            {
                /* in consumer, always take function */
                (fname) => {
                    return (
                        <LastName.Consumer>
                            {
                                (lname) => {
                                    return (
                                        <h1>My Name is {fname} {lname}</h1>
                                    )
                                }
                            }
                        </LastName.Consumer>
                    )
                }
            }
        </FirstName.Consumer>
    )
}

export default FileC;