import { useSetAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';

import { messagesAtom } from '@/atom';
// import { resolveHostname } from '@/util/dns';

export function MessageInput() {
  const setMessages = useSetAtom(messagesAtom);
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
    // GET http://backend-app:3003
    // console.log(resolveHostname('backend-app'));
    setValue(event.target.value);
    // const res = await fetch('http://localhost:3333', { method: 'GET' });
    // console.log(res);

    // const res2 = await fetch('http://localhost:3333/aa', { method: 'POST' });
    // console.log(res2);
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
      setMessages((prev) => [...prev, { text: value, user: 'John' }]);
      setValue('');
      send();
    }
  }

  async function send() {
    const response = await fetch('http://localhost:3333/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ message: value }),
    });

    const json = await response.json();
    const message: string = json.content;

    setMessages((prev) => [...prev, { text: message, user: 'AI' }]);
  }
}
