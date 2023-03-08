import React, { Suspense } from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
import Scene from './components/Scene';

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div style={{ width: "100%", height: "100%" }}>
            <Scene />
          </div>
        </PersistGate>
      </Provider>
    </Suspense>


  );
}

export default App;
