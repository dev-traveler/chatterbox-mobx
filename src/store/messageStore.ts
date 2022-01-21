import { makeAutoObservable, observable } from "mobx";
import { IRootStore } from "store/rootStore";
import Message from "model/Message";

class MessageStore implements IMessageStore {
  rootStore: IRootStore;

  messages: Message[] = [];

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {
      rootStore: false,
      messages: observable.shallow,
    });
  }

  add(messages: Message): void {
    this.messages.push(messages);
  }

  getMsgIndex(id: string): number {
    return this.messages.findIndex((message) => message.id === id);
  }

  getPrevMsg(id: string): Message | undefined {
    const currIndex = this.getMsgIndex(id);
    if (currIndex === -1) return undefined;
    return this.messages[currIndex - 1];
  }

  getNextMsg(id: string): Message | undefined {
    const currIndex = this.getMsgIndex(id);
    if (currIndex === -1) return undefined;
    return this.messages[currIndex + 1];
  }
}

export interface IMessageStore {
  messages: Message[];
  add(messages: Message): void;
  getMsgIndex(id: string): number;
  getPrevMsg(id: string): Message | undefined;
  getNextMsg(id: string): Message | undefined;
}

export default MessageStore;
