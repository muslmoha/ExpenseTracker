import React, {useContext} from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
    //Grabbing the transactions from the global context
    const { transactions } = useContext(GlobalContext);

    //mapping each transaction to a single Transaction component where we are passing in transaction
    return (
        <div>
            <h3>History</h3>
                <ul className="list">
                    {transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction}/>))}
                </ul>
        </div>
    )
}