import { useState, useContext } from "react";
import { HistoryContext } from "../context/HistoryContext";

function NewTransaction() {
   const [items, setItems] = useContext(HistoryContext);
   const [text, setText] = useState("");
   const [income, setIncome] = useState("");
   const [expense, setExpense] = useState("");

   const formSubmit = (e) => {
      e.preventDefault();
      setItems((prevState) => [...prevState, { text, income, expense }]);
   };

   return (
      <div className="transaction_container">
         <h4>Add New Transaction</h4>
         <div>
            <form className="transaction_form" onSubmit={formSubmit}>
               <label className="transaction_formLabel">Text</label>
               <input onChange={(e) => setText(e.target.value)} placeholder="Enter text" value={text} />

               <label className="transaction_formLabel">Income Amount</label>
               <input onChange={(e) => setIncome(e.target.value)} placeholder="Enter amount" value={income} />

               <label className="transaction_formLabel">Expense Amount</label>
               <input onChange={(e) => setExpense(e.target.value)} placeholder="Enter amount" value={expense} />

               <button className="transaction_formBtn">Add Transaction</button>
            </form>
         </div>
      </div>
   );
}

export default NewTransaction;
