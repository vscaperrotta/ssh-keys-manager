import { BrowserRouter, Routes } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import { appRoutes } from '@routes/routes.jsx';
import { messages, defaultLocale } from '@i18n';

const App = () => {
  return (
    <IntlProvider locale={defaultLocale} messages={messages[defaultLocale]}>
      <BrowserRouter>
        <Routes>
          {appRoutes().routes.map(({ component }) => component())}
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
};

export default App;
