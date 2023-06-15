import React, { useState, useEffect, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Position,
} from "reactflow";
import ColorSelectorNode from "./ColorSelectorNode";
const initBgColor = "#1A192B";

const connectionLineStyle = { stroke: "#000" };
const nodeTypes = {
  selectorNode: ColorSelectorNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const onChange = (event: any) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id !== "2") {
            return node;
          }

          const color = event.target.value;

          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        })
      );
    };

    setNodes([
      {
        id: "1",
        type: "selectorNode",
        data: { label: "An input node" },
        position: { x: -50, y: -100 },
        sourcePosition: Position.Right,
      },
      {
        id: "2",
        type: "selectorNode",
        data: { onChange: onChange, color: initBgColor },
        position: { x: 300, y: 50 },
      },
      {
        id: "3",
        type: "selectorNode",
        data: { label: "Output A" },
        position: { x: 650, y: 0 },
        targetPosition: Position.Left,
      },
      {
        id: "4",
        type: "selectorNode",
        data: { label: "Output B" },
        position: { x: 650, y: 350 },
        targetPosition: Position.Left,
      },
    ]);

    setEdges([
      {
        id: "e1-2",
        source: "1",
        target: "2",
        animated: true,
        style: { stroke: "#000" },
      },
      {
        id: "e2a-3",
        source: "2",
        target: "3",
        sourceHandle: "1",
        animated: true,
        style: { stroke: "#000" },
      },
      {
        id: "e2b-4",
        source: "2",
        target: "4",
        sourceHandle: "2",
        animated: true,
        style: { stroke: "#000" },
      },
    ]);
  }, []);

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={[15, 15]}
      defaultViewport={defaultViewport}
      fitView
      attributionPosition="bottom-left"
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};

export default CustomNodeFlow;