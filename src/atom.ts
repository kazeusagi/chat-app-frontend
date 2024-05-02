import { atom } from 'jotai';

import { Message } from './types';

export const messagesAtom = atom<Message[]>([
  { text: 'Hello', user: 'John' },
  { text: 'Hi', user: 'Jane' },
  { text: 'How are you?', user: 'John' },
]);
