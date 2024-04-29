import { useState } from 'react';

import { Message, MessageProps } from './Message';

type MessageContainerProps = {};

export function MessageContainer({}: MessageContainerProps) {
  const [messages, setMessages] = useState<MessageProps[]>([
    { text: 'Hello', user: 'John' },
    { text: 'Hi', user: 'Jane' },
    { text: 'How are you?', user: 'John' },
  ]);

  return (
    <div className='h-full'>
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
}
