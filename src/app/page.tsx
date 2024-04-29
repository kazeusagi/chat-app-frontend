import { Chat } from '@/components/Chat';
import { Table } from '@/components/PixelArt/Table';
import { ChatHistorySideBar } from '@/components/SideBar';

export default function Home() {
  return (
    <main className='flex h-screen w-full'>
      <ChatHistorySideBar />
      <Chat />
    </main>
  );
}
