// import { messagesAtom } from '@/atom';
import { useAtomValue } from 'jotai';

import { Message } from './Message';
import { selectedChatAtom } from '@/atom';

type MessageContainerProps = {};

export function MessageContainer({}: MessageContainerProps) {
  // const messages = useAtomValue(messagesAtom);

  const selectedChat = useAtomValue(selectedChatAtom);

  return (
    <div className='flex size-full justify-center overflow-y-scroll'>
      <div className='w-full max-w-screen-sm p-2'>
        {selectedChat?.messages?.map((message, index) => <Message key={index} message={message} />)}
      </div>
    </div>
  );
}
