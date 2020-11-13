import React from "react";
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt="avatar"/>
            <div className={styles.bubble}>
                <div>
                    <p className={styles.name}>{props.name}</p>
                    <p className={styles.messagetext}>{props.message}</p>
                </div>
                <time className={styles.time} dateTime={"props.time"}>{props.time}</time>
            </div>
        </div>
    );
}

export default Message;
