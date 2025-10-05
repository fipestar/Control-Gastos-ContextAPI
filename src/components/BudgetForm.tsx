import { useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"

export default function BudgetForm() {

    const [budget, setBudget] = useState(0)
    const {dispatch} = useBudget()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }

    const isValid = useMemo( () => {
        return isNaN(budget) || budget <= 0
    }, [budget])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type: 'add-budget', payload: {budget}})
    }
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center md:text-left">
           Definir Presupuesto
        </label>    
        <input
           id="budget" 
           type="number"
           className="border border-gray-300 rounded-lg p-3 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
           placeholder="Ingresa tu presupuesto"
           name="budget"
           value={isNaN(budget) ? '' : budget}
           onChange={handleChange }
        />
      </div>
      <input 
         type="submit"
         value="Establecer Presupuesto"
         className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 cursor-pointer w-full md:w-auto font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
         disabled={isValid}
         
      />
    </form>
  )
}
