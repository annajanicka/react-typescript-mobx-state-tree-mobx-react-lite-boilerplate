import { storeContext } from "./context";
import { RootStoreType } from "../stores/root.store";
import { useStoreData } from "./useStoreData";

export const useRootData = <Selection>(dataSelector: (store: RootStoreType) => Selection) =>
  useStoreData(storeContext, contextData => contextData!, dataSelector);