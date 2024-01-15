# Grade curricular IFSC

| Fase | CH  | Turno Oposto | Turno Normal | Turno Normal | Turno Normal | Turno Normal | Turno Normal | Turno Normal |
| ---- | --- | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| 1ª   | 396 | DES          | CAL1         | FSC1         | ELI          | GAL          | LOG          | PJI1         |
| 2ª   | 396 | QMC1         | CAL2         | FSC2         | CIE1         | ALG          | PRG1         |              |
| 3ª   | 396 | QMC2         | CAL3         | CIE2         | ELA1         | CIL          | PRG2         |              |
| 4ª   | 396 | MEC          | CAL4         | RED1         | ELA2         | MIC          | POO          |              |
| 5ª   | 396 | MPQ          | EST          | RED2         | FSC3         | SOP          | SIS1         |              |
| 6ª   | 396 | FEN          | PRE          | ANT          | STD          | DLP1         | SIS2         | PJI2         |
| 7ª   | 396 | PTG          | RTX          | MTG          | DLP2         | PSD          | COM1         |              |
| 8ª   | 396 | ADM          | CSF          | PTC          | BCD          | STE          | COM2         | PJI3         |
| 9ª   | 360 | ECO          | SUS          | SMU          | ADS          | STC          | CRF          | TCC1         |
| 10ª  | 468 |              |              |              |              |              | TCC2         | ETO          |

Portanto precisará ser gerado um array json com a tabela acima, cada item do array será um objeto com os seguintes campos:

- `fase`: número da fase
- `ch`: carga horária
- `código`: código da disciplina
- `nome`: nome da disciplina
- `grupo`: grupo da disciplina ("Curriculo Base" | "Eletrônica" | "Programação" | "Redes" | "Sinais" | "Comunicações" | "Extra")
- `sucessoras`: array com os códigos das disciplinas que são sucessoras da disciplina atual

Esses dados passaram por um tratamento para gerar os nós e as conexões

{ type: 'custom', id: 'TCC2', position: { x: CALCULADO, y: CALCULADO }, data: { code: 'TCC2', name: 'Trabalho de Conclusão de Curso II', group: 'Curriculo Base', ch: 468, fase: 10, sucessoras: [] } },