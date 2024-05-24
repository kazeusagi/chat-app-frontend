import { useAtomValue } from 'jotai';

import { selectedChatAtom } from '@/atom';

export type ChatTitleProps = {};

export function ChatTitle({}: ChatTitleProps) {
  const selectedChat = useAtomValue(selectedChatAtom);

  return (
    <div className='w-full bg-gray-700 p-2'>
      <div>
        {selectedChat?.id} {selectedChat?.name}
      </div>
    </div>
  );
}
