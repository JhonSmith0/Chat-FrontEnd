import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import { backgroundCl1 } from "../style/colors";
import { paddingBlock1, paddingInline1 } from "../style/spaccing";
import PhotoWithStatus from "./PhotoWithStatus";

const SSideBarHeader = styled.header`
  padding-inline: ${paddingInline1};
  padding-block: ${paddingBlock1};
  background: ${backgroundCl1};

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    justify-content: space-between;

    .icon {
      width: 2.6rem;
      height: 2.6rem;
      color: white;
      transform: rotate(180deg);
    }
  }
`;

export default function SideBarHeader() {
  return (
    <SSideBarHeader>
      <nav>
        <ul>
          <li>
            <button>
              <HiOutlineLogout className="icon" />
            </button>
          </li>
          <li>
            <button>
              <PhotoWithStatus
                src="https://s2.glbimg.com/PDOdBzFysIgAwWOLnmk5san5-9M=/0x0:2000x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/j/C/i4AoaQRxSKmo3a33cB3Q/1.jpg"
                status="offline"
              />
            </button>
          </li>
          <li>
            <button>
              <HiOutlineEllipsisVertical className="icon" />
            </button>
          </li>
        </ul>
      </nav>
    </SSideBarHeader>
  );
}
