import * as React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import makeInspectable  from 'mobx-devtools-mst';
import { RootStoreType, getDetaultStore } from '../stores/root.store';

export const storeContext = React.createContext<RootStoreType | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(getDetaultStore);
  makeInspectable(store);
  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;