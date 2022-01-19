import { makeAutoObservable, observable } from "mobx";
import { IMessage } from "../model/Message";
import { IRootStore } from "./rootStore";

class MessageStore implements IMessageStore {
  rootStore: IRootStore;

  messages: IMessage[] = [];

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {
      rootStore: false,
      messages: observable.shallow,
    });
  }

  add(messages: IMessage): void {
    this.messages.push(messages);
  }
}

export interface IMessageStore {
  messages: IMessage[];
  add(messages: IMessage): void;
}

export default MessageStore;
