import { useEffect, useRef, useState } from 'react';

import { useAtom } from 'jotai';

import { selectedChatAtom, selectedChatIdAtom } from '@/atom';
import { RoleEnum } from '@/enum';
import { Chat, Message } from '@/types';
import { postAsk } from '@/util/api';
import result from 'postcss/lib/result';

export function MessageInput() {
  // const setMessages = useSetAtom(messagesAtom);
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [selectedChatId, setSelectedChatId] = useAtom(selectedChatIdAtom);
  const [selectedChat, setSelectedChat] = useAtom(selectedChatAtom);

  // textareaの高さを自動調整する副作用
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea === null) return;

    const maxHeight = parseInt(window.getComputedStyle(textarea).maxHeight);
    const scrollHeight = textarea.scrollHeight;

    // 高さの設定
    textarea.style.height = '0px';
    textarea.style.height = textarea.scrollHeight + 'px';

    // スクロールバーの表示切替
    if (maxHeight < scrollHeight) {
      textarea.style.overflow = 'auto';
    } else {
      textarea.style.overflow = 'hidden';
    }
  }, [value]);

  return (
    <div className='w-full max-w-2xl pb-2'>
      <textarea
        className='block h-10 max-h-40 w-full resize-none overflow-hidden rounded-2xl border border-gray-500 bg-[#1b1b1f] px-3 py-2'
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={textareaRef}
      />
    </div>
  );

  // 入力中の処理
  async function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  // Enter押下時の処理
  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();

      // 空文字だった場合、警告を出す
      if (value.trim() === '') {
        console.log('empty');
        return;
      }

      send();
    }
  }

  // 送信処理
  async function send() {
    if (selectedChat == undefined) return;

    // 最初のメッセージの場合システムメッセージを追加
    const systemMessage =
      selectedChat.messages.length == 0
        ? '王様のように威厳のある感じで話してください。'
        : undefined;

    // メッセージの追加
    const newChatMessages: Message[] = selectedChat.messages;
    if (systemMessage) {
      newChatMessages.push({ id: 0, content: systemMessage, roleId: RoleEnum.System, chatId: 0 });
    }
    newChatMessages.push({ id: 0, content: value, roleId: RoleEnum.User, chatId: 0 });
    setSelectedChat({ ...selectedChat, messages: newChatMessages });
    setValue('');

    const result: Message = await postAsk({
      requestMessage: value,
      systemMessage,
      chatId: selectedChatId,
    });
    if (result == undefined) return;

    newChatMessages.push(result);
    setSelectedChat({ ...selectedChat, messages: newChatMessages });
    setSelectedChatId(result.chatId);
  }
}
