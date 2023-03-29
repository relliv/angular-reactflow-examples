import React from "react";
import { NodeToolbar, useStore } from "reactflow";

const selectedNodesSelector = (state: any) =>
  Array.from(state.nodeInternals.values())
    .filter((node: any) => node.selected)
    .map((node: any) => node.id);

export default function MultiSelectionToolbar() {
  const selectedNodeIds = useStore(selectedNodesSelector);
  const isVisible = selectedNodeIds.length > 1;

  return (
    <NodeToolbar nodeId={selectedNodeIds} isVisible={isVisible}>
      <button>multi selection toolbar</button>
    </NodeToolbar>
  );
}
