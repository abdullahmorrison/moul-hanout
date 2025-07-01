import menu from "@/lib/menu";

export default function Menu() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary px-2 py-10 md:px-10">
      <main className="mx-auto flex w-full max-w-6xl flex-col items-center rounded-sm bg-secondary px-6 py-10 text-black md:p-20">
        <h1 className="pb-20 text-5xl font-bold">Menu</h1>
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          {menu.map((category) => (
            <div key={category.name} className="space-y-4">
              <h2 className="text-3xl font-semibold">{category.name}</h2>
              <ul className="space-y-6">
                {category.meals.map((meal) => (
                  <li key={meal.name} className="pb-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium">{meal.name}</h3>
                      <span className="text-lg font-bold">
                        ${meal.price.toFixed(2)}
                      </span>
                    </div>
                    {meal.note && (
                      <span className="text-sm text-gray-500 italic">
                        *{meal.note}*
                      </span>
                    )}
                    <p className="mt-2 text-gray-700">{meal.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
