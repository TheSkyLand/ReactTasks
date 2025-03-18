import React from "react";
import { useState } from "react";
import { ChangeEventHandler } from "react";

const ThirdPage = () => {
    const [Array, setArray] = useState([,])
    const [A, setA] = useState([0])
    
    function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
    }
    
    return (
        <div style={{display:"flexbox", flexDirection:"column", width:"100px" }}>

            введите a:<input></input>

        </div>
    )
}

export default ThirdPage