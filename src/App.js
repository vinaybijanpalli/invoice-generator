import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";
import { store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import InvoiceList from "./components/InvoiceList";

let persistor = persistStore(store);

const App = () => {
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App d-flex flex-column align-items-center justify-content-center w-100">
          <Container>
            {showCreateInvoice ? (
              <InvoiceForm />
            ) : (
              <InvoiceList setShowCreateInvoice={setShowCreateInvoice} />
            )}
          </Container>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
