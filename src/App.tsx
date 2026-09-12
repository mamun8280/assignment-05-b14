
import Nav from "./Component/Nav";
import Banner from "./Component/Banner";
import Languages from "./Component/language/Languages";
import Footer from "./Component/Footer";
import { Suspense } from "react";
import type { Ilanguage } from "./types/Types";

const languagesFetch = async(): Promise<Ilanguage[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {

  const languagesPromise = languagesFetch()

  return (
   

    <div>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading languages...</h2>}>
        <Languages languagesPromise={languagesPromise}
         />
      </Suspense>
      <Footer />

    </div>
  )
}

export default App
