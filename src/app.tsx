import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
} from 'reactflow';

import 'reactflow/dist/style.css';

import CurricularNode from '@/curricular-node';
import { processData } from '@/lib/process-data';
import SemesterNode from '@/semester-node';

const nodeTypes = {
  curricular: CurricularNode,
  semester: SemesterNode,
};

const [initialNodes, initialEdges] = processData();

export default function App() {
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div className="h-dvh w-dvw">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Controls />

        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
