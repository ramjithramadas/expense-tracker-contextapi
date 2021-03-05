import { useContext } from "react";
import { HistoryContext } from "../context/HistoryContext";

function Home() {
   const [items, setItems] = useContext(HistoryContext);
   let i;
   let income = 0;
   let e;
   let expense = 0;
   return (
      <div className="home_container">
         {items.map((item) => {
            i = parseInt(item.income);
            income = income + i;
            e = parseInt(item.expense);
            expense = expense + e;
         })}
         <div>
            <h4>Your Balance</h4>
            <h2>${income - expense}</h2>
         </div>
         <div className="home_incExpContainer">
            <div>
               <h5>Income</h5>
               <p>${income}</p>
            </div>
            <div>
               <h5>Expense</h5>
               <p>${expense}</p>
            </div>
         </div>
      </div>
   );
}

export default Home;
