import { types, Instance } from "mobx-state-tree";

export interface IAboutModel extends Instance<typeof AboutModel> { };

export const AboutModel = types
  .model('AboutModel', {
    isVisible: types.optional(types.boolean, true)
  })
  .actions(self => ({
    toggle() {
      self.isVisible = !self.isVisible;
    }
  }));
