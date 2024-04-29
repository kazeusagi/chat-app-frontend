export type MessageProps = {
  text: string;
  user: string;
};

export function Message({ text, user }: MessageProps) {
  return (
    <div>
      <p>{user}</p>
      <p>{text}</p>
    </div>
  );
}
