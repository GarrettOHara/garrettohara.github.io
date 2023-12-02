function calculate() {
    // Get user input
    const initialPrincipal = parseFloat(document.getElementById('initialPrincipal').value);
    const monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const compoundingPeriod = document.querySelector('input[name="compoundingPeriod"]:checked').value;
    const compoundedYears = parseInt(document.getElementById('compoundedYears').value);

    // Perform calculation
    let years = [];
    let compoundedAmounts = [];
    let nonCompoundedAmounts = [];
    let principal = initialPrincipal;

    for (let i = 0; i <= compoundedYears; i++) {
        years.push(i);

        if (compoundingPeriod === 'daily') {
            principal *= Math.pow(1 + interestRate / 365, 365);
        } else if (compoundingPeriod === 'monthly') {
            principal *= Math.pow(1 + interestRate / 12, 12);
        } else if (compoundingPeriod === 'yearly') {
            principal *= (1 + interestRate);
        }

        principal += monthlyContribution * 12;

        compoundedAmounts.push(principal.toFixed(2));
        nonCompoundedAmounts.push((initialPrincipal + monthlyContribution * 12 * i).toFixed(2));
    }

    // Draw the chart
    drawChart(years, compoundedAmounts, nonCompoundedAmounts);

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Compound Interest Result: $' + formatNumber(compoundedAmounts[compoundedAmounts.length - 1]);
}

function drawChart(years, compoundedAmounts, nonCompoundedAmounts) {
    const ctx = document.getElementById('interestChart').getContext('2d');

    // Destroy the existing chart instance
    if (window.myChart) {
        window.myChart.destroy();
    }

    // Create a new chart instance
    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'Compounded Amount',
                data: compoundedAmounts,
                borderColor: 'green',
                fill: false
            }, {
                label: 'Non-Compounded Amount',
                data: nonCompoundedAmounts,
                borderColor: 'blue',
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    title: {
                        display: true,
                        text: 'Amount'
                    }
                }
            }
        }
    });
}



function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}