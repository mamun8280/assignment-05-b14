import { use, useState } from "react";
import type { Ilanguage } from "../../types/Types";
import Technologies from "./Technologies";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

interface LanguagesProps {
  languagesPromise: Promise<Ilanguage[]>;
}

const Languages = ({ languagesPromise }: LanguagesProps) => {
  const languages = use(languagesPromise);

  const [selectedLanguages, setSelectedLanguages] = useState<Ilanguage[]>([]);

  const handleAddToStack = (language: Ilanguage) => {
    const isAlreadyAdded = selectedLanguages.some(
      (item) => item.name === language.name
    );

    if (isAlreadyAdded) {
      toast.error(`${language.name} is already added`);
      return;
    }

    setSelectedLanguages((previous) => [
      ...previous,
      language,
    ]);

    toast.success(`${language.name} added to your stack`);
  };

  const handleRemoveFromStack = (name: string) => {
    setSelectedLanguages((previous) =>
      previous.filter((language) => language.name !== name)
    );
  };

  const handleRemoveAll = () => {
    setSelectedLanguages([]);
  };

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="w-full px-6 lg:px-10 xl:px-14">

      
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore{" "}
            <span className="text-pink-500">
              Technologies
            </span>
          </h2>

          <p className="text-gray-500 mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          
          <div className="lg:col-span-3">
            <Technologies
              languages={languages}
              selectedLanguages={selectedLanguages}
              handleAddToStack={handleAddToStack}
            />
          </div>

          
          <div className="lg:col-span-1">
            <YourStack
              selectedLanguages={selectedLanguages}
              handleRemoveFromStack={handleRemoveFromStack}
              handleRemoveAll={handleRemoveAll}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Languages;