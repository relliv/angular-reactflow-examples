import React, { memo } from "react";
import { Handle, useReactFlow, useStoreApi } from "reactflow";
import { MarkerType, Position } from "reactflow";

const options = [
  {
    value: "smoothstep",
    label: "Smoothstep",
  },
  {
    value: "step",
    label: "Step",
  },
  {
    value: "default",
    label: "Bezier (default)",
  },
  {
    value: "straight",
    label: "Straight",
  },
];

function Select({ value, handleId, nodeId }: any) {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  const onChange = (evt: any) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            selects: {
              ...node.data.selects,
              [handleId]: evt.target.value,
            },
          };
        }

        return node;
      })
    );
  };

  const position: Position = handleId === "a" ? Position.Left : Position.Right;

  return (
    <div className="custom-node__select">
      <div>Edge Type</div>
      <select className="nodrag" onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <Handle type="source" position={position} id={handleId} />
    </div>
  );
}

function CustomNode({ id, data }: any) {
  return (
    <>
      <div className="custom-node__header">
        This is a custom node for <strong>PeerBie</strong>
      </div>

      <div className="custom-node__body">
        {Object.keys(data.selects).map((handleId) => (
          <Select
            key={handleId}
            nodeId={id}
            value={data.selects[handleId]}
            handleId={handleId}
          />
        ))}
      </div>
    </>
  );
}

export const nodes: any = [
  {
    id: "1",
    type: "input",
    data: {
      label: "Input Node",
    },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",
    data: {
      label: "Default Node",
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    type: "output",
    data: {
      label: "Output Node",
    },
    position: { x: 400, y: 100 },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 100, y: 200 },
    data: {
      selects: {
        "handle-0": "smoothstep",
        "handle-1": "smoothstep",
      },
    },
  },
  {
    id: "5",
    type: "output",
    data: {
      label: "custom style",
    },
    className: "circle",
    style: {
      background: "#2B6CB0",
      color: "white",
    },
    position: { x: 400, y: 200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "6",
    type: "output",
    style: {
      background: "#63B3ED",
      color: "white",
      width: 100,
    },
    data: {
      label: "Node",
    },
    position: { x: 400, y: 325 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "7",
    type: "default",
    className: "annotation",
    data: {
      label: (
        <>
          On the bottom left you see the <strong>Controls</strong> and the
          bottom right the <strong>MiniMap</strong>. This is also just a node 🥳
        </>
      ),
    },
    draggable: false,
    selectable: false,
    position: { x: 150, y: 400 },
  },
];

export const edges = [
  { id: "e1-2", source: "1", target: "2", label: "this is an edge label" },
  { id: "e1-3", source: "1", target: "3", animated: true },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    type: "smoothstep",
    sourceHandle: "handle-0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e4-6",
    source: "4",
    target: "6",
    type: "smoothstep",
    sourceHandle: "handle-1",
    data: {
      selectIndex: 1,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

export default memo(CustomNode);
