import { Message, MessageProps } from './Message';

type MessageContainerProps = {
  messages: MessageProps[];
};

export function MessageContainer({ messages }: MessageContainerProps) {
  return (
    <div className='h-full'>
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
}
