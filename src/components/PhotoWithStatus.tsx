import styled from "styled-components";
import { IChatItem } from "../interface";
import { PhotoProps, SPhoto } from "./Photo";
import StatusCircle from "./StatusCircle";

interface PhotoWithStatusProps extends PhotoProps {
  status: IChatItem["status"];
}

export const SPhotoWithStatus = styled(SPhoto)`
  .status-circle {
    position: absolute;
    bottom: -2px;
    right: -2px;
  }
`;

export default function PhotoWithStatus(props: PhotoWithStatusProps) {
  return (
    <SPhotoWithStatus src={props.src}>
      <StatusCircle className="status-circle" status={props.status} />
    </SPhotoWithStatus>
  );
}
