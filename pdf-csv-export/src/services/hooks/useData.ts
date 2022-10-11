import axios from 'axios';
import { useEffect, useState } from 'react';

const instance = axios.create({
  baseURL: 'http://json-server-api-mock.herokuapp.com/',
});

export function useData() {
  const [data, setData] = useState<reportData[]>([]);

  useEffect(() => {
    instance
      .get('reports')
      .then((response) => {
        setData(response.data);
      })
      .catch(() => console.error('Erro na requisição!'));
  }, []);

  return {
    data,
  };
}

// Types

export type reportData = {
  codigo: number;
  nome: string;
  funcao: string;
  nif: number;
  cbo: string;
  empresa: string;
  CNPJ: string;
  endereço: {
    rua: string;
    cidade: string;
  };
  resumo: {
    referencia: {
      mes: string;
      ano: number;
    };
    emissao: {
      dia: number;
      mes: number;
      ano: number;
    };
    salarioBruto: number;
    salarioLiquido: number;
    totalDescontos: number;
    descontos: {
      abonoFamiliar: number;
      inss: number;
      irt: number;
      fgts: number;
    };
    proventos: {
      salarioBase: number;
      subAlimentacao: number;
      subTransporte: number;
      outros: number;
    };
  };
};
