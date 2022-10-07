import { Container } from './styles';
import { BtnExportCsv } from '../BtnExportCsv';
import { reportData } from '../../services/hooks/useData';
import { BtnExportPdf } from '../BtnExportPdf';

interface TableProps {
  columns: string[];
  reports: reportData[];
  rows: any;
}

export function Table({ columns, rows, reports }: TableProps) {
  const takeReportCsv = (id: number) => {
    let response = reports.find((report) => report.codigo === id);
    return response ? (
      <BtnExportCsv csvData={response} />
    ) : (
      <button disabled about="csv">
        CSV
      </button>
    );
  };

  const takeReportPdf = (id: number) => {
    let response = reports.find((report) => report.codigo === id);
    return response ? (
      <BtnExportPdf pdfData={response} />
    ) : (
      <button disabled about="pdf">
        PDF
      </button>
    );
  };

  return (
    <Container>
      <table style={{ width: '100%', maxWidth: '1300px' }}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th colSpan={2}>Salvar</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row: any, index: any) => {
            return (
              <tr key={index}>
                {columns.map((column, index) => {
                  return <td key={index}>{row[column]}</td>;
                })}
                <td>{takeReportCsv(row['Código'])}</td>
                <td>{takeReportPdf(row['Código'])}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
