function setEnderecoPorCEP(enderecoText) {
    const enderecoContainer = document.getElementById('enderecoPorCEP');
    enderecoContainer.textContent = enderecoText;
}

function setClimaPorCidade(climaText) {
    const climaContainer = document.getElementById('climaPorCidade');
    climaContainer.textContent = climaText;
}

function fetchEnderecoPorCEP() {
    const cep = document.getElementById('cepInput').value;
    const cepLimpo = cep.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cepLimpo.length !== 8) {
        setEnderecoPorCEP('Por favor, digite um CEP válido com 8 dígitos.');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                setEnderecoPorCEP('CEP não encontrado.');
            } else {
                setEnderecoPorCEP(`Rua ${data.logradouro} - ${data.localidade}, ${data.uf}`);
            }
        })
        .catch(error => {
            console.error('Falha ao buscar o endereço:', error);
            setEnderecoPorCEP('Erro ao carregar endereço.');
        });
}

function fetchClimaPorCidade() {
    const cidade = document.getElementById('cidadeInput').value;
    const apiKey = '8c12f65456e6d11aa1f8c2d29c8a84f3';

    if (!cidade) {
        setClimaPorCidade('Por favor, digite o nome de uma cidade.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                setClimaPorCidade('Cidade não encontrada.');
            } else {
                setClimaPorCidade(`Clima em ${data.name}, ${data.sys.country}: 
                ${data.weather[0].description}. Temperatura: ${data.main.temp}°C. Umidade: 
                ${data.main.humidity}%.`);
            }
        })
        .catch(error => {
            console.error('Falha ao buscar informações do clima:', error);
            setClimaPorCidade('Erro ao carregar informações do clima.');
        });
}

// Adicionando event listeners para buscar endereço ou clima quando os botões correspondentes forem clicados
document.getElementById('buscarEnderecoPorCEPBtn').addEventListener('click', fetchEnderecoPorCEP);
document.getElementById('buscarClimaPorCidadeBtn').addEventListener('click', fetchClimaPorCidade);

// Opcional: Pode-se adicionar um event listener para permitir a busca pressionando Enter nos campos de CEP e cidade
document.getElementById('cepInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchEnderecoPorCEP();
    }
});

document.getElementById('cidadeInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchClimaPorCidade();
    }
});
