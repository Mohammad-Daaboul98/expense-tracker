import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


export default function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+';
    const them = transaction.amount < 0 ? 'minus' : 'plus';
    return (
        <>
            <li className={them} >
                {transaction.text} <span> {sign}${Math.abs(transaction.amount)}</span>
                <button className="delete-btn"
                    onClick={() => deleteTransaction(transaction.id)}>x</button>

            </li>
        </>
    )
}
