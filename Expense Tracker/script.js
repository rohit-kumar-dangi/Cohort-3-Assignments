let user = JSON.parse(localStorage.getItem("user")) || null;
let uiTheme = JSON.parse(localStorage.getItem("uiTheme")) || "light";
let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
let allTransactions = [];
let cashChart = null;
let loginSection = document.querySelector("#login_section");
let registerSection = document.querySelector("#register_section");
let main = document.querySelector("main");
let headerUserName = document.querySelector("#headerUserName");
let dashboard = document.querySelector("#dashboard");
let dashboardBTN = document.querySelector("#dashboardBTN");
let statisticsdiv = document.querySelector("#statistics");
let searchTransaction = document.querySelector("#search_transaction");
let filterTransaction = document.querySelector("#filter_transaction");
let transactionTable = document.querySelector("#transaction_table");
let setting = document.querySelector("#setting");
let settingBTN = document.querySelector("#settingBTN");
let loginForm = document.querySelector("#login_form");
let registerForm = document.querySelector("#register_form");
let addTransactionSection = document.querySelector("#add_transaction_section");
let addTransactionForm = document.querySelector("#add_transaction_form");
let sTBTN = document.querySelector("#save_trans_btn");
let settingForm = document.querySelector("#setting_form");
let settingFullname = document.querySelector("#setting_fullname");
let currency = document.querySelector("#currency");
let themeBTN = document.querySelector("#themeBTN");
const body = document.body;
let editIndex = null;
let editTransData = allTransactions;

const updateUser = (datas)=>{
    let stringUser = JSON.stringify(datas);
    localStorage.setItem("user",stringUser);
}
const updateTrans = (datas)=>{
    let stringTrans = JSON.stringify(datas);
    localStorage.setItem("transactions_"+user.username,stringTrans);
}
const updateRegisteredUser = (datas)=>{
    let stringData=JSON.stringify(datas);
    localStorage.setItem("registeredUsers",stringData);
};





// For logout
const loginRequired = ()=>{
    localStorage.removeItem("user");
    main.style.display="none";
    registerSection.style.display="none";
    loginSection.style.display="flex";
};
// for login
const login = ()=>{
    event.preventDefault();
    let uN = loginForm[0].value;
    let ps = loginForm[1].value;
    const matchUser = registeredUsers.find((u)=> u.username === uN && u.password === ps);

    if (matchUser){
        user = matchUser;
        loginSection.style.display = "none";
        let userDetail = matchUser;
        updateUser(userDetail);
        displayUI();
    }
    else{
        alert("Incorrect Username or Password \nPlease retry");
    }
    loginForm[0].value="";
    loginForm[1].value="";
};

// for register new user
const registerNewUser = ()=>{
    event.preventDefault();
    const checkUser = registeredUsers.find((u)=> u.username === registerForm[0].value);
    if (checkUser){
        alert("User already existed !");
    }
    else{
        registeredUsers.push({ "username": registerForm[0].value, "password": registerForm[1].value, "currency": "₹" });
        updateRegisteredUser(registeredUsers);
        alert("You've successfully registered.");
        loginRequired();
    }
    registerForm[0].value="";
    registerForm[1].value="";
};

// for display Ui
const displayUI = ()=>{
    main.style.display="flex";
    allTransactions = JSON.parse(localStorage.getItem("transactions_"+user.username)) || [];
    headerUserName.textContent = user.username;
    showStats();
    showTransaction(allTransactions);
    showSetting();
};

