import { useMemo } from 'react';

import { Table } from './components/Table';
import { useData } from './services/hooks/useData';
import { Container } from './App.styles';

function App() {
  const { data } = useData();
  const columns = useMemo(
    () => [
      'Código',
      'Nome',
      'Função',
      'NIF',
      'Salário Base',
      'Salário Bruto',
      'Descontos Totais',
      'Salário Líquido',
    ],
    []
  );

  const rows = useMemo(
    () =>
      data.map(
        (report) =>
          [
            {
              Código: report.codigo,
              Nome: report.nome,
              Função: report.funcao,
              NIF: report.nif,
              'Salário Base': report.resumo.proventos.salarioBase,
              'Salário Bruto': report.resumo.salarioBruto,
              'Descontos Totais': report.resumo.totalDescontos,
              'Salário Líquido': report.resumo.salarioLiquido,
            },
          ][0]
      ),
    [data]
  );

  return (
    <Container>
      {data.length > 0 && (
        <Table columns={columns} rows={rows} reports={data} />
      )}
      {data.length < 1 && <p>Carregando Relatórios..</p>}
    </Container>
  );
}

export default App;
