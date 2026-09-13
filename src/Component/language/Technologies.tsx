import type { Ilanguage } from "../../types/Types";

interface TechnologiesProps {
  languages: Ilanguage[];
  selectedLanguages: Ilanguage[];
  handleAddToStack: (language: Ilanguage) => void;
}

const Technologies = ({
  languages,
  selectedLanguages,
  handleAddToStack,
}: TechnologiesProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

      {languages.map((language) => {
        const isSelected = selectedLanguages.some(
          (item) => item.id === language.id
        );

        return (
          <div
            key={language.id}
            className={`flex flex-col rounded-2xl border-2 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md ${
              isSelected
                ? "border-pink-500"
                : "border-gray-200"
            }`}
          >

            
            <div className="mb-4 flex items-center justify-between">

              
              <div className="flex h-16 w-16 items-center justify-center">
                {language.icon ? (
                  <img
                    src={language.icon}
                    alt={language.name}
                    className="h-14 w-14 object-contain"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-xs text-gray-400">
                    Icon
                  </div>
                )}
              </div>

              
                    <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      language.name === "React"
                        ? "bg-cyan-50 text-cyan-600"
                        : language.name === "Vue.js"
                        ? "bg-green-50 text-green-600"
                        : language.name === "Svelte"
                        ? "bg-orange-50 text-orange-600"
                        : language.name === "Next.js"
                        ? "bg-gray-100 text-gray-800"
                        : language.name === "Node.js"
                        ? "bg-green-50 text-green-700"
                        : language.name === "JavaScript"
                        ? "bg-yellow-50 text-yellow-600"
                        : language.name === "TypeScript"
                        ? "bg-blue-50 text-blue-600"
                        : language.name === "Tailwind CSS"
                        ? "bg-cyan-50 text-cyan-600"
                        : language.name === "Docker"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-pink-50 text-pink-500"
                    }`}
                      >
                        {language.badge}
                      </span>

            </div>

            
            <h2 className="text-lg font-bold text-gray-800">
              {language.name}
            </h2>

            
            <p className="mt-2 min-h-24 text-sm leading-6 text-gray-500">
              {language.description}
            </p>

                        
            <div className="mt-4 flex items-center justify-between gap-2">

              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                {language.category}
              </span>

              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                {language.difficulty}
              </span>

              <span className="text-sm text-gray-600">
                ⭐ {language.rating}
              </span>

            </div>

            
           <button
          onClick={() => handleAddToStack(language)}
          disabled={isSelected}
          className={`mt-5 w-full rounded-lg py-2.5 font-medium transition-all ${
            isSelected
              ? "cursor-not-allowed bg-gray-200 text-gray-500"
              : "cursor-pointer bg-gray-900 text-white hover:bg-gray-700"
          }`}
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
         </button>

          </div>
        );
      })}
    </div>
  );
};

export default Technologies;