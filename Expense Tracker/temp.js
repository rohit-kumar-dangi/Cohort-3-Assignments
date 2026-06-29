const ctx = document.getElementById("cashChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Income vs Expenses"],
        datasets: [
            {
                label: "Income",
                data: [50000],
                backgroundColor: "green"
            },
            {
                label: "Expenses",
                data: [14000],
                backgroundColor: "red"
            }
        ]
    }
});