// for show statistics
const showStats = ()=>{

    let income = 0;
    let expense = 0;
    let cur = user.currency;
    allTransactions.forEach((arr)=>{
        if (arr.type==="Expense"){
            expense += Number(arr.amount);
        }
        else{
            income += Number(arr.amount);
        }
    });
    let currentBalance = income - expense ;
    let stat = `<div id="current_balance" class="statistics_card">
                        <div id="current_balance_icon" class="icon"><img src="images/bank.png" alt=""></div>
                        <div class="card_data">
                            <p class="cardname">Current Balance</p>
                            <p id="current_balance_data" class="data">${cur} ${currentBalance}</p>
                        </div>
                    </div>

                    <div id="total_income" class="statistics_card">
                        <div id="total_income_icon" class="icon"><img src="images/increase.png" alt=""></div>
                        <div class="card_data">
                            <p class="cardname">Total Income</p>
                            <p id="total_income_data" class="data">${cur} ${income}</p>
                        </div>
                    </div>

                    <div id="total_expense" class="statistics_card">
                        <div id="total_expense_icon" class="icon"><img src="images/downtrend.png" alt=""></div>
                        <div class="card_data">
                            <p class="cardname">Total Expense</p>
                            <p id="total_expense_data" class="data">${cur} ${expense}</p>
                        </div>
                    </div>

                    <div id="total_transactions" class="statistics_card">
                        <div id="total_transactions_icon" class="icon"><img src="images/piggy-bank.png" alt=""></div>
                        <div class="card_data">
                            <p class="cardname">Total Transactions</p>
                            <p id="total_transactions_data" class="data">${allTransactions.length}</p>
                        </div>
                    </div>`;

    statisticsdiv.innerHTML= stat;

    const ctx = document.querySelector("#cashChart");

    if (cashChart) {
        cashChart.destroy();
    }

    cashChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Income vs Expenses"],
            datasets: [
                {
                    label: "Income",
                    data: [income],
                    backgroundColor: "green"
                },
                {
                    label: "Expenses",
                    data: [expense],
                    backgroundColor: "red"
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
    
};

// For show transactions
const showTransaction = (shownTran)=>{
    let tempTrans = `<tr>
                        <th>DATE</th>
                        <th>DESCRIPTION</th>
                        <th>CATEGORY</th>
                        <th>AMOUNT</th>
                        <th>ACTIONS</th>
                    </tr>`;
    shownTran.forEach((t,index)=>{
        tempTrans+=`<tr>
                        <td class="td_date">${t.date}</td>
                        <td class="td_description">${t.description}</td>
                        <td class="td_category">${t.category}</td>
                        <td class="td_amount ${t.type}">${t.type==="Expense" ? "-"+t.amount : "+"+t.amount }</td>
                        <td>
                            <div>
                                <button class="edit_btn" onclick="editTrans(${index})">
                                    <div class="action_icon">
                                        <img src="images/edit.png" alt="edit">
                                    </div>
                                </button>
                                <button class="delete_btn" onclick="deleteTrans(${index})">
                                    <div class="action_icon">
                                        <img src="images/delete.png" alt="del">
                                    </div>
                                </button>
                            </div>
                        </td>
                    </tr>`
    })
    transactionTable.innerHTML=tempTrans;
};

const showSetting = ()=>{
    settingFullname.value = user.username;
    currency.value = user.currency;
};

// For search transaction
searchTransaction.addEventListener("input",()=>{
    let strans = allTransactions.filter((ttrans)=>{
        return ttrans.description.toLowerCase().includes(searchTransaction.value.toLowerCase());
    });
    showTransaction(strans);
});

// For Filter transaction
filterTransaction.addEventListener("change",()=>{
    if (filterTransaction.value==="all_transactions"){
        showTransaction(allTransactions);
    }
    else{
        let ftrans = allTransactions.filter((ttrans)=>{
            return ttrans.type.includes(filterTransaction.value);
        });
        showTransaction(ftrans);
    }
});

// For deleting Transactions
const deleteTrans = (index)=>{
    allTransactions.splice(index,1);
    updateTrans(allTransactions);
    showStats();
    showTransaction(allTransactions);
};

// For editing Transactions
const editTrans = (index)=>{
    editIndex=index;
    console.log(allTransactions[index]);
    addTransactionForm[0].value = allTransactions[index].type;
    addTransactionForm[1].value = allTransactions[index].description;
    addTransactionForm[2].value = allTransactions[index].amount;
    addTransactionForm[3].value = allTransactions[index].date;
    addTransactionForm[4].value = allTransactions[index].category;
    sTBTN.textContent= "Update transaction";
    sTBTN.onclick=updateTransaction;
    openAddTransaction();
};
const updateTransaction = ()=>{
    event.preventDefault();
    let addTrans = {
        "type": addTransactionForm[0].value,
        "description": addTransactionForm[1].value,
        "amount": addTransactionForm[2].value,
        "date": addTransactionForm[3].value,
        "category": addTransactionForm[4].value
    }
    addTransactionForm[0].value = "";
    addTransactionForm[1].value = "";
    addTransactionForm[2].value = "";
    addTransactionForm[3].value = "";
    addTransactionForm[4].value = "";

    allTransactions[editIndex].type = addTrans.type;
    allTransactions[editIndex].description = addTrans.description;
    allTransactions[editIndex].amount = addTrans.amount;
    allTransactions[editIndex].date = addTrans.date;
    allTransactions[editIndex].category = addTrans.category;

    sTBTN.textContent = "Save Transaction";
    sTBTN.onclick = addTransaction;
    editIndex = null;

    updateTrans(allTransactions);
    closeAddTransaction();
    showStats();
    showTransaction(allTransactions);
};


// For show dashboard
const activateDashboard = ()=>{
    settingBTN.classList.remove("active");
    dashboardBTN.classList.add("active");
    setting.style.display= "none";
    dashboard.style.display= "flex";
};

// For show settings
const activateSetting = ()=>{
    dashboardBTN.classList.remove("active");
    settingBTN.classList.add("active");
    dashboard.style.display= "none";
    setting.style.display= "flex";
};

// For show add-new-transaction
const openAddTransaction = ()=>{
    addTransactionSection.style.display = "flex";
};

// For hide add-new-transaction
const closeAddTransaction = ()=>{
    addTransactionSection.style.display = "none";
};

// For add new transaction
const addTransaction = ()=>{
    event.preventDefault();
    let addTrans = {
        "type": addTransactionForm[0].value,
        "description": addTransactionForm[1].value,
        "amount": addTransactionForm[2].value,
        "date": addTransactionForm[3].value,
        "category": addTransactionForm[4].value
    }
    addTransactionForm[0].value = "";
    addTransactionForm[1].value = "";
    addTransactionForm[2].value = "";
    addTransactionForm[3].value = "";
    addTransactionForm[4].value = "";
    allTransactions.push(addTrans);
    updateTrans(allTransactions);
    closeAddTransaction();
    showStats();
    showTransaction(allTransactions);
}







const goLoginSection = ()=>{
    registerSection.style.display = "none";
    loginSection.style.display = "flex";
};

const goRegisterSection = ()=>{
    loginSection.style.display = "none";
    registerSection.style.display = "flex";
};

const changeUserDetail = ()=>{
    event.preventDefault();
    const reIn = registeredUsers.findIndex((u)=> u.username === user.username);
    const oldUserName = user.username;
    const newUserName = settingForm[0].value;
    registeredUsers[reIn].username=settingForm[0].value;
    registeredUsers[reIn].currency=settingForm[1].value;
    updateRegisteredUser(registeredUsers);
    user.username= settingForm[0].value;
    user.currency= settingForm[1].value;

    const oldKey = "transactions_" + oldUserName;
    const newKey = "transactions_" + newUserName;

    const data = localStorage.getItem(oldKey);

    if (data !== null) {
        localStorage.setItem(newKey, data);
        localStorage.removeItem(oldKey);
    }

    updateUser(user);
    displayUI();
    alert("User detail updated successfully")
};






if (user !== null){
    allTransactions = JSON.parse(localStorage.getItem("transactions_"+user.username)) || [];
    displayUI();
}
else{
    loginRequired();
}


const changeTheme = ()=>{
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeBTN.textContent = 'Light Theme';
    } else {
        themeBTN.textContent = 'Dark Theme';
    }
};