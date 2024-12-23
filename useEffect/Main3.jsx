import React, { useEffect, useState } from "react";

const Main3 = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    //function for update the value after click
    const update1 = (() => {
        setNum(num + 1);
    })
    //function for update the value after click
    const update2 = (() => {
        setNums(nums + 1);
    })

    //it will execute after page loading or after clicking of 1st button. not execute after clicking of 2nd button
    useEffect(() => {
        // alert("clicked");
        console.log("excuting after page loading or after clicking of 1st button");
    }, [num])

    return (<>
        <button onClick={update1}>1st click me {num}</button>
        <button onClick={update2}>2nd click me {nums}</button>
    </>)
}

export default Main3;