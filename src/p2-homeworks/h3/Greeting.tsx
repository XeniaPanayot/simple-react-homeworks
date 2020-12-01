import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: any
        // (name: string)=> void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name === "" ? s.error : s.regularInputClass // need to fix with (?:)

    return (
        <div className={s.containerClass}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={s.errorMessageClass}>{error}</span>
            <button onClick={addUser} className={s.btnClass}>add</button>
            <span className={s.countClass}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;