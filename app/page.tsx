'use client';

import { useChat } from 'ai/react';

export default function Home() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit
  } = useChat();

  return (
    <main className="p-4 max-w-2xl mx-auto min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Legal Assistant</h1>

      <div className="space-y-4 mb-4">
        {messages.map((m) => (
          <div key={m.id} className={`p-2 rounded ${m.role === 'user' ? 'bg-blue-500' : 'bg-gray-700'}`}>
            <strong>{m.role === 'user' ? 'You' : 'AI'}:</strong> {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="flex-1 p-2 rounded bg-gray-800 text-white border border-gray-700"
          value={input}
          placeholder="Ask a legal question..."
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
          Send
        </button>
      </form>
    </main>
  );
}
