import React, { useState } from "react";

import Data from "./Data.json";
import FAQ from "./FAQ";
import "./faqs.modiul.css";

export default function Faqs() {
  const [faqs, setFaqs] = useState(Data);
  return (
    <main>
      <h1>FAQS</h1>
      <hr />
      <div>
        {faqs.map((faq) => (
          <FAQ key={faq.id} faqs={faq} />
        ))}
      </div>
    </main>
  );
}
