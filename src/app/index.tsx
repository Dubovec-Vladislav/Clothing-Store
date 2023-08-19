import React, { FC } from 'react'
import "./index.scss"
import { withProviders } from "./providers"
import { Routing } from "pages"
import Header from 'shared/header'

const App: FC = () => {
  return (
    <>
      <Header />
      <h1>App</h1>
      <Routing />
    </>
  );
}

export default withProviders(App);
