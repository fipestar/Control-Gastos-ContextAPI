import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
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
              amount={300}
            />
            <AmountDisplay 
              label="Disponible"
              amount={200}
            />
            <AmountDisplay 
              label="Gastado"
              amount={500}
            />
        </div>
    </div>
  )
}
