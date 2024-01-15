import { memo } from 'react';
import { Handle, Position } from 'reactflow';

interface CurricularNodeProps {
  data: {
    code: string;
    color: string;
  };
}

function CurricularNode({ data }: CurricularNodeProps) {
  return (
    <div
      className="w-16 h-16 grid shadow-md rounded-full border-2 border-stone-400"
      style={{ backgroundColor: data.color }}
    >
      <div className="text-lg font-bold place-self-center">{data.code}</div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-1 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-1 !bg-teal-500"
      />
    </div>
  );
}

export default memo(CurricularNode);
