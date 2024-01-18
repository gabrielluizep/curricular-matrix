import { Edge, MarkerType, Node } from 'reactflow';
import colors from 'tailwindcss/colors';

import { curriculum, finished } from '@/assets/eng';

interface Finished {
  [key: string]: boolean;
}

export function processData(): [Node[], Edge[]] {
  const userFinished: Finished = finished;

  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const semesters = new Set<number>();

  for (let i = 0; i < curriculum.length; i++) {
    semesters.add(curriculum[i].semester);
  }

  const finishedSemesters = new Set<number>();
  for (const semester of semesters) {
    const components = curriculum.filter(node => node.semester === semester);

    const ids = [];
    for (let i = 0; i < components.length; i++) {
      ids.push(components[i].id);
    }

    if (!components) {
      continue;
    }

    let finished = true;
    for (const id of ids) {
      if (!userFinished[id]) {
        finished = false;
      }
    }

    if (finished) {
      finishedSemesters.add(semester);
    }
  }

  for (const semester of semesters) {
    nodes.push({
      id: `SEM${semester}`,
      type: 'semester',
      data: {
        name: `Semester ${semester}`,
        code: `SEM${semester}`,
        color: colors.green[200],
      },

      position: { x: 0, y: semester * 200 },
    } as Node);
  }

  let lastSemester = 0;
  let xpos = 0;
  // const semestersPlotted = new Set<number>();
  for (let i = 0; i < curriculum.length; i++) {
    const node = curriculum[i];

    if (node.semester > lastSemester) {
      lastSemester = node.semester;
      xpos = 0;
    }

    let color: string;
    // switch (node.group) {
    //   case 'base':
    //     color = colors.orange[500];
    //     break;
    //   case 'electronics':
    //     color = colors.orange[300];
    //     break;
    //   case 'programming':
    //     color = colors.green[500];
    //     break;
    //   case 'networks':
    //     color = colors.green[300];
    //     break;
    //   case 'communications':
    //     color = colors.purple[500];
    //     break;
    //   case 'signals':
    //     color = colors.blue[500];
    //     break;
    //   case 'extra':
    //     color = colors.gray[300];
    //     break;
    //   default:
    //     color = colors.black;
    // }

    if (userFinished[node.id]) {
      color = colors.green[200];
    } else {
      color = colors.red[200];
    }

    let allPrereqsFinished = true;
    for (let j = 0; j < node.prerequisites.length; j++) {
      if (!userFinished[node.prerequisites[j]]) {
        allPrereqsFinished = false;
      }

      edges.push({
        markerEnd: {
          type: MarkerType.ArrowClosed,
          strokeWidth: 1,
          color: colors.black,
        },
        style: {
          strokeWidth: 2,
          strokeOpacity: 1,
          stroke: colors.black,
        },
        zIndex: 10,
        id: `${node.id}-${node.prerequisites[j]}`,
        source: node.prerequisites[j],
        target: node.id,
      } as Edge);
    }

    if (allPrereqsFinished && !userFinished[node.id]) {
      color = colors.yellow[200];
    }

    // if (!finishedSemesters.has(node.semester)) {
    nodes.push({
      id: node.id,
      type: 'curricular',
      data: { name: node.name, code: node.id, color },
      position: { x: xpos + 50, y: 16 },
      zIndex: 20,
      parentNode: `SEM${node.semester}`,
      extent: 'parent',
    } as Node);
    xpos += 150;
    // } else if (!semestersPlotted.has(node.semester)) {
    //   nodes.push({
    //     id: `SEM${node.semester}`,
    //     type: 'semester',
    //     data: {
    //       name: `Semester ${node.semester}`,
    //       code: `SEM${node.semester}`,
    //       color: colors.green[200],
    //     },
    //     position: { x: 0, y: node.semester * 200 },
    //   } as Node);
    //   semestersPlotted.add(node.semester);
    // }
  }

  return [nodes, edges];
}
