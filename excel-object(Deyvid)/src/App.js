import { useRef } from "react";
import './App.css';

function App() {
    /* 
        Tudo o que está aqui é apenas uma exemplo de como o resultado vai ser.

        Neste exemplo o console log é feito mesmo sem ler e processar o ficheiro excel. Mas durante a prática, o resultado só será mostrado no console log após a leitura do ficheiro excel usando uma das bibliotecas mostradas.

        A linha número 1 do ficheiro excel vai servir como a key/chave {key: value} de cada Object do resultado. 
        Exemplo: {nome: "José Maria António Vasconselhos"}.

        Cada Object guarda os dados de cada colaborador.

        As linhas que vêem a seguir representam cada trabalhador da empresa.
    */
    const excelReaderInput = useRef();

    function changeHandler(){
        const resultado = [
            {
                nome: "José Maria António Vasconselhos", 
                funcao: "Técnico de Recursos Humanos",
                escritorio: "Alvalade",
                departamento: "Recursos Humanos",
                regime: "Remoto",
                banco_nome: "BAI",
                iban: "99990999",
                banco_conta: "122228222",
                salario_base: "8907788",
                subsidio: "Desenvolvedor Web",
                supervisor: "Matias Damásio",
                telefone: "900888777",
                email: "jose@gmail.com",
                whatsapp: "111111",
                contacto_emergencia: "Marcos António",
                telefone_emergencia: "900222888",
                relacao_emergencia: "Irmão",
                categoria: "Determinado",
                inicio_contracto: "Desenvolvedor Web",
                fim_contracto: "Desenvolvedor Web",
            },
            {
                nome: "Maria Borges", 
                funcao: "Técnico de Recursos Humanos",
                escritorio: "Alvalade",
                departamento: "Recursos Humanos",
                regime: "Remoto",
                banco_nome: "BAI",
                iban: "99990999",
                banco_conta: "122228222",
                salario_base: "8907788",
                subsidio: "Desenvolvedor Web",
                supervisor: "Matias Damásio",
                telefone: "900888777",
                email: "jose@gmail.com",
                whatsapp: "111111",
                contacto_emergencia: "Marcos António",
                telefone_emergencia: "900222888",
                relacao_emergencia: "Irmão",
                categoria: "Determinado",
                inicio_contracto: "Desenvolvedor Web",
                fim_contracto: "Desenvolvedor Web",
            }
            // ...
        ]

        // Resultado esperado
        console.log(resultado)
    }

    return (
        <div className="App">

            {/* Abre a janela para fazer a leitura do ficheiro excel */}
            {/* excelReaderInput.current.click() - Age como se tivesse clicado no input directamente, mas clicou-se primeiro no div  */}
            <div onClick={() => excelReaderInput.current.click()} className='auto_reader'>
                <input onChange={changeHandler} ref={excelReaderInput} type="file" id='file_input_ocr' accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />

                <p>Ler ficheiro Excel</p>
            </div>
        </div>
    );
}

export default App;
