import React from "react";
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (affairId: number) => void}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};

    return (
        <div>
            // show some text

            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
