import React, { useContext } from "react";
import { ExampleContext } from "../library/provider";

export default { title: "docs" };
const ChildComponent = () => {
  const value = useContext(ExampleContext);

  return <div>Value in child component: {value}</div>;
};
export const ComponentExample = () => {
  const value = useContext(ExampleContext);

  return (
    <div>
      Value in example: {value}
      <ChildComponent />
    </div>
  );
};
