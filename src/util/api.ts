import { Chat } from '@/types';

// チャット一覧取得
export async function getChats(userId: number) {
  const result = await fetchApi('GET', `chat/${userId}`);
  if (result == undefined) return undefined;

  const json = await result.json();
  const chats: Chat[] = json;
  return chats;
}

// 対象のチャットの詳細を取得
export async function getChat(userId: number, chatId: number) {
  const result = await fetchApi('GET', `chat/${userId}/${chatId}`);
  if (result == undefined) return undefined;

  const json = await result.json();
  const chat: Chat = json;
  console.log(chat);
  return chat;
}

// モデルに問い合わせを行う
export async function postAsk(postData: {
  requestMessage: string;
  systemMessage?: string;
  chatId?: number;
}) {
  const result = await fetchApi('POST', 'ask', postData);
  if (result == undefined) return undefined;

  const json = await result.json();
  return json;
}

// 引数をの情報をもとにfetchを行う
async function fetchApi(method: string, endPoint: string, postData?: any) {
  try {
    const response = await fetch(`http://localhost:3333/${endPoint}`, {
      method,
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(postData),
    });

    if (!response.ok) throw new Error(response.statusText);

    return response;
  } catch (error) {
    throw error;
  }
}
