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
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 sticky top-24">

      <div className="text-center border-b border-gray-100 pb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Your Stack
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          {selectedLanguages.length} Selected
        </p>
      </div>

      
      {selectedLanguages.length === 0 ? (
        <div className="py-10 text-center">
          <div className="text-4xl mb-3">
            💻
          </div>

          <p className="text-sm text-gray-400">
            No technology added yet
          </p>

          <p className="text-xs text-gray-300 mt-2">
            Start building your stack
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-4 space-y-3">

            {selectedLanguages.map((language) => (
              <div
                key={language.name}
                className="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 hover:shadow-sm transition"
              >

              
                <div className="flex items-center gap-3">

                  
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                    {language.logo ? (
                      <img
                        src={language.logo}
                        alt={language.name}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <span className="text-xs text-gray-400">
                        Logo
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm text-gray-800">
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