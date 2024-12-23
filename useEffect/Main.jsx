import React, { useEffect, useState } from "react";

const Main = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    //function for update the value after click 1st
    const update = () => {
        setNum(num + 1);
    }
    //function for update the value after click 2nd
    const update2 = () => {
        setNums(nums + 1);
    }

    //it will execute for every rendering. when page refresh or after clicking buttons.
    useEffect(() => {
        // alert("clicked");
        console.log("clicked");
    })

    return (
        <>
            <button onClick={update}>1st Click me {num}</button>
            <button onClick={update2}>2nd Click me {nums}</button>
        </>
    )
}

export default Main;