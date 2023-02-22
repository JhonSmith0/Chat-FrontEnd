import { State } from "@hookstate/core";
import styled from "styled-components";
import { IChatItem } from "../interface";
import { backgroundCl2, cl4 } from "../style/colors";
import { paddingInline1 } from "../style/spaccing";
import PhotoWithStatus from "./PhotoWithStatus";

interface ChatItemProps {
  state: State<IChatItem>;
}

const SChatItem = styled.div`
  height: 6rem;

  padding: 1rem ${paddingInline1};
  display: flex;
  align-items: center;
  gap: ${paddingInline1};
  color: #a6a8a9;

  border-bottom: solid 1px ${backgroundCl2};
  cursor: pointer;

  &:hover {
    color: white;
    background: ${cl4};
  }

  p {
    font-size: 1.4rem;
  }
`;

export default function ChatItem(props: ChatItemProps) {
  const values = props.state.get();
  return (
    <SChatItem>
      <PhotoWithStatus src={values.photo} status={values.status} />
      <p>{values.name}</p>
    </SChatItem>
  );
}
