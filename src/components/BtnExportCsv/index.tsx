import { CSVLink } from 'react-csv';
import { reportData } from '../../services/hooks/useData';

interface BtnExportCsvProps {
  csvData: reportData;
}

export const BtnExportCsv = ({ csvData }: BtnExportCsvProps) => {
  const headerFileCSV = [
    { label: 'Código', key: 'codigo' },
    { label: 'Referência', key: 'data' },
    { label: 'Nome', key: 'nome' },
    { label: 'Função', key: 'funcao' },
    { label: 'NIF', key: 'nif' },
    { label: 'Empresa', key: 'empresa' },
    { label: 'CNPJ', key: 'cnpj' },
    { label: 'Sub.Alimentação', key: 'subAlimentacao' },
    { label: 'Sub.Transporte', key: 'subTransporte' },
    { label: 'Salário líquido', key: 'salarioBruto' },
    { label: 'INSS', key: 'inss' },
    { label: 'FGTS', key: 'fgts' },
    { label: 'IRT', key: 'irt' },
    { label: 'Outros', key: 'outros' },
    { label: 'Desconto Total', key: 'salarioLiquido' },
    { label: 'Salário líquido', key: 'salarioLiquido' },
  ];

  const bodyFileCSV = [
    {
      codigo: csvData.codigo,
      data: `${csvData.resumo.emissao.dia}/${csvData.resumo.emissao.mes}/${csvData.resumo.emissao.ano}`,
      nome: csvData.nome,
      funcao: csvData.funcao,
      nif: csvData.nif,
      empresa: csvData.empresa,
      cnpj: csvData.CNPJ,
      subAlimentacao: csvData.resumo.proventos.subAlimentacao,
      subTransporte: csvData.resumo.proventos.subTransporte,
      salarioBruto: csvData.resumo.salarioBruto,
      inss: csvData.resumo.descontos.inss,
      fgts: csvData.resumo.descontos.fgts,
      irt: csvData.resumo.descontos.irt,
      outros: csvData.resumo.proventos.outros,
      descontoTotal: csvData.resumo.totalDescontos,
      salarioLiquido: csvData.resumo.salarioLiquido,
    },
  ];

  return (
    <CSVLink
      headers={headerFileCSV}
      data={bodyFileCSV}
      filename={`${csvData.nome}-cod.${csvData.codigo}.csv`}
    >
      <button about="csv">CSV</button>
    </CSVLink>
  );
};
