import { useEffect, useRef, useState } from 'react';

export function MessageInput() {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

      // textareaの高さを自動調整
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px'; // 実際のスクロール高さを設定
    }
  }, [value]);

  return (
    <div className='w-full max-w-2xl pb-2'>
      <textarea
        className='block w-full resize-none overflow-hidden rounded-2xl border border-gray-500 bg-[#1b1b1f] px-2 py-1'
        onChange={handleChange}
        ref={textareaRef}
      />
    </div>
  );

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }
}
