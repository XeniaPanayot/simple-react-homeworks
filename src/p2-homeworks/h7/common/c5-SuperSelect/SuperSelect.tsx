import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import {v1} from "uuid";
import {inspect} from "util";
import styles from "./suprsSelect.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    // const mappedOptions: any[] = [];
    // map options with key
    const mappedOptions = options?.map(o =>
        <option
            value={o}
            key={v1()}
        >{o}</option>)

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }

    return (
        <select
            onChange={onChangeCallback} {...restProps}
            className={styles.select}
        >
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
