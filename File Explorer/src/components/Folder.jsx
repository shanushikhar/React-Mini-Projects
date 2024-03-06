import React, { useState } from "react";

function Folder({ handleTreeStructure, folderData }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    isFolder: null,
    visible: false,
  });

  const expandFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      isFolder,
      visible: true,
    });
  };

  const createNewFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      // hooks logic
      handleTreeStructure(folderData.id, e.target.value, showInput.isFolder);

      setShowInput({
        ...showInput,
        visible: false,
      });
    }
  };

  if (folderData.isFolder)
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>🗂️ {folderData.name}</span>
          <div>
            <button onClick={(e) => expandFolder(e, true)}>Folder +</button>
            <button onClick={(e) => expandFolder(e, false)}>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "🗂️" : "📄"}</span>
              <input
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={createNewFolder}
                autoFocus
                className="inputContainer__input"
                type="text"
              />
            </div>
          )}
          {folderData.items.map((exp) => (
            <Folder
              handleTreeStructure={handleTreeStructure}
              folderData={exp}
              key={exp.id}
            />
          ))}
        </div>
      </div>
    );
  else {
    return <span className="file">📄 {folderData.name}</span>;
  }
}

export default Folder;
