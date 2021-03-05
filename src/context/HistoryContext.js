import { createContext, useState } from "react";

export const HistoryContext = createContext();

export const HistoryProvider = (props) => {
   const [items, setItems] = useState([
      
   ]);
   return <HistoryContext.Provider value={[items, setItems]}>{props.children}</HistoryContext.Provider>;
};
