import React, { useCallback } from 'react';
import ReactFlow, { Background, Controls, MiniMap, useEdgesState, useNodesState, addEdge } from 'reactflow';
import CustomNode from "./CustomNode";
import { nodes as initialNodes, edges as initialEdges } from './CustomNode';

const ReactFlowFeatureOverview: React.FC<any> = ({}) => {
   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);

  const nodeTypes = {
  custom: CustomNode,
};

const minimapStyle = {
  height: 120,
  };

  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes?.find((node: any) => node.type === 'custom')?.data.selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  const onInit = (reactFlowInstance: any) => console.log('flow loaded:', reactFlowInstance);

  return (
    <React.StrictMode>
      <div style={{ height: '100%' }}>
      <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
    >
      <MiniMap style={minimapStyle} zoomable pannable />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
      </div>
    </React.StrictMode>
  );
};

export default ReactFlowFeatureOverview;
