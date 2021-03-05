import "./App.css";
import Home from "./components/Home";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";
import { HistoryProvider } from "./context/HistoryContext";

function App() {
   return (
      <HistoryProvider>
         <div>
            <h1>Expense Tracker</h1>
            <Home />
            <History />
            <NewTransaction />
         </div>
      </HistoryProvider>
   );
}

export default App;
