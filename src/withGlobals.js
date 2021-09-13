/* eslint-env browser */
import { useEffect, useGlobals } from '@storybook/addons';

export const withGlobals = (StoryFn, context) => {
  const [{ darkMode }] = useGlobals();
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    if ({ darkMode, isInDocs }.darkMode) {
      document.body.classList.add("m-dark");
    } else {
      document.body.classList.remove("m-dark");
    }
  }, [darkMode]);

  return StoryFn();
};



