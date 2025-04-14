document.getElementById('progressForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const internal = parseFloat(document.getElementById('internal').value);
  const goalTotal = parseFloat(document.getElementById('goal').value);

  let minExternal = 40;

  if (internal < 35) {
    const shortfall = 35 - internal;
    minExternal += shortfall;
  }

  let requiredExternal = goalTotal - internal;

  if (requiredExternal < minExternal) {
    requiredExternal = minExternal;
  }

  let output = "";

  if (requiredExternal > 100) {
    output = `
      <p>You need ${requiredExternal.toFixed(2)} in external.</p>
      <p><span style="color:red; font-weight:bold;">Not possible. Aim for a lower grade.</span></p>
    `;
  } else {
    const total = internal + requiredExternal;
    const grade = getGrade(total);
    output = `
      <p>To get your goal grade, you need <strong>${requiredExternal.toFixed(2)}</strong> in external.</p>
      <p>Predicted Total: <strong>${internal} + ${requiredExternal.toFixed(2)} = ${total.toFixed(2)}</strong> → Grade: <strong>${grade}</strong></p>
    `;
    showChart(internal, requiredExternal);
  }

  document.getElementById('result').innerHTML = output;
});

function getGrade(score) {
  if (score >= 135) return "S";
  else if (score >= 127.5) return "A+";
  else if (score >= 120) return "A";
  else if (score >= 112.5) return "B+";
  else if (score >= 105) return "B";
  else if (score >= 97.5) return "C+";
  else if (score >= 90) return "C";
  else if (score >= 82.5) return "D";
  else if (score >= 75) return "P";
  else return "Fail";
}

function showChart(internal, external) {
  const total = internal + external;
  const ctx = document.getElementById('chart').getContext('2d');
  if (window.myChart) window.myChart.destroy();

  window.myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Internal', 'External', 'Total'],
      datasets: [{
        label: 'Marks',
        data: [internal, external, total],
        backgroundColor: ['#ff6384', '#36a2eb', '#4bc0c0']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 150
        }
      }
    }
  });
}
