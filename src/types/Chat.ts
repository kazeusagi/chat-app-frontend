import { Message } from './Message';

export type Chat = {
  id: number;
  name: string;
  messages: Message[];
};
