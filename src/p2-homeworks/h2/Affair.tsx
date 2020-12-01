import React from "react";
import {AffairType} from "./HW2";
import styles from './Affair.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (affairId: number) => void}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};

    return (
        <div className={styles.taskItem}>
            <p>{props.affair.name}</p>

            <button className={styles.deleteBtn} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
