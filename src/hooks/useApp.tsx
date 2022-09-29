import { useState } from "react";

export default function useApp() {
  const [flyoutActive, setFlyoutActive] = useState(false);

  const openFlyout = () => {
    document.body.style.overflowY = "hidden";
    setFlyoutActive(true);
  };

  const closeFlyout = () => {
    document.body.style.overflowY = "auto";
    setFlyoutActive(false);
  };

  return { flyoutActive, openFlyout, closeFlyout };
}
