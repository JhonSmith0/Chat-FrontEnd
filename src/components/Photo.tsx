import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface PhotoProps {
  attrs?: HTMLAttributes<any>;
  src: string;
}

export const SPhoto = styled.div<{ src: string }>`
  display: block;
  border-radius: 50%;
  aspect-ratio: 1;

  position: relative;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  width: 4rem;
  height: 4rem;

  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
`;

export default function Photo(props: PhotoProps) {
  return <SPhoto {...props.attrs} src={props.src} />;
}
