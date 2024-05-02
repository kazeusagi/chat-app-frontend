import { FaUserCircle } from 'react-icons/fa';

export type MessageProps = {
  text: string;
  user: string;
};

export function Message({ text, user }: MessageProps) {
  return (
    <div>
      <div className='flex items-center'>
        <FaUserCircle />
        <p className='p-2'>{user}</p>
      </div>
      {/* preタグはfontが勝手に変わってしまうのでpreタグと同じような振る舞いをするdivを配置 */}
      <div className='whitespace-pre-wrap break-words'>{text}</div>
    </div>
  );
}
