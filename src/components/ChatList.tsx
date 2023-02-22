import { useHookstate } from "@hookstate/core";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { IChatItem } from "../interface";
import chatListState from "../state/chatListState";
import ChatItem from "./ChatItem";

chatListState.merge([genChat(), genChat(), genChat(), genChat(), genChat()]);

function genChat() {
  return {
    id: nanoid(),
    name: "Marcos Alves",
    photo:
      "https://muramasa.com.br/wp-content/uploads/2022/11/blue-lock-ep-8-imagem-1.webp",
    status: "online",
  } as IChatItem;
}

const SChatList = styled.div`
  overflow-y: auto;
`;

export default function ChatList() {
  const chats = useHookstate(chatListState);

  return (
    <SChatList>
      {chats.map((elm, i) => (
        <ChatItem state={elm} key={elm.id.value} />
      ))}
    </SChatList>
  );
}
