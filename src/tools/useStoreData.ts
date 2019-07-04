import * as React from 'react';
import { useObserver } from 'mobx-react-lite';

export const useStoreData = <Selection, ContextData, Store>(
  context: React.Context<ContextData>,
  storeSelector: (contextData: ContextData) => Store,
  dataSelector: (store: Store) => Selection
) => {
  const value = React.useContext(context);
  if (!value) {
    console.log('React context does not exits!')
    throw new Error();
  }
  const store = storeSelector(value);
  return useObserver(() => dataSelector(store));
};