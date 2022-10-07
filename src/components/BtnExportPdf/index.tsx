import { reportData } from '../../services/hooks/useData'
import { Container } from './styles'
import pdfMaker from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { TDocumentDefinitions } from 'pdfmake/interfaces'
import { base64 } from '../../services/img'

interface BtnExportPdfProps {
  pdfData: reportData
}

export function BtnExportPdf({ pdfData }: BtnExportPdfProps) {
  pdfMaker.vfs = pdfFonts.pdfMake.vfs

  const descontos = [
    { value: pdfData.resumo.descontos.fgts },
    { value: pdfData.resumo.descontos.inss },
    { value: pdfData.resumo.descontos.irt },
  ]

  let descRows = descontos.map((row) => {
    return [
      {
        text: `Descrição do desconto`,
        alignment: 'left',
        colSpan: 6,
      },
      {},
      {},
      {},
      {},
      {},
      {
        text: `R$ ${row.value}`,
        alignment: 'left',
        colSpan: 2,
      },
      {},
      {
        text: '',
        alignment: 'left',
        colSpan: 2,
      },
      {},
    ]
  })

  const proventos = [
    { value: pdfData.resumo.proventos.subAlimentacao },
    { value: pdfData.resumo.proventos.subTransporte },
    { value: pdfData.resumo.proventos.outros },
  ]

  let provRows = proventos.map((row) => {
    return [
      {
        text: `Descrição da remuneração`,
        alignment: 'left',
        colSpan: 6,
      },
      {},
      {},
      {},
      {},
      {},
      {
        text: '',
        alignment: 'left',
        colSpan: 2,
      },
      {},
      {
        text: `R$ ${row.value}`,
        alignment: 'left',
        colSpan: 2,
      },
      {},
    ]
  })

  const documentDefinitions: TDocumentDefinitions = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],
    compress: false,
    content: [
      {
        image: `data:image/png;base64,${base64.brh}`,
        width: 100,
      },
      { text: `NIF ${pdfData.nif}`, bold: true, margin: [0, 0, 0, 15] },
      {
        color: '#444',
        fontSize: 11,
        style: 'tableExample',
        table: {
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          heights: 20,
          headerRows: 1,
          body: [
            [
              {
                text: 'RECIBO DE SALÁRIO',
                style: 'headerText',
                colSpan: 10,
                alignment: 'center',
                margin: [50, 0],
                bold: true,
                fillColor: '#bbb',
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: `CNPJ:   ${pdfData.CNPJ}`,
                alignment: 'left',
                colSpan: 8,
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {
                text: `Mếs:   ${pdfData.resumo.referencia.ano}/${pdfData.resumo.referencia.mes}`,
                alignment: 'left',
                colSpan: 2,
              },
              {},
            ],
            [
              {
                text: `${pdfData.empresa}`,
                alignment: 'left',
                colSpan: 10,
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: `${pdfData.endereço.rua}, ${pdfData.endereço.cidade}`,
                alignment: 'left',
                colSpan: 10,
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: '',
                colSpan: 10,
                fillColor: '#bbb',
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: `Colaborador:  ${pdfData.nome}`,
                alignment: 'left',
                colSpan: 8,
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              { text: `${pdfData.cbo}`, colSpan: 2, alignment: 'left' },
              {},
            ],
            [
              {
                text: `Função:   ${pdfData.funcao}`,
                alignment: 'left',
                colSpan: 8,
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {
                text: `Cod.   ${pdfData.codigo}`,
                alignment: 'left',
                bold: true,
                colSpan: 2,
              },
              {},
            ],
            [
              {
                text: 'Descrição',
                style: 'headerTable',
                colSpan: 6,
              },
              {},
              {},
              {},
              {},
              {},
              {
                text: 'Descontos',
                style: 'headerTable',
                colSpan: 2,
              },
              {},
              {
                text: 'Remunerações',
                style: 'headerTable',
                colSpan: 2,
              },
              {},
            ],
            ...provRows,
            ...descRows,
            [
              {
                text: '',
                colSpan: 6,
              },
              {},
              {},
              {},
              {},
              {},
              {
                text: 'Descontos Totais',
                style: 'headerTable',
                colSpan: 2,
              },
              {},
              {
                text: 'Salário Bruto',
                style: 'headerTable',
                colSpan: 2,
              },
              {},
            ],
            [
              {
                text: '',
                colSpan: 6,
              },
              {},
              {},
              {},
              {},
              {},
              {
                text: `R$  ${pdfData.resumo.totalDescontos}`,
                alignment: 'center',
                colSpan: 2,
              },
              {},
              {
                text: `R$  ${pdfData.resumo.salarioBruto}`,
                alignment: 'center',
                colSpan: 2,
              },
              {},
            ],
            [
              {
                text: '',
                colSpan: 6,
              },
              {},
              {},
              {},
              {},
              {},
              {
                text: 'Salário Líquido',
                style: 'headerTable',
                fillColor: '#eee',
                colSpan: 2,
              },
              {},
              {
                text: `R$ ${pdfData.resumo.salarioLiquido}`,
                alignment: 'center',
                fillColor: '#eee',
                colSpan: 2,
              },
              {},
            ],
            [
              {
                text: '',
                colSpan: 10,
                fillColor: '#bbb',
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: 'Salário Base',
                style: 'headerTable',
                colSpan: 4,
              },
              {},
              {},
              {},
              {
                text: 'Base INSS',
                style: 'headerTable',
                colSpan: 2,
              },
              {},
              {
                text: 'Base FGTS',
                style: 'headerTable',
                colSpan: 2,
              },
              {},
              {
                text: 'Base IRT',
                style: 'headerTable',
                colSpan: 2,
              },
              {},
            ],
            [
              {
                text: `R$  ${pdfData.resumo.proventos.salarioBase}`,
                alignment: 'center',
                colSpan: 4,
              },
              {},
              {},
              {},
              {
                text: `R$  ${pdfData.resumo.descontos.inss}`,
                alignment: 'center',
                colSpan: 2,
              },
              {},
              {
                text: `R$  ${pdfData.resumo.descontos.fgts}`,
                alignment: 'center',
                colSpan: 2,
              },
              {},
              {
                text: `R$  ${pdfData.resumo.descontos.irt}`,
                alignment: 'center',
                colSpan: 2,
              },
              {},
            ],
            [
              {
                text: '',
                alignment: 'center',
                colSpan: 4,
              },
              {},
              {},
              {},
              {
                text: `11%`,
                alignment: 'center',
                colSpan: 2,
              },
              {},
              {
                text: `8%`,
                alignment: 'center',
                colSpan: 2,
              },
              {},
              {
                text: `15%`,
                alignment: 'center',
                colSpan: 2,
              },
              {},
            ],
          ],
        },
      },
    ],

    styles: {
      headerText: {
        fontSize: 14,
        color: '#000',
        bold: true,
        alignment: 'center',
      },
      headerTable: {
        fontSize: 10,
        color: '#000',
        bold: true,
        alignment: 'center',
        fillColor: '#eee',
      },
    },
  }

  const downloadPdf = () => {
    pdfMaker
      .createPdf(documentDefinitions)
      .download(`${pdfData.nome}-Cod.${pdfData.codigo}.pdf`)
  }

  return (
    <Container>
      <button about="pdf" onClick={downloadPdf}>
        PDF
      </button>
    </Container>
  )
}
