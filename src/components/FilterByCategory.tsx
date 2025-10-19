import type { ChangeEvent } from "react";
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export default function FilterByCategory() {

  const { dispatch } = useBudget();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch({type: 'add-filter-category', payload: {id: e.target.value}})
  }
  return (
    <div className="bg-white shadow-lg rounded-lg p-10">
        <form>
            <div className="flex flex-col md:flex-row md:items-center gap-5">
                <label htmlFor="category">Filtrar Gastos</label>
                <select
                  id="category"
                  className="border border-gray-300 rounded-md p-2 w-full md:w-1/3"
                  onChange={handleChange}
                >
                    <option value="">-- Todas las categorias --</option>
                    {categories.map(category => (
                        <option 
                          key={category.id}
                          value={category.id}
                        >
                          {category.name}
                        </option>
                    ))}
                </select>

            </div>
        </form>
    </div>
  )
}
