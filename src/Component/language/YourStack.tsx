import type { Ilanguage } from "../../types/Types";

interface YourStackProps {
  selectedLanguages: Ilanguage[];
  handleRemoveFromStack: (name: string) => void;
  handleRemoveAll: () => void;
}

const YourStack = ({
  selectedLanguages,
  handleRemoveFromStack,
  handleRemoveAll,
}: YourStackProps) => {
  return (
    <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

     
      <div className="border-b border-gray-100 pb-4 text-center">
        <h2 className="text-xl font-bold text-gray-800">
          Your Stack
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          {selectedLanguages.length} Selected
        </p>
      </div>

     
      {selectedLanguages.length === 0 ? (
        <div className="py-10 text-center">
          <div className="mb-3 text-4xl">
            💻
          </div>

          <p className="text-sm text-gray-400">
            No technology added yet
          </p>

          <p className="mt-2 text-xs text-gray-300">
            Start building your stack
          </p>
        </div>
      ) : (
        <>
          
          <div className="mt-4 space-y-3">

            {selectedLanguages.map((language) => (
              <div
                key={language.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 p-3 transition hover:shadow-sm"
              >

                
                <div className="flex items-center gap-3">

                  
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                    {language.icon ? (
                      <img
                        src={language.icon}
                        alt={language.name}
                        className="h-8 w-8 object-contain"
                      />
                    ) : (
                      <span className="text-xs text-gray-400">
                        Icon
                      </span>
                    )}
                  </div>

                
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {language.name}
                    </h3>

                    <p className="text-xs text-gray-400">
                      {language.category}
                    </p>
                  </div>

                </div>

                
                <button
                  onClick={() =>
                    handleRemoveFromStack(language.name)
                  }
                  className="cursor-pointer rounded-md px-2 py-1 text-xs font-medium text-red-500 transition hover:bg-red-50"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

         
          <button
            onClick={handleRemoveAll}
            className="mt-5 w-full cursor-pointer rounded-lg bg-red-500 py-2.5 text-sm font-medium text-white transition hover:bg-red-600"
          >
            Remove All
          </button>
        </>
      )}

    </div>
  );
};

export default YourStack;