import * as React from 'react';
import Layout from "./layout";
import StoreProvider from "./tools/context";

export interface IAppProps {
  router: React.ComponentType;
  // tslint:disable-next-line:no-any
  routes: React.ComponentType<any>;
}

const App: React.FC<IAppProps> = ({ router, routes }) => (
  <StoreProvider>
    <Layout router={router} routes={routes}></Layout>
  </StoreProvider>
);

export default App;