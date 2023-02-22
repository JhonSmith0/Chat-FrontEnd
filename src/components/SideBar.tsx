import styled from "styled-components";
import { backgroundCl2, cl5 } from "../style/colors";
import ChatList from "./ChatList";
import SideBarHeader from "./Header";

export const SSideBar = styled.div`
  background: ${backgroundCl2};
  height: 100%;

  display: grid;
  grid-template-rows: auto 1fr;
  border-right: solid 1px ${cl5};
`;

export default function SideBar() {
  return (
    <SSideBar>
      <SideBarHeader />
      <ChatList />
    </SSideBar>
  );
}
