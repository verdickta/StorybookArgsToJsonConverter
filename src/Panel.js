import React from "react";
import { useAddonState, useChannel } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID, EVENTS } from "./constants";
import { PanelContent } from "./components/PanelContent";
import { useArgs } from '@storybook/api';
export const Panel = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [results, setState] = useAddonState(ADDON_ID, {
    danger: [],
    warning: [],
  }); // https://storybook.js.org/docs/react/addons/addons-api#usechannel

  const [args, updateArgs, resetArgs] = useArgs();

  const emit = useChannel({
    [EVENTS.RESULT]: (newResults) => setState(newResults),
  });
  return (
    <AddonPanel {...props}>
      <PanelContent
        args={args}
      />
    </AddonPanel>
  );
};
