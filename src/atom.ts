import { atom } from 'jotai';

import { Chat } from './types';

export const chatsAtom = atom<Chat[]>([]);
export const selectedChatIdAtom = atom<number | undefined>(undefined);
// export const selectedChatAtom = atom(
//   // getter
//   (get) => {
//     const chatId = get(selectedChatIdAtom);
//     if (chatId == undefined) return undefined;
//     return get(chatsAtom).find((chat) => chat.id === chatId);
//   },

//   // setter
//   (get, set, newChat: Chat) => {
//     console.log('newChat', newChat);
//     return set(
//       chatsAtom,
//       get(chatsAtom).map((chat) => (chat.id === newChat.id ? newChat : chat)),
//     );
//   },
// );

export const selectedChatAtom = atom(
  // getter
  (get) => get(chatsAtom).find((d) => d.id === get(selectedChatIdAtom)),
  // setter
  (get, set, newChat: Chat) => {
    set(chatsAtom, (prev) => {
      // 同一Idのレコード存在する場合は上書き
      const isExists = prev.some((d) => d.id === newChat.id);
      if (isExists) {
        return prev.map((d) => (d.id === newChat.id ? { ...d, ...newChat } : d));
      } else {
        // それ以外は追加
        return [...prev, newChat];
      }
    });
  },
);

// export const messagesAtom = atom<Message[]>([]);
