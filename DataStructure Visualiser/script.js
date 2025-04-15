document.getElementById('csvFileInput').addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: function(results) {
                visualizeData(results.data);
            }
        });
    }
}

function visualizeData(data) {
    // Example using Chart.js
    const ctx = document.getElementById('chartContainer').getContext('2d');
    const labels = data.map(row => row.label); // Assuming 'label' is a column in your CSV
    const values = data.map(row => row.value); // Assuming 'value' is a column in your CSV

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Sample Data',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
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
