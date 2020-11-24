import React from "react";
import Affair from "./Affair";
import styles from './Affairs.module.css'
import {AffairType, FilterType} from "./HW2";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filterValue: FilterType) => void
    deleteAffairCallback: (affairId: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    };
    const setHigh = () => {
        props.setFilter("high")
    };
    const setMiddle = () => {
        props.setFilter("middle")
    };
    const setLow = () => {
        props.setFilter("low")
    };

    return (
        <div className={styles.affairsList}>

            {mappedAffairs}

            <div className={styles.buttonsList}>
                <button className={styles.button} onClick={setAll}>All</button>
                <button className={styles.button} onClick={setHigh}>High</button>
                <button className={styles.button} onClick={setMiddle}>Middle</button>
                <button className={styles.button} onClick={setLow}>Low</button>
            </div>
        </div>
    );
}

export default Affairs;