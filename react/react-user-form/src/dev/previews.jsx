import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import ReactMemoParent from "../Pages/ReactMemo/ReactMemoParent.jsx";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/UseReducer">
        <UseReducer />
      </ComponentPreview>
      <ComponentPreview path="/ReactMemo">
        <ReactMemoParent />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
