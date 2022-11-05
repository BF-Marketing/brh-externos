import {
  BsCheckCircleFill,
  BsFillXCircleFill,
  BsRecordCircleFill,
} from 'react-icons/bs'

export const plans = [
  {
    title: 'plano básico',
    value: 30,
    validity: 'Válido por 3 meses',
    label: 'Explore as bases com esse plano',
    status: true,
  },
  {
    title: 'plano standard',
    value: 60,
    validity: 'Válido por 6 meses',
    label: 'Explore acessos intermédios',
    status: false,
  },
  {
    title: 'plano platina',
    value: 90,
    validity: 'Válido por 1 ano',
    label: 'Acesso ilimitado a recursos',
    status: false,
  },
]

export const payments = [
  {
    plano: 'Plano básico',
    value: '30.000,00 kzs',
    lastPayment: '21/05/2023',
    nextPayment: '21/08/2023',
    status: 'ok',
  },
  {
    plano: 'Plano standard',
    value: '60.000,00 kzs',
    lastPayment: '22/06/2023',
    nextPayment: '21/12/2023',
    status: 'warning',
  },
  {
    plano: 'Plano platina',
    value: '60.000,00 kzs',
    lastPayment: '22/06/2023',
    nextPayment: '22/12/2023',
    status: 'attention',
  },
]

export const paymentPointer = {
  ok: <BsCheckCircleFill color="#1dbf79" />,
  attention: <BsRecordCircleFill color="#ffbe40" />,
  warning: <BsFillXCircleFill color="#ff4242" />,
}
