import React from "react";

const chats = [
  {
    id: 1,
    name: "Chat 1",
    messages: [
      { id: 1, text: "Mensagem 1", createdAt: "21:33" },
      { id: 2, text: "Mensagem 2", createdAt: "21:34" },
    ],
  },
  {
    id: 2,
    name: "Chat 2",
    messages: [
      { id: 1, text: "Mensagem 1", createdAt: "21:33" },
      { id: 2, text: "Mensagem 2", createdAt: "21:34" },
    ],
  },
  {
    id: 3,
    name: "Chat 3",
    messages: [
      { id: 1, text: "Mensagem 1", createdAt: "21:33" },
      { id: 2, text: "Mensagem 2", createdAt: "21:34" },
    ],
  },
  {
    id: 4,
    name: "Chat 4",
    messages: [
      { id: 1, text: "Mensagem 1", createdAt: "21:33" },
      { id: 2, text: "Mensagem 2", createdAt: "21:34" },
    ],
  },
  {
    id: 5,
    name: "Chat 5",
    messages: [
      { id: 1, text: "Mensagem 1", createdAt: "21:33" },
      { id: 2, text: "Mensagem 2", createdAt: "21:34" },
    ],
  },
];

export default function ChatsPage() {
  return (
    <main className="flex">
      <aside className="w-1/4 p-4 border-r border-gray-300 h-screen">
        <h1 className="text-xl font-bold pb-3">Chats</h1>
        <ul className="flex flex-col gap-2">
          {chats.map((chat) => (
            <li
              key={chat.id}
              className="flex items-center gap-2 p-2 cursor-pointer rounded-sm hover:bg-gray-50 border-b border-gray-50"
            >
              <div className="h-8 w-8 bg-gray-200 rounded-full" />
              {chat.name}
            </li>
          ))}
        </ul>
      </aside>
      <div className="w-3/4 h-screen">
        {/* Header */}
        <div className="h-[8vh] p-4 flex items-center gap-2 border-b border-gray-300 bg-green-600">
          <div className="h-8 w-8 bg-gray-200 rounded-full" />
          <h2 className="text-md font-bold border-gray-300 text-white">
            Chat 1
          </h2>
        </div>
        {/* Chat Messages */}
        <div className="bg-gray-100 h-[84vh] overflow-y-auto">
          {chats[0].messages?.map((message) => (
            <div className="flex flex-col px-1 mt-2" key={message.id}>
              <span className="bg-white p-1 rounded-lg text-md w-fit">
                {message.text}
                <span className="text-[10px] ml-4">{message.createdAt}</span>
              </span>
            </div>
          ))}
        </div>
        {/* Input Message */}
        <div className="h-[8vh] p-4 border-t border-gray-300">
          <div className="flex items-center gap-2">
            <input
              className="h-10 w-full border border-gray-300 rounded-md"
              placeholder="Digite uma mensagem"
            />
            <button className="h-10 w-10 bg-green-600 text-white rounded-full pointer">
              {">"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
