import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, useState} from "react";
import {inspect} from "util";
import styles from "./superRadio.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    value: string
    selected?: string
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const [checked, setChecked] = useState(false)
    const [selected, setSelected] = useState(value)
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        setChecked(e.currentTarget.checked)
        setSelected(e.currentTarget.value)
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }

    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + "-" + i} className={styles.radioLabel}>
            <input
                type={"radio"}
                value={o}
                onChange={onChangeCallback}
                checked={o.checked}
                name={name}
                className={styles.radioInput}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : [];

    return (
        <div className={styles.radioButtons}>
            {mappedOptions}
        </div>
    );
}

export default SuperRadio;
