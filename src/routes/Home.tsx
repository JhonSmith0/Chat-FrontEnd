import styled from "styled-components";
import SideBar, { SSideBar } from "../components/SideBar";

const SHomePage = styled.div`
  display: flex;
  height: 100%;

  ${SSideBar} {
    flex: 0.33;
  }
`;

export default function HomePage() {
  return (
    <SHomePage>
      <SideBar />
    </SHomePage>
  );
}
