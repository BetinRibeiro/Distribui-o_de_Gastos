function distribuicaoGastosPorFaixaSalarial(salario) {
    if (salario <= 5000) {
        return {
            'Moradia': salario * 0.3,
            'Alimentação': salario * 0.2,
            'Transporte': salario * 0.15,
            'Saúde e cuidados pessoais': salario * 0.1,
            'Educação e cultura': salario * 0.05,
            'Lazer e entretenimento': salario * 0.05,
            'Economias e investimentos': salario * 0.1,
            'Outros gastos': salario * 0.05
        };
    } else if (salario <= 10000) {
        return {
            'Moradia': salario * 0.25,
            'Alimentação': salario * 0.15,
            'Transporte': salario * 0.1,
            'Saúde e cuidados pessoais': salario * 0.1,
            'Educação e cultura': salario * 0.1,
            'Lazer e entretenimento': salario * 0.1,
            'Economias e investimentos': salario * 0.15,
            'Outros gastos': salario * 0.05
        };
    } else if (salario <= 20000) {
        return {
            'Moradia': salario * 0.2,
            'Alimentação': salario * 0.12,
            'Transporte': salario * 0.1,
            'Saúde e cuidados pessoais': salario * 0.1,
            'Educação e cultura': salario * 0.08,
            'Lazer e entretenimento': salario * 0.08,
            'Economias e investimentos': salario * 0.2,
            'Outros gastos': salario * 0.12
        };
    } else if (salario <= 30000) {
        return {
            'Moradia': salario * 0.15,
            'Alimentação': salario * 0.1,
            'Transporte': salario * 0.1,
            'Saúde e cuidados pessoais': salario * 0.1,
            'Educação e cultura': salario * 0.1,
            'Lazer e entretenimento': salario * 0.1,
            'Economias e investimentos': salario * 0.25,
            'Outros gastos': salario * 0.1
        };
    } else if (salario <= 40000) {
        return {
            'Moradia': salario * 0.15,
            'Alimentação': salario * 0.1,
            'Transporte': salario * 0.1,
            'Saúde e cuidados pessoais': salario * 0.1,
            'Educação e cultura': salario * 0.1,
            'Lazer e entretenimento': salario * 0.1,
            'Economias e investimentos': salario * 0.2,
            'Outros gastos': salario * 0.15
        };
    } else if (salario <= 50000) {
        return {
            'Moradia': salario * 0.1,
            'Alimentação': salario * 0.08,
            'Transporte': salario * 0.08,
            'Saúde e cuidados pessoais': salario * 0.08,
            'Educação e cultura': salario * 0.08,
            'Lazer e entretenimento': salario * 0.08,
            'Economias e investimentos': salario * 0.2,
            'Outros gastos': salario * 0.3
        };
    } else if (salario <= 60000) {
        return {
            'Moradia': salario * 0.08,
            'Alimentação': salario * 0.07,
            'Transporte': salario * 0.07,
            'Saúde e cuidados pessoais': salario * 0.07,
            'Educação e cultura': salario * 0.07,
            'Lazer e entretenimento': salario * 0.07,
            'Economias e investimentos': salario * 0.25,
            'Outros gastos': salario * 0.32
        };
    } else if (salario <= 70000) {
        return {
            'Moradia': salario * 0.07,
            'Alimentação': salario * 0.06,
            'Transporte': salario * 0.06,
            'Saúde e cuidados pessoais': salario * 0.06,
            'Educação e cultura': salario * 0.06,
            'Lazer e entretenimento': salario * 0.06,
            'Economias e investimentos': salario * 0.3,
            'Outros gastos': salario * 0.33
        };
    } else if (salario <= 80000) {
        return {
            'Moradia': salario * 0.06,
            'Alimentação': salario * 0.05,
            'Transporte': salario * 0.05,
            'Saúde e cuidados pessoais': salario * 0.05,
            'Educação e cultura': salario * 0.05,
            'Lazer e entretenimento': salario * 0.05,
            'Economias e investimentos': salario * 0.3,
            'Outros gastos': salario * 0.39
        };
    } else if (salario <= 90000) {
        return {
            'Moradia': salario * 0.05,
            'Alimentação': salario * 0.04,
            'Transporte': salario * 0.04,
            'Saúde e cuidados pessoais': salario * 0.04,
            'Educação e cultura': salario * 0.04,
            'Lazer e entretenimento': salario * 0.04,
            'Economias e investimentos': salario * 0.3,
            'Outros gastos': salario * 0.45
        };
    } else {
        return {
            'Moradia': salario * 0.04,
            'Alimentação': salario * 0.04,
            'Transporte': salario * 0.04,
            'Saúde e cuidados pessoais': salario * 0.04,
            'Educação e cultura': salario * 0.04,
            'Lazer e entretenimento': salario * 0.04,
            'Economias e investimentos': salario * 0.35,
            'Outros gastos': salario * 0.43
        };
    }
}


function calcularGastos() {
    let salario = parseFloat(document.getElementById('salario').value);
    let distribuicaoGastos = distribuicaoGastosPorFaixaSalarial(salario);

    let resultadoHTML = `<h2>Distribuição de Gastos</h2>
    <div class="table-responsive">
        <table class="table text-start align-middle table-bordered table-hover mb-0">
            <tbody>
                <thead>
                    <tr class="text-dark">
                        <th class="" scope="col">Categoria</th>
                        <th class="" scope="col">Valor</th>
                    </tr>
                </thead>`;
    for (let categoria in distribuicaoGastos) {
        resultadoHTML += `<tr class="border"><td class="border">${categoria}</td><td> R$ ${distribuicaoGastos[categoria].toFixed(2)}</td></tr>`;
    }
    resultadoHTML += '</tbody></table></div>';

    document.getElementById('resultado').innerHTML = resultadoHTML;
}
