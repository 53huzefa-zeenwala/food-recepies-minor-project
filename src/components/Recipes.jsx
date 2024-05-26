const Recipes = ({ title, calories, image, labels = [], nutrients }) => {
  console.log(title)
  return (
    <>
      {/* <h1>{title}</h1>
      <ul>
        {ingredients.map((ingrediant, index) => (
          <li key={index * 100}>{ingrediant.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img src={image} /> */}
      <a
        href="#"
        className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-white"
      >
        <img
          alt=""
          src={image}
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <div>
            <div className="py-4 w-full overflow-x-clip">
              {(labels.length > 4 ? labels.slice(0, 4) : labels).map((e) => (
                <span
                  key={e}
                  className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 w-fit text-nowrap"
                >
                  #{e}
                </span>
              ))}
              {/*             
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span> */}
            </div>

            <div>
              <dd className="font-medium">{title}</dd>      
            </div>
          </div>

          <div className="mt-2 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500 font-medium">Calories</p>

                <p className="font-semibold">
                  {Math.round(calories ?? 0)}
                </p>
              </div>
            </div>
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500 font-medium">Protein</p>

                <p className="font-semibold">
                  {Math.round(nutrients?.PROCNT?.quantity ?? 0)}{" "}
                  {nutrients?.PROCNT?.unit ?? "gm"}
                </p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500 font-medium">Carbs</p>

                <p className="font-semibold">
                  {Math.round(nutrients?.CHOCDF?.quantity ?? 0)}{" "}
                  {nutrients.CHOCDF?.unit ?? "gm"}
                </p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500 font-medium">Sugar</p>

                <p className="font-semibold">
                  {Math.round(nutrients?.SUGAR?.quantity ?? 0)}{" "}
                  {nutrients.SUGAR?.unit ?? "gm"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Recipes;
