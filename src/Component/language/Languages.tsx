import React, { use } from 'react';
import type { Ilanguage } from '../../types/Types';

interface LanguagesProps{
    languagesPromise : Promise<Ilanguage[]>;
}

const Languages = ({languagesPromise}:LanguagesProps) => {
    console.log({languagesPromise});
    const languages =use(languagesPromise);
    return (
       <div className="bg-red-500 p-10 text-2xl text-center text-white">
      languages card
    </div>
    );
};


export default Languages;