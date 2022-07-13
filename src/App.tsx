import React from "react";
import "./App.css";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import { useStores } from "./stores";
import { observer } from "mobx-react-lite";

function App() {
  const { app_store } = useStores();

  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default observer(App);
