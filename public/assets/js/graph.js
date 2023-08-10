const ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "# of Views",
        data: [ 22, 86, 39, 103, 187, 209, 127, 149, 35, 125, 77, 63],
        fill: true, // Fill area under the line
        tension: 0.4, // Smoothing factor
        borderWidth: 2, // Increase the border width
        borderColor: "rgba(0, 128, 0, 1)", // Green border color
        backgroundColor: createGradient(
          ctx,
          "rgba(0, 128, 0, 0.8)",
          "rgba(0, 128, 0, 0.2)"
        ), // Gradient background
      },
    ],
  },
  options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "top", // Adjust the position of the legend if needed
          },
          title: {
            display: true,
            text: "2023",
            fontSize: 24,
          },
          

          
        },
      },
    });

function createGradient(ctx, color1, color2) {
  const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
}


