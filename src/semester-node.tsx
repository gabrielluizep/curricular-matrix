import { memo } from 'react';

interface SemesterNodeProps {
  data: {
    code: string;
    name: string;
  };
}

function SemesterNode({ data }: SemesterNodeProps) {
  return (
    <div className="w-[1050px] h-24 grid  shadow-md rounded-md border-2 bg-gray-300 border-stone-400">
      <div className="w-full h-full absolute">
        <div className="text-2xl font-bold relative top-1/2 -translate-y-1/2 -left-48 mx-auto">
          {data.name}
        </div>
      </div>
    </div>
  );
}

export default memo(SemesterNode);
