import React from "react";
import { styled } from "@storybook/theming";
import { Button } from "@storybook/components";
export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/code/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent = ({ args }) => (

  <div>
    {JSON.stringify(args)}
  </div>
);
