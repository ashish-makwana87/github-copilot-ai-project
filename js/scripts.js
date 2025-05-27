
  window.onload = function() {

   const ctx = document.getElementById("myChart").getContext("2d");
   
   const myChart = new Chart(ctx, {
    type: "bar", 
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "Income",
          data: [],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Expenses",
          data: [],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Income vs Expenses",
        },
      },
    },
  });

   document.getElementById("chart-tab").addEventListener("click", () => {
  
  
    function getMonthlyData() {
    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
  
    const data = months.map((month) => {
      const income = parseFloat(document.getElementById(`${month}-income`).value) || 0;
      const expenses = parseFloat(document.getElementById(`${month}-expenses`).value) || 0;
      return { month, income, expenses };
    });
  
    return data;
  }
  
  const monthlyData = getMonthlyData();
  
  const incomeData = monthlyData.map((data) => data.income);
  const expensesData = monthlyData.map((data) => data.expenses);

    myChart.data.datasets[0].data = incomeData;
    myChart.data.datasets[1].data = expensesData;
    myChart.update();
 })


  }
  
  