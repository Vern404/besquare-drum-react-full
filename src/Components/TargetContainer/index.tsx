import React from "react";
import "./target-container.css";
import { keyConfigs, playSound } from "../../Helpers/sounds";
import { useStores } from "../../stores";
import { observer } from "mobx-react-lite";

type TargetContainerProps = {
  onKeyPress: (pressed_key: string) => void;
};

const TargetContainer = ({ onKeyPress }: TargetContainerProps) => {
  const { main_store } = useStores();

  React.useEffect(() => {
    const keydownHandler = (ev: KeyboardEvent) => {
      onKeyPress(ev.key);
      playSound(ev.key).then(() => main_store.setActiveKey(undefined));
    };

    document.addEventListener("keydown", keydownHandler);

    return () => document.removeEventListener("keydown", keydownHandler);
  }, [onKeyPress]);

  return (
    <div id="controls" className="control container">
      {keyConfigs.map((item) => (
        <div
          key={item.id}
          className={`card control ${
            main_store.active_key === item.key ? "playing" : ""
          }`}
        >
          <div className="label container">{item.key.toUpperCase()}</div>
          <div className="key container">{item.id.replace("_", " ")}</div>
        </div>
      ))}
    </div>
  );
};

export default observer(TargetContainer);
