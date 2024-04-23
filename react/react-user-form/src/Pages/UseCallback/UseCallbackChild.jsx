import React from "react";

const UseCallbackChild = () => {
  console.log("Child Rendered");

  return <></>;
};
export const ReactUseCallbackChild = React.memo(UseCallbackChild);
