import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
} from "reactflow";
import React from "react";

const rfStyle = {
  backgroundColor: "orange",
};

function Flow(props: any) {
  const [nodes, setNodes] = useState(props.nodes);
  const [edges, setEdges] = useState(props.edges);

  const onNodesChange = useCallback(
    (changes: any) => {
      setNodes((nds: any) => applyNodeChanges(changes, nds));
    },
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection: any) => {
      setEdges((eds: any) => addEdge(connection, eds));

      const _event = { event, connection };

      props.onNodeConnected(_event);
      console.log("[REACT] onNodeConnected", _event);
    },
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      style={rfStyle}
      attributionPosition="top-right"
    >
      <Background />
    </ReactFlow>
  );
}

export default Flow;
