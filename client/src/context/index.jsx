import { createContext } from "react";

const GlobalContext = createContext(null);

export default function GlobalState({ childern }) {
  return <GlobalContext.Provider>{childern}</GlobalContext.Provider>;
}
