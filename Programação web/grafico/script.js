document.getElementById('csvFile').addEventListener('change', readFile);

function readFile(event){
const file = event.target.files[0];

if(!file){
    return;
}

const reader = new FileReader();

reader.onload = function(e) {
    const content = e.target.result;
    const lines = content.split('\n').slice(1);
    const dates = [];
    const deposits = [];
    const withdrawals = [];

    for (let line of lines) {
        const columns = line.split(',');
        dates.push(columns[0]);
        deposits.push(columns[1]);
        withdrawals.push(columns[2]);
    }

    renderChart(dates,deposits,withdrawals);
}

    reader.readAsText(file);

}

function renderChart(dates,deposits,withdrawals){
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx,{
        type: 'bar',
        data: {
            labels: dates,
            datasets: [{
                label: 'Deposito',
                data: deposits,
                backgroundColor: 'rgba(75. 192, 192, 0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1
            },{
                label: 'Retirada',
                data: withdrawals,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }

    });
}

