'use client';

import { useAtomValue, useSetAtom } from 'jotai';

import { chatsAtom, selectedChatIdAtom } from '@/atom';

export function ChatHistorySideBar() {
  const chats = useAtomValue(chatsAtom);
  const setSelectedChatId = useSetAtom(selectedChatIdAtom);

  return (
    <div className='h-full w-40 overflow-y-scroll bg-gray-600'>
      <div className='flex h-16 w-full items-center justify-center' onClick={() => onClick(0)}>
        新規チャット
      </div>
      {chats.map((chat, index) => (
        <div
          key={index}
          className='flex h-16 w-full items-center justify-center'
          onClick={() => onClick(chat.id)}
        >
          {chat.name}
        </div>
      ))}
    </div>
  );

  function onClick(id: number) {
    setSelectedChatId(id);
  }
}
