import React from "react";
import { memo } from "react";
import { Handle, Position, NodeToolbar } from "reactflow";

const CustomNode = ({ data }: any) => {
  console.log("CustomNode", data);
  return (
    <>
      <NodeToolbar
        isVisible={data.toolbarVisible}
        position={data.toolbarPosition}
      >
        <button onClick={() => data.onTooltipClicked("tooltip")}>
          tooltip
        </button>
        <button onClick={() => data.onTooltipClicked("copy")}>copy</button>
        <button onClick={() => data.onTooltipClicked("expand")}>expand</button>
      </NodeToolbar>
      <div style={{ padding: "10px 20px" }}>{data.label}</div>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <Handle type="source" position={Position.Bottom}>
        <div style={{ background: "#555" }}>+</div>
      </Handle>
    </>
  );
};

export default memo(CustomNode);
