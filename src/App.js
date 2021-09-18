import "./App.css";
import Header from "./components/Header";
import TotalBalance from "./components/TotalBalance";
import TransactionList from "./components/TransactionList";
import AddNewTransaction from "./components/AddNewTransaction";
import Balance from "./components/Balance";
import HistoryTitle from "./components/HistoryTitle";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="text-center bg-gray-200 h-screen w-full ">
      <div className="relative w-1/4 h-3/5  top-52 left-1/3 rounded">
        <GlobalProvider>
          <Header />
          <Balance />
          <TotalBalance />
          <HistoryTitle />
          <TransactionList />
          <AddNewTransaction />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
