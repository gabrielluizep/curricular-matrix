import type { Subject } from '@/types';

export const curriculum: Subject[] = [
  {
    id: 'DES',
    name: 'Desenho Técnico',
    semester: 1,
    prerequisites: [],
    group: 'base',
  },
  {
    id: 'PJI1',
    name: 'Projeto Integrador 1',
    semester: 1,
    prerequisites: [],
    group: 'extra',
  },
  {
    id: 'FSC1',
    name: 'Física 1',
    semester: 1,
    prerequisites: [],
    group: 'base',
  },
  {
    id: 'CAL1',
    name: 'Cálculo 1',
    semester: 1,
    prerequisites: [],
    group: 'base',
  },
  {
    id: 'GAL',
    name: 'Geometria Analítica',
    semester: 1,
    prerequisites: [],
    group: 'base',
  },
  {
    id: 'ELI',
    name: 'Eletricidade e Instrumentação',
    semester: 1,
    prerequisites: [],
    group: 'electronics',
  },
  {
    id: 'LOG',
    name: 'Lógica',
    semester: 1,
    prerequisites: [],
    group: 'programming',
  },

  {
    id: 'FSC2',
    name: 'Física 2',
    semester: 2,
    prerequisites: ['CAL1', 'FSC1'],
    group: 'base',
  },
  {
    id: 'CAL2',
    name: 'Cálculo 2',
    semester: 2,
    prerequisites: ['CAL1'],
    group: 'base',
  },
  {
    id: 'ALG',
    name: 'Álgebra Linear',
    semester: 2,
    prerequisites: ['GAL'],
    group: 'base',
  },
  {
    id: 'CIE1',
    name: 'Circuitos Elétricos 1',
    semester: 2,
    prerequisites: ['CAL1', 'ELI'],
    group: 'electronics',
  },
  {
    id: 'QMC1',
    name: 'Química 1',
    semester: 2,
    prerequisites: [],
    group: 'base',
  },
  {
    id: 'PRG1',
    name: 'Programação 1',
    semester: 2,
    prerequisites: ['LOG'],
    group: 'programming',
  },

  {
    id: 'CIE2',
    name: 'Circuitos Elétricos 2',
    semester: 3,
    prerequisites: ['CIE1', 'CAL2'],
    group: 'electronics',
  },
  {
    id: 'QMC2',
    name: 'Ciência e Tecnologia dos Materiais',
    semester: 3,
    prerequisites: ['QMC1'],
    group: 'base',
  },
  {
    id: 'ELA1',
    name: 'Eletrônica 1',
    semester: 3,
    prerequisites: ['CIE', 'CAL1'],
    group: 'electronics',
  },
  {
    id: 'CIL',
    name: 'Circuitos Lógicos',
    semester: 3,
    prerequisites: ['LOG'],
    group: 'programming',
  },
  {
    id: 'PRG2',
    name: 'Programação 2',
    semester: 3,
    prerequisites: ['PRG1'],
    group: 'programming',
  },
  {
    id: 'CAL3',
    name: 'Cálculo 3',
    semester: 3,
    prerequisites: ['CAL2', 'GEA'],
    group: 'base',
  },

  {
    id: 'MEC',
    name: 'Mecânica dos Sólidos',
    semester: 4,
    prerequisites: ['FSC1', 'CAL2'],
    group: 'base',
  },
  {
    id: 'CAL4',
    name: 'Cálculo 4',
    semester: 4,
    prerequisites: ['CAL2'],
    group: 'base',
  },
  {
    id: 'ELA2',
    name: 'Eletrônica 2',
    semester: 4,
    prerequisites: ['ELA1', 'CAL2'],
    group: 'electronics',
  },
  {
    id: 'MIC',
    name: 'Microprocessadores',
    semester: 4,
    prerequisites: ['CIL'],
    group: 'programming',
  },
  {
    id: 'RED1',
    name: 'Redes 1',
    semester: 4,
    prerequisites: ['CIL'],
    group: 'programming',
  },
  {
    id: 'POO',
    name: 'Programação Orientada a Objeto',
    semester: 4,
    prerequisites: ['PRG2'],
    group: 'programming',
  },

  {
    id: 'MPQ',
    name: 'Metodologia de Pesquisa',
    semester: 5,
    prerequisites: [],
    group: 'base',
  },
  {
    id: 'SIS1',
    name: 'Sinais e Sistemas 1',
    semester: 5,
    prerequisites: ['CAL4', 'ALG', 'CIE2'],
    group: 'signals',
  },
  {
    id: 'SOP',
    name: 'Sistemas Operacionais',
    semester: 5,
    prerequisites: ['PRG2', 'MIC'],
    group: 'programming',
  },
  {
    id: 'FSC3',
    name: 'Física 3',
    semester: 5,
    prerequisites: ['FSC1', 'CAL3'],
    group: 'base',
  },
  {
    id: 'RED2',
    name: 'Redes 2',
    semester: 5,
    prerequisites: ['RED1'],
    group: 'networks',
  },
  {
    id: 'EST',
    name: 'Estatística e Probabilidade',
    semester: 5,
    prerequisites: ['CAL1'],
    group: 'base',
  },

  {
    id: 'PJI2',
    name: 'Projeto Integrador 2',
    semester: 6,
    prerequisites: ['PJI1', 'RED2', 'MIC', 'STD'],
    group: 'extra',
  },
  {
    id: 'STD',
    name: 'Sistemas Distribuídos',
    semester: 6,
    prerequisites: ['RED1', 'SOP', 'POO'],
    group: 'programming',
  },
  {
    id: 'FEN',
    name: 'Fenômenos de Transporte',
    semester: 6,
    prerequisites: ['FSC2'],
    group: 'base',
  },
  {
    id: 'DLP1',
    name: 'Dispositivos Lógicos Programáveis',
    semester: 6,
    prerequisites: ['CIL'],
    group: 'programming',
  },
  {
    id: 'PRE',
    name: 'Processos Estocásticos',
    semester: 6,
    prerequisites: ['EST', 'CAL4'],
    group: 'base',
  },
  {
    id: 'SIS2',
    name: 'Sinais e Sistemas 2',
    semester: 6,
    prerequisites: ['SIS1'],
    group: 'signals',
  },
  {
    id: 'ANT',
    name: 'Anteas',
    semester: 6,
    prerequisites: ['FSC3'],
    group: 'communications',
  },

  {
    id: 'DLP2',
    name: 'Dispositivos Lógicos Programáveis 2',
    semester: 7,
    prerequisites: ['DLP1', 'MIC'],
    group: 'programming',
  },
  {
    id: 'RTX',
    name: 'Redes de Transmissão',
    semester: 7,
    prerequisites: ['RED1', 'SIS2'],
    group: 'communications',
  },
  {
    id: 'COM1',
    name: 'Sistemas de Comunicação 1',
    semester: 7,
    prerequisites: ['SIS2', 'PRE'],
    group: 'signals',
  },
  {
    id: 'PSD',
    name: 'Processamento de Sinais Digitais',
    semester: 7,
    prerequisites: ['SIS2', 'DLP1'],
    group: 'signals',
  },
  {
    id: 'MTG',
    name: 'Meios de Transmissão Guiados',
    semester: 7,
    prerequisites: ['FSC3', 'SIS2'],
    group: 'communications',
  },
  {
    id: 'PTG',
    name: 'Comunicação e Expressão',
    semester: 7,
    prerequisites: [],
    group: 'base',
  },

  {
    id: 'COM2',
    name: 'Sistemas de Comunicação 2',
    semester: 8,
    prerequisites: ['COM1'],
    group: 'signals',
  },
  {
    id: 'PJI3',
    name: 'Projeto Integrador 3',
    semester: 8,
    prerequisites: ['PJI2', 'PSD', 'COM1', 'STE', 'DLP2'],
    group: 'extra',
  },
  {
    id: 'CSF',
    name: 'Comunicações sem Fio',
    semester: 8,
    prerequisites: ['ANT', 'PRE'],
    group: 'communications',
  },
  {
    id: 'ADM',
    name: 'Administração para Engenharia',
    semester: 8,
    prerequisites: [],
    group: 'base',
  },
  {
    id: 'BCD',
    name: 'Banco de Dados',
    semester: 8,
    prerequisites: ['POO'],
    group: 'programming',
  },
  {
    id: 'STE',
    name: 'Sistemas Embarcados',
    semester: 8,
    prerequisites: ['SOP'],
    group: 'programming',
  },
  {
    id: 'PTC',
    name: 'Projeto de Protocolos',
    semester: 8,
    prerequisites: ['PRG2', 'RED2'],
    group: 'networks',
  },

  {
    id: 'SUS',
    name: 'Engenharia e Sustentabilidade',
    semester: 9,
    prerequisites: [],
    group: 'base',
  },
  {
    id: 'TCC1',
    name: 'Trabalho de Conclusão de Curso 1',
    semester: 9,
    prerequisites: [],
    group: 'extra',
  },
  {
    id: 'CRF',
    name: 'Circuito de Rádiofrequência',
    semester: 9,
    prerequisites: ['COM1', 'DLP1', 'ANT'],
    group: 'communications',
  },
  {
    id: 'STC',
    name: 'Sistemas de Telecomunicação',
    semester: 9,
    prerequisites: ['COM1', 'RTX'],
    group: 'communications',
  },
  {
    id: 'ADS',
    name: 'Análise de Desempenho de Sistemas',
    semester: 9,
    prerequisites: ['PTC', 'PRE'],
    group: 'networks',
  },
  {
    id: 'ECO',
    name: 'Economia para Engenharia',
    semester: 9,
    prerequisites: ['ADM'],
    group: 'base',
  },
  {
    id: 'SMU',
    name: 'Sistemas Multimídia',
    semester: 9,
    prerequisites: ['RED2'],
    group: 'networks',
  },

  {
    id: 'ETO',
    name: 'Estágio Obrigatório',
    semester: 10,
    prerequisites: [],
    group: 'extra',
  },
  {
    id: 'TCC2',
    name: 'Trabalho de Conclusão de Curso 2',
    semester: 10,
    prerequisites: ['TCC1'],
    group: 'extra',
  },
];

export const finished = {
  DES: true,
  PJI1: true,
  FSC1: true,
  CAL1: true,
  GAL: true,
  ELI: true,
  LOG: true,
  FSC2: true,
  CAL2: true,
  ALG: true,
  CIE1: true,
  QMC1: true,
  PRG1: true,
  CIE2: true,
  QMC2: true,
  ELA1: true,
  CIL: true,
  PRG2: true,
  CAL3: true,
  MEC: true,
  CAL4: true,
  ELA2: true,
  MIC: true,
  RED1: true,
  POO: true,
  MPQ: false,
  SIS1: true,
  SOP: true,
  FSC3: true,
  RED2: true,
  EST: true,
  PJI2: false,
  STD: true,
  FEN: false,
  DLP1: true,
  PRE: true,
  SIS2: true,
  ANT: false,
  DLP2: false,
  RTX: false,
  COM1: false,
  PSD: false,
  MTG: false,
  PTG: false,
  COM2: false,
  PJI3: false,
  CSF: false,
  ADM: true,
  BCD: true,
  STE: false,
  PTC: false,
  SUS: false,
  TCC1: false,
  CRF: false,
  STC: false,
  ADS: false,
  ECO: true,
  SMU: false,
  ETO: false,
  TCC2: false,
};
