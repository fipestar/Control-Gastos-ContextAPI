import BudgetForm from "./components/BudgetForm"

function App() {
  
  return (
    <>
      <header className="bg-blue-500 text-white py-8 max-h-72 ">
        <h1 className=" uppercase text-4xl font-bold text-center">
          Planificador de Gastos
        </h1>
      </header>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
          <BudgetForm />
      </div>
    </>
  )
}

export default App
