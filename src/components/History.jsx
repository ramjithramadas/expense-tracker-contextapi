import React, { useContext } from "react";
import { HistoryContext } from "../context/HistoryContext";

function History() {
   const [items, setItems] = useContext(HistoryContext);
   return (
      <div className="history_container">
         <h4>History</h4>
         <div>
            <table>
               <tr>
                  <th>Purpose</th>
                  <th>Income</th>
                  <th>Expense</th>
               </tr>
               {items.map((item) => (
                  <tr>
                     <td>{item.text}</td>
                     <td>{item.income}</td>
                     <td>{item.expense}</td>
                  </tr>
               ))}
            </table>
         </div>
      </div>
   );
}

export default History;
