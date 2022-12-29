import { useEffect, useGlobals } from "@storybook/addons";
export const withGlobals = (StoryFn, context) => {
  const [{ myAddon }] = useGlobals(); // Is the addon being used in the docs panel

  const isInDocs = context.viewMode === "docs";
  const { theme } = context.globals;
  useEffect(() => {
    // Execute your side effect here
    // For example, to manipulate the contents of the preview
    const selectorId = isInDocs
      ? `#anchor--${context.id} .docs-story`
      : `#root`;
  }, [myAddon, theme]);
  return StoryFn();
};
