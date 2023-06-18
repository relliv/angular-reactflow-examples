import React, { useState, useEffect, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Position,
  Background,
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
        dragHandle: ".header",
      },
      {
        id: "2",
        type: "selectorNode",
        data: { onChange: onChange, color: initBgColor },
        position: { x: 300, y: 50 },
        dragHandle: ".header",
      },
      {
        id: "3",
        type: "selectorNode",
        data: { label: "Output A" },
        position: { x: 650, y: 0 },
        targetPosition: Position.Left,
        dragHandle: ".header",
      },
      {
        id: "4",
        type: "selectorNode",
        data: { label: "Output B" },
        position: { x: 650, y: 350 },
        targetPosition: Position.Left,
        dragHandle: ".header",
      },
    ]);

    setEdges([
      {
        id: "e1-2",
        type: "step",
        source: "1",
        target: "2",
        animated: false,
        markerEnd: "logo",
        style: { stroke: "#000" },
      },
      {
        id: "e2a-3",
        type: "step",
        source: "2",
        target: "3",
        sourceHandle: "1",
        animated: false,
        markerEnd: "oneOnlyOne",
        style: { stroke: "#000" },
      },
      {
        id: "e2b-4",
        type: "step",
        source: "2",
        target: "4",
        sourceHandle: "2",
        animated: false,
        markerEnd: "oneOrMany",
        style: { stroke: "#000" },
      },
    ]);
  }, []);

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "step",
            animated: false,
            style: { strokeWidth: 1, stroke: "#fff" },
          },
          eds
        )
      ),
    []
  );
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        fill="transparent"
        stroke="black"
        stroke-width="4"
        width="24"
        height="24"
        viewBox="0 0 100 100"
      >
        <marker
          id="oneOnlyOne"
          viewBox="0 0 100 100"
          markerHeight={20}
          markerWidth={20}
          refX={80}
          refY={50}
        >
          <path d="M0 50 L100 50 M25 25 L 25 75 M75 25 L75 75" />
        </marker>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        fill="transparent"
        stroke="black"
        stroke-width="4"
        width="24"
        height="24"
        viewBox="0 0 100 100"
      >
        <marker
          id="oneOrMany"
          viewBox="0 0 100 100"
          markerHeight={20}
          markerWidth={20}
          refX={80}
          refY={50}
        >
          <path d="M100 50 L0 50 M50 50 L 100 25 M50 50 L100 75 M25 25 L25 75" />
        </marker>
      </svg>

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
        <MiniMap
          style={{
            height: 120,
          }}
          zoomable
          pannable
        />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </>
  );
};

export default CustomNodeFlow;
