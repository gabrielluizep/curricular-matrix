import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
} from 'reactflow';

import 'reactflow/dist/style.css';

import { finished } from '@/assets/eng';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import CurricularNode from '@/curricular-node';
import { processData } from '@/lib/process-data';
import SemesterNode from '@/semester-node';

import { Checkbox } from '@/components/ui/checkbox';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const nodeTypes = {
  curricular: CurricularNode,
  semester: SemesterNode,
};

const [initialNodes, initialEdges] = processData();

export default function App() {
  const [subjectFinished, setSubjectFinished] = useState(finished);

  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div className="h-dvh w-dvw">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="absolute z-50">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle>Finished Subjects</SheetTitle>
          <ScrollArea className="h-96 w-[350px] rounded-md border p-4">
            {Object.keys(subjectFinished).map(subject => (
              <div className="flex gap-2 items-center">
                <Checkbox checked={subjectFinished[subject]} />
                <span>{subject}</span>
              </div>
            ))}
          </ScrollArea>
        </SheetContent>
      </Sheet>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Controls />

        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
