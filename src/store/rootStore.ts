import MessageStore, { IMessageStore } from "store/messageStore";

class RootStore implements IRootStore {
  messageStore: IMessageStore;

  constructor() {
    this.messageStore = new MessageStore(this);
  }
}

export interface IRootStore {
  messageStore: IMessageStore;
}

export default new RootStore();
