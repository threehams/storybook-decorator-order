import React from "react";
import { addDecorator } from "@storybook/react";
import { ExampleContext } from "../library/provider";

const StoryDecorator = storyFn => {
  return (
    <ExampleContext.Provider value="From Decorator">
      {storyFn()}
    </ExampleContext.Provider>
  );
};
addDecorator(StoryDecorator);
