import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
  const { state, totalExpenses, remainingBudget } = useBudget();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center">
            <img src="/grafico.jpg" alt="Grafica de gastos" />
        </div>

        <div className="flex flex-col gap-8 justify-center items-center">
            <button
                type="button"
                className="bg-pink-600 w-full md:w-auto px-5 py-2 rounded-lg text-white font-bold uppercase shadow-md hover:bg-pink-700 transition-colors">
                Resetear app
            </button>

            <AmountDisplay 
              label="Presupuesto"
              amount={state.budget}
            />
            <AmountDisplay 
              label="Disponible"
              amount={remainingBudget}
            />
            <AmountDisplay 
              label="Gastado"
              amount={totalExpenses}
            />
        </div>
    </div>
  )
}
