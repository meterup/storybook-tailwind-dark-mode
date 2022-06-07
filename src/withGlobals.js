/* eslint-env browser */
import { useEffect, useGlobals } from '@storybook/addons';

export const withGlobals = (StoryFn, context) => {
  const [{ darkMode }] = useGlobals();
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    if ({ darkMode, isInDocs }.darkMode) {
      document.documentElement.classList.add("m-dark");
    } else {
      document.documentElement.classList.remove("m-dark");
    }
  }, [darkMode]);

  return StoryFn();
};



