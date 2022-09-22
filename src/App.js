import { AppProvider } from './AppContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import Expenses from './components/Expenses';
import Income from './components/Income';
import Total from './components/Total';
import AddIncome from './components/AddIncome';

function App() {
  return (
    <AppProvider>
    <div className="container">
     <h1>Expense Tracker</h1>
     <div className='info'>
        <Income />
        <Expenses />
        <Total />
     </div>
     <div className='expenseList'>
     <ExpenseList />
     </div>
     <div>
      <AddIncome />
     </div>
     <div>
      <AddExpense />
     </div>
    </div>
    </AppProvider>
  );
}

export default App;
