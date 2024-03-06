import { useState } from "react";
import "./App.css";
import Folder from "./components/Folder";
import datas from "./data/folderData";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [data, setData] = useState(datas);

  const { createNode } = useTraverseTree();

  const handleTreeStructure = (treeId, item, isFolder) => {
    const updatedData = createNode(data, treeId, item, isFolder);
    setData(updatedData);
  };

  return (
    <>
      <Folder handleTreeStructure={handleTreeStructure} folderData={data} />
    </>
  );
}

export default App;
