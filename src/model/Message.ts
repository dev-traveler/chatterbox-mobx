class Message implements IMessage {
  id = "";
  chatId = "";
  senderId = "";
  text = "";
  createdTs = 0;

  constructor(data: any) {
    Object.assign(this, data);
  }
}

export interface IMessage {
  id: string;
  chatId: string;
  senderId: string;
  text: string;
  createdTs: number;
}

export default Message;
