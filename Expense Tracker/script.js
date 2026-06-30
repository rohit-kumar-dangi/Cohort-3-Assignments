let loginSection = document.querySelector("#login_section");
let registerSection = document.querySelector("#register_section");

const goLoginSection = ()=>{
    registerSection.style.display = "none";
    loginSection.style.display = "flex";
};

const goRegisterSection = ()=>{
    loginSection.style.display = "none";
    registerSection.style.display = "flex";
};



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
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});