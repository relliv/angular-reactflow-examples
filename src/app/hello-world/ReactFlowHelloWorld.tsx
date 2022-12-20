import * as React from "react";
import ReactFlow, { Background, Controls } from 'reactflow';

// export interface DashboardChooserProps {
//   dashboards: IDashboard[];
//   currentDashboardId?: string;
//   onChange: (id: string) => void;
// }

const ReactFlowHelloWorld: React.FC<any> = ({}) => {
    const options: any = {
      edges: [
        { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' },
      ],

      nodes: [
        {
          id: '1',
          data: { label: 'Hello' },
          position: { x: 0, y: 0 },
          type: 'input',
        },
        {
          id: '2',
          data: { label: 'World' },
          position: { x: 100, y: 100 },
        },
      ],
    };

  return (
    <React.StrictMode>
    <div style={{ height: '100%' }}>
      <ReactFlow nodes={options.nodes} edges={options.edges}>
        <Background />
        <Controls />
      </ReactFlow>
      </div>
      </React.StrictMode>
  );
};

export default ReactFlowHelloWorld;
