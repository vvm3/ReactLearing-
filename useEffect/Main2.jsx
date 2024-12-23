import React, { useEffect, useState } from "react";

const Main2 = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    //function for update the value after click 1st
    const update1 = (() => {
        setNum(num + 1);
    })
    //function for update the value after click 2nd
    const update2 = (() => {
        setNums(nums + 1);
    })

    //it will execute when after page load or after page refresh at once
    useEffect(() => {
        // alert("clicked")
        console.log("executing after page loading/refreshing");
    }, [])

    return (<>
        <button onClick={update1}>1st click me {num}</button>
        <button onClick={update2}>2nd click me {nums}</button>
    </>)
}

export default Main2;