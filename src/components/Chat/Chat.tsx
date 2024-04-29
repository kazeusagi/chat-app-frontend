'use client';

import { useState } from 'react';
import { Message, MessageProps } from './MessageContainer/Message';
import { MessageInput } from './MessageInput';
import { MessageContainer } from './MessageContainer';
import { ChatTitle } from './ChatTitle/ChatTitle';

export function Chat() {
  const [messages, setMessages] = useState<MessageProps[]>([
    { text: 'Hello', user: 'John' },
    { text: 'Hi', user: 'Jane' },
    { text: 'How are you?', user: 'John' },
  ]);

  return (
    <div className='flex h-full w-full flex-col items-center'>
      <ChatTitle />
      <MessageContainer messages={messages} />
      <MessageInput />
    </div>
  );
}
