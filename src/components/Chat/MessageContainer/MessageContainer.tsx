import { useAtomValue } from 'jotai';

import { messagesAtom } from '@/atom';

import { Message } from './Message';

type MessageContainerProps = {};

export function MessageContainer({}: MessageContainerProps) {
  const messages = useAtomValue(messagesAtom);

  return (
    <div className='flex size-full justify-center overflow-y-scroll'>
      <div className='w-full max-w-screen-sm p-2'>
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </div>
    </div>
  );
}
