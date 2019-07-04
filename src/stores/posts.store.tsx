import { types, Instance, flow } from "mobx-state-tree";

export interface IPostModel extends Instance<typeof PostModel> { };
export type PostModelType = typeof PostModel.Type;

export const PostModel = types
  .model('PostModel', {
    title: types.optional(types.string, ''),
    date: types.optional(types.string, '')
  });

export interface IPostsModel extends Instance<typeof PostsModel> { };
type PostsModelType = typeof PostsModel.Type;

export const PostsModel = types
  .model('PostsModel', {
    total: types.optional(types.number, 0),
    data: types.array(types.frozen<PostModelType>())
  })
  .actions(self => {
    const load = flow(function* () {
      let posts = yield fetch('http://localhost:3000/static/api/posts.api.json').then(d => d.json());
      self.data = posts.data;
    });
    return {
      load
    }
  });
