'use client';

import { useState } from 'react';

import { ChatTitle } from './ChatTitle';
import { MessageContainer } from './MessageContainer';
import { MessageProps } from './MessageContainer/Message';
import { MessageInput } from './MessageInput';

export function Chat() {
  const [messages, setMessages] = useState<MessageProps[]>([
    { text: 'Hello', user: 'John' },
    { text: 'Hi', user: 'Jane' },
    { text: 'How are you?', user: 'John' },
  ]);

  return (
    <div className='flex  size-full flex-col items-center'>
      <ChatTitle />
      <MessageContainer />
      <MessageInput />
    </div>
  );
}
