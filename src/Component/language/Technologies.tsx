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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      {languages.map((language) => {
        const isSelected = selectedLanguages.some(
          (item) => item.name === language.name
        );

        return (
          <div
            key={language.name}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >

            {/* Logo */}
            <div className="h-20 flex items-center justify-center mb-4">
              {language.logo ? (
                <img
                  src={language.logo}
                  alt={language.name}
                  className="h-16 w-16 object-contain"
                />
              ) : (
                <div className="h-16 w-16 rounded-xl bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                  Logo
                </div>
              )}
            </div>

            {/* Technology Name */}
            <h2 className="text-lg font-bold text-gray-800">
              {language.name}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-6 mt-2 min-h-[96px]">
              {language.description}
            </p>

            {/* Category + Level */}
            <div className="flex items-center justify-between gap-2 mt-4">
              <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                {language.category}
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                {language.level}
              </span>
            </div>

            {/* Rating */}
            <p className="text-sm text-gray-600 mt-3">
              ⭐ {language.rating}
            </p>

            {/* Add Button */}
            <button
              onClick={() => handleAddToStack(language)}
              disabled={isSelected}
              className={`w-full mt-5 py-2.5 rounded-lg font-medium transition-all
                ${
                  isSelected
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gray-900 text-white hover:bg-gray-700"
                }`}
            >
              {isSelected ? "Added ✓" : "Add to Stack"}
            </button>

          </div>
        );
      })}
    </div>
  );
};

export default Technologies;