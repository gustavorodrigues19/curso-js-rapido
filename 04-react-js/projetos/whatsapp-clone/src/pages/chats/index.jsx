import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useAuthContext } from "../../context/auth";

export default function ChatsPage() {
  const { user } = useAuthContext();

  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);

  const sendMessage = async (chatId, senderId, text) => {
    const messagesRef = collection(db, "chats", chatId, "messages");

    try {
      await addDoc(messagesRef, {
        text: text,
        senderId: senderId,
        createdAt: Timestamp.now(),
      });
    } catch (e) {
      console.error("Erro ao adicionar", e);
    }
  };

  const isMessageOwnedByUser = (message) => {
    return message.senderId === user.uid;
  };

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, "chats"),
        where("participants", "array-contains", user.uid)
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const dbMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setChats(dbMessages);
      });

      return () => unsubscribe();
    }
  }, [user]);

  useEffect(() => {
    if (selectedChat) {
      const q = query(
        collection(db, "chats", selectedChat.id, "messages"),
        orderBy("createdAt", "asc")
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const dbMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(dbMessages);
      });

      return () => unsubscribe();
    }
  }, [selectedChat]);

  return (
    <main className="flex">
      <aside className="w-1/4 p-4 border-r border-gray-300 h-screen">
        <h1 className="text-xl font-bold pb-3">Chats</h1>
        <ul className="flex flex-col gap-2">
          {chats.map((chat) => (
            <li
              key={chat.id}
              className="flex items-center gap-2 p-2 cursor-pointer rounded-sm hover:bg-gray-50 border-b border-gray-50"
              onClick={() => setSelectedChat(chat)}
            >
              <div className="h-8 w-8 bg-gray-200 rounded-full" />
              {chat.name}
            </li>
          ))}
        </ul>
      </aside>
      <div className="w-3/4 h-screen">
        {selectedChat ? (
          <>
            <div className="h-[8vh] p-4 flex items-center gap-2 border-b border-gray-300 bg-green-600">
              <div className="h-8 w-8 bg-gray-200 rounded-full" />
              <h2 className="text-md font-bold border-gray-300 text-white">
                {selectedChat.name}
              </h2>
            </div>
            {/* Chat Messages */}
            <div className="bg-gray-100 h-[84vh] overflow-y-auto">
              {messages?.map((message, key) => (
                <div
                  className={`flex flex-col px-1 mt-2 ${
                    isMessageOwnedByUser(message) ? "items-end" : "items-start"
                  }`}
                  key={`chat-message-${key}`}
                >
                  <span
                    className={`${
                      isMessageOwnedByUser(message)
                        ? "bg-green-100"
                        : "bg-white"
                    } p-1 rounded-lg text-md w-fit`}
                  >
                    {message.text}
                    <span className="text-[10px] ml-4">
                      {new Date(message.createdAt?.toDate()).toLocaleString()}
                    </span>
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
                  type="text"
                  name="message"
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
                <button
                  className="h-10 w-10 bg-green-600 text-white rounded-full pointer"
                  onClick={() => {
                    sendMessage(selectedChat.id, user.uid, message);
                    setMessage("");
                  }}
                >
                  {">"}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 ">
            <h1 className="text-2xl font-bold">Selecione um chat</h1>
          </div>
        )}
      </div>
    </main>
  );
}
