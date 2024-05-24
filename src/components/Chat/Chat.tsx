'use client';

import { useEffect } from 'react';

import { useAtom, useSetAtom } from 'jotai';

import { ChatTitle } from './ChatTitle';
import { MessageContainer } from './MessageContainer';
import { MessageInput } from './MessageInput';
import { chatsAtom, selectedChatAtom, selectedChatIdAtom } from '@/atom';
import { getChat, getChats } from '@/util/api';

export function Chat() {
  const setChats = useSetAtom(chatsAtom);
  const [selectedChatId, setSelectedChatId] = useAtom(selectedChatIdAtom);
  const [selectedChat, setSelectedChat] = useAtom(selectedChatAtom);

  // 初回表示時
  useEffect(() => {
    getChats(2).then((chats) => {
      if (chats && chats.length > 0) {
        setChats(chats);
        setSelectedChatId(chats[0].id);
      }
    });
  }, []);

  // チャットが選択および新規作成された時
  useEffect(() => {
    if (selectedChatId == undefined) return;

    // 0の場合は新規チャット
    if (selectedChatId == 0) {
      setSelectedChat({ id: 0, name: '新規チャット', messages: [] });
      return;
    }

    // 既存のチャットの選択の場合はチャット情報を取得
    getChat(2, selectedChatId).then((chat) => {
      if (chat) setSelectedChat(chat);
    });
  }, [selectedChatId]);

  return (
    <div className='flex  size-full flex-col items-center'>
      <ChatTitle />
      <MessageContainer />
      <MessageInput />
    </div>
  );
}
