import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const transition = function (nextMode, replace = false) {
    setMode(nextMode);
    if (!replace) {
      setHistory((prev) => [...prev, nextMode]);
    }
    console.log(history);
  };
  const back = function () {
    if (history.length <= 1) {
      return;
    }
    history.pop();
    setMode(history[history.length - 1]);
  };
  return { mode, transition, back };
}
