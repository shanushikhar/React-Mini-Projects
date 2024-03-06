const useTraverseTree = () => {
  function createNode(tree, treeId, itemname, isFolder) {
    if (tree.id === treeId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: itemname,
        isFolder,
        items: [],
      });
      return tree;
    }

    let nestedItemsData = [];
    nestedItemsData = tree.items.map((obj) =>
      createNode(obj, treeId, itemname, isFolder)
    );
    return {
      ...tree,
      items: nestedItemsData,
    };
  }

  return { createNode };
};

export default useTraverseTree;
