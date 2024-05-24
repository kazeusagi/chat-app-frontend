import { Message as MessageType } from '@/types';
import { FaUserCircle } from 'react-icons/fa';

export type MessageProps = {
  message: MessageType;
};

export function Message({ message }: MessageProps) {
  return (
    <div>
      <div className='flex items-center'>
        <FaUserCircle />
        <p className='p-2'>{message.roleId}</p>
      </div>
      {/* preタグはfontが勝手に変わってしまうのでpreタグと同じような振る舞いをするdivを配置 */}
      <div className='whitespace-pre-wrap break-words'>{message.content}</div>
    </div>
  );
}
