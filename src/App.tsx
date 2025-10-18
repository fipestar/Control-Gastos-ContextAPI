import { useEffect, useMemo } from "react";
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import  BudgetTracker from "./components/BudgetTracker";
import  ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList";

function App() {

  const { state } = useBudget();
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(state.expenses));
    localStorage.setItem('budget', state.budget.toString());
  }, [state.expenses, state.budget])

  return (
    <>
      <header className="bg-blue-500 text-white py-8 max-h-72 ">
        <h1 className=" uppercase text-4xl font-bold text-center">
          Planificador de Gastos
        </h1>
      </header>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
          {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValidBudget && (
       <main className="max-w-4xl mx-auto mt-10">
        <ExpenseList />
        <ExpenseModal />
      </main>
      )}
    </>
  )
}

export default App
