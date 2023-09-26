import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

const App = () => {
  const language = navigator.language.split(/[-_]/)[0]; // language without region code
  const messages = language === "en" ? localeEnMessages : localeEsMessages;

  return (
    <IntlProvider locale={language} messages={messages}>
      <JobsList />
    </IntlProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));