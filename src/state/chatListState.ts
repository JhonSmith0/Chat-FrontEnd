import { hookstate } from "@hookstate/core";
import { IChatItem } from "../interface";

const chatListState = hookstate<IChatItem[]>([]);
export default chatListState;
