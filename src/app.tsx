import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
} from 'reactflow';

import 'reactflow/dist/style.css';

import CurricularNode from './curricular-node';
import SemesterNode from './semester-node';

import { processData } from './utils/process-data';

const nodeTypes = {
  curricular: CurricularNode,
  semester: SemesterNode,
};

const [initialNodes, initialEdges] = processData();

export default function App() {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
