import { Chat } from '@/components/Chat';
import { ChatHistorySideBar } from '@/components/SideBar';

export default async function Home() {
  return (
    <main className='flex h-screen w-full'>
      <ChatHistorySideBar />
      <Chat />
    </main>
  );
}
