import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

//I have to specify in the () that this is a transaction we are taking, I could just do (props) and the props.transaction.text but this below is destructuring
export const Transaction = ({ transaction }) => {
    const {deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : "plus"}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}