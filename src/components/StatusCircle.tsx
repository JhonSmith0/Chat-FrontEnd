import styled from "styled-components";
import { IChatItem } from "../interface";
import { cl2, cl6, cl7 } from "../style/colors";

interface StatusCircleProps {
  className?: string;
  status: IChatItem["status"];
}

const SStatusCircle = styled.div`
  background: #6fce82;

  border-radius: 50%;
  width: 1.5rem;
  aspect-ratio: 1;
  border: solid 2px ${cl2};

  &.offline {
    background: ${cl6};
    border-color: ${cl7};
  }
`;

export default function StatusCircle(props: StatusCircleProps) {
  return <SStatusCircle className={props.className + " " + props.status} />;
}
