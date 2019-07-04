import { types, Instance } from "mobx-state-tree"
import { AboutModel } from "./about.store";
import { PostsModel } from "./posts.store";

export interface IRootStoreModel extends Instance<typeof RootStore> { };
export type RootStoreType = typeof RootStore.Type;

export const RootStore = types.model('RootStore', {
  posts: types.optional(PostsModel, {}),
  about: types.optional(AboutModel, {})
});

export const getDetaultStore = () => RootStore.create({});
