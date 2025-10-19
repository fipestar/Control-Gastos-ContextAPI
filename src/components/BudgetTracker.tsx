import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import 'react-circular-progressbar/dist/styles.css';
import { useMemo } from 'react';

export default function BudgetTracker() {
  const { state, dispatch, totalExpenses, remainingBudget } = useBudget();

  const percentage = +((totalExpenses / state.budget) * 100).toFixed(2)

   const canRestartApp = () => useMemo(() => state.expenses.length , [state.expenses])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center">
            <CircularProgressbar
              value={percentage}
              styles={buildStyles({
                  pathColor: percentage === 100 ? '#DC2626' : '#3b82f6',
                  trailColor: '#F5F5F5',
                  textSize: 8,
                  textColor: percentage === 100 ? '#DC2626' : '#3b82f6',
              })}
              text={`${percentage}% Gastado`}
            />
        </div>

        <div className="flex flex-col gap-8 justify-center items-center">
            <button
                type="button"
                className="bg-pink-600 w-full md:w-auto px-5 py-2 rounded-lg text-white font-bold uppercase shadow-md hover:bg-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!canRestartApp()}
                onClick={() => dispatch({type: 'restart-app'})}>
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
