// Dashboard ----------------------------------------------------------------------------------
const clock = document.querySelector("#clock");
const cloud = document.querySelector("#cloud");
const bgImg = document.querySelector("#bgImg");
const bgVideo = document.querySelector("#bgVideo");
let bg = null;
let currentBG = null;
const setDay = ()=>{
    bgImg.src="images/day.jpg";
    bgVideo.src="videos/day.mp4";
};
const setNight = ()=>{
    bgImg.src="images/night.jpg";
    bgVideo.src="videos/night.mp4";
};

let days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
];
let months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];
const showClock = () => {
    const currentTime = new Date();

    let hours = currentTime.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    const minutes = String(currentTime.getMinutes()).padStart(2, "0");
    const seconds = String(currentTime.getSeconds()).padStart(2, "0");
    if(hours>=6 && hours<=19){
        bg="Day";
    }
    else{
        bg="Night";
    }
    clock.innerHTML = `
        <div id="time">${hours<10? "0"+hours : hours}:${minutes}:${seconds} ${ampm}</div>
        <div id="day">${days[currentTime.getDay()]}</div>
        <div id="date">${currentTime.getDate()} ${months[currentTime.getMonth()]}, ${currentTime.getFullYear()}</div>
    `;
};
setInterval(()=>{
    showClock();
    setbg();
},1000);

const setbg = ()=>{
    if(bg==="Day"&&bg!==currentBG){
        setDay();
        currentBG=bg;
    }
    else if(bg==="Night"&&bg!==currentBG){
        setNight();
        currentBG=bg;
    }
};

async function getWeather(latitude, longitude) {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=d9129a81fdd14a6194794548260707&q=${latitude},${longitude}`
        );

        const data = await response.json();
        cloud.innerHTML = `
                            <div id="temprature">${data.current.temp_c}°C</div>
                            <div id="rain_status">${data.current.condition.text} <img src="${data.current.condition.icon}" style="height:25px;"></div>
                            <div id="other_cloud">
                                <div id="humidity">Humidity : ${data.current.humidity}%</div>
                                <div id="wind">Wind : ${data.current.wind_kph} km/h</div>
                            </div>
                            <div id="location">${data.location.name}</div>
        `;
    } catch (error) {
        cloud.innerHTML = "<p>Unable to fetch weather.</p>";
        console.error(error);
    }
}
function getLocation() {
    if (!navigator.geolocation) {
        cloud.innerHTML = "Geolocation is not supported.";
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            getWeather(latitude, longitude);
        },
        (error) => {
            cloud.innerHTML = "Location permission denied.";
            console.error(error);
        }
    );
}
getLocation();
// Navigations----------------------------------------------------------------------------------
const dashboard = document.querySelector("#dashboard");
const tasks = document.querySelector("#tasks");
const routine = document.querySelector("#routine");
const quote = document.querySelector("#quote");
const timer = document.querySelector("#timer");
const dailyGoal = document.querySelector("#daily_goal");
const goToTasks = ()=>{
    dashboard.style.display = "none";
    tasks.style.display = "flex";
    showTask(taskData);
    showTaskDashboard()
}
const goToRoutine = ()=>{
    dashboard.style.display = "none";
    routine.style.display = "block";
}
const goToQuote = ()=>{
    dashboard.style.display = "none";
    quote.style.display = "flex";
    getQuote();
}
const goToTimer = ()=>{
    dashboard.style.display = "none";
    timer.style.display = "block";
}
const goToDailyGoal = ()=>{
    dashboard.style.display = "none";
    dailyGoal.style.display = "block";
}
const closeTasks = ()=>{
    tasks.style.display = "none";
    dashboard.style.display = "block";
}
const closeRoutine = ()=>{
    routine.style.display = "none";
    dashboard.style.display = "block";
}
const closeQuote = ()=>{
    quote.style.display = "none";
    dashboard.style.display = "block";
}
const closeTimer = ()=>{
    timer.style.display = "none";
    dashboard.style.display = "block";
}
const closeDailyGoal = ()=>{
    dailyGoal.style.display = "none";
    dashboard.style.display = "block";
}




// Tasks---------------------------------------------------------------------------------------------------------------------
let add_task = document.querySelector(".add_task");
let closeBtn = document.querySelector("#add_task_close");
let addForm = document.querySelector(".add_form");
let taskContainer = document.querySelector(".tasks_container")
let taskData = JSON.parse(localStorage.getItem("data")) || [];
let editIndex = null;
let searchTask = document.querySelector("#search_task");
let totalTask = document.querySelector("#totaltask");
let completedTask = document.querySelector("#completedtask");
let pendingTask = document.querySelector("#pendingtask");
const showTaskDashboard = ()=>{
    let tt = taskData.length;
    let ct = taskData.filter((t)=>{return t[1]}).length;
    let pt = tt-ct;
    totalTask.innerText = tt;
    completedTask.innerText = ct;
    pendingTask.innerText = pt;
};
closeBtn.addEventListener("click",() => {
    add_task.style.display = "none";
});
const showAddTask = () => {
    add_task.style.display = "flex";
};
const updateData = (datas)=>{
    let stringData=JSON.stringify(datas);
    localStorage.setItem("data",stringData);
};
const addData = ()=>{
    event.preventDefault();
    taskData.push([addForm[0].value,false]);
    updateData(taskData);
    addForm[0].value="";
    add_task.style.display = "none";
    showTaskDashboard();
    showTask(taskData);
};
const showTask = (shownTask) => {
    let tasks = ``
    shownTask.forEach((element,index) => {
        let taskClass = element[1] === true ? "comTask" : "task";
        let pline = element[1] === true ? "pline" : "";
        let comBtnN = element[1] === true ? 'Redo' : 'Complete';
        let cbtn = element[1] === true ? 'completeRedoTask' : 'completeTask';
        tasks +=`<div class="${taskClass}">
                    <div class="task_name">
                        <p class="${pline}">${element[0]}</p>
                    </div>
                    <div class="task_option">
                        <button id="delete_btn" onclick="deleteTask(${index})">Delete</button>
                        <button id="edit_btn" onclick="editTask('${element[0]}',${index})">Edit</button>
                        <button id="Complete_btn" onclick="${cbtn}(${index})">${comBtnN}</button>
                    </div>
                </div>`
    });
    taskContainer.innerHTML = tasks;
};
const deleteTask = (index)=>{
    taskData.splice(index,1);
    updateData(taskData);
    showTask(taskData);
    showTaskDashboard();
};
const editTask = (element,index)=>{
    showAddTask();
    addForm[0].value=element;
    addForm[1].innerHTML="Update";
    addForm[1].onclick=editData;
    editIndex=index;
};
const editData = ()=>{
    event.preventDefault();
    taskData[editIndex][0] = addForm[0].value;
    editIndex=null;
    updateData(taskData);
    addForm[0].value="";
    addForm[1].innerHTML="+ Add Task";
    addForm[1].onclick=addData;
    add_task.style.display = "none";
    showTask(taskData);
};
const completeTask = (index) => {
    taskData[index][1]=true;
    updateData(taskData);
    showTask(taskData);
    showTaskDashboard();
};
const completeRedoTask = (index) => {
    taskData[index][1]=false;
    updateData(taskData);
    showTask(taskData);
    showTaskDashboard();
};
searchTask.addEventListener("input",()=>{
    let ftask = taskData.filter((ttask)=>{
        return ttask[0].toLowerCase().includes(searchTask.value.toLowerCase());
    });
    showTask(ftask);
});


// Routine -----------------------------------------------------------------------------------------------------
const routineBody = document.querySelector("#routine_body");
const routineData = JSON.parse(localStorage.getItem("routine")) || {};

for (let hour = 6; hour < 24; hour++) {
    routineBody.innerHTML += `
        <div class="routine_slot">
            <h3>${hour}:00 - ${hour + 1}:00</h3>
            <textarea onchange="addRoutine(${hour}, this.value)" placeholder="........">${routineData[hour] || ""}</textarea>
        </div>
    `;
}

const addRoutine = (hour, value)=>{
    console.log(value);
    routineData[hour] = value;
    localStorage.setItem("routine",JSON.stringify(routineData));
}


// Quote ------------------------------------------------------------------------------------------------------
const quoteContent = document.querySelector("#quote_content");
const quoteAuthor = document.querySelector("#author");
async function getQuote() {
    try {
        const response = await fetch("https://dummyjson.com/quotes/random");

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quoteContent.innerHTML=`${data.quote}`;
        quoteAuthor.innerHTML=`${data.author}`;

    } catch (error) {
        console.error(error);
    }
}





// TImer --------------------------------------------------------------------------------------------------------
let minutes = 25;
let seconds = 0;

let timers = null;
let isRunning = false;
let isWorkSession = true;

const updateDisplay = ()=>{
    document.querySelector("#timer_display").textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
const startTimer = ()=>{
    if (isRunning) return;
    isRunning = true;
    timers = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timers);
                isRunning = false;
                sessionCompleted();
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateDisplay();
    }, 1000);
}
const pauseTimer = ()=>{
    clearInterval(timers);
    isRunning = false;
}
const resetTimer = ()=>{

    clearInterval(timers);
    isRunning = false;

    if (isWorkSession) {
        minutes = 25;
    } else {
        minutes = 5;
    }
    seconds = 0;
    updateDisplay();

}
const sessionCompleted = ()=>{
    if (isWorkSession) {
        alert("Work session completed!");
        isWorkSession = false;
        minutes = 5;
        document.querySelector("#sessionName").textContent = "Break Session";
    } else {
        alert("Break completed!");
        isWorkSession = true;
        minutes = 25;
        document.querySelector("#sessionName").textContent = "Work Session";

    }

    seconds = 0;

    updateDisplay();

}
updateDisplay();




// Daily goal ---------------------------------------------------------------------------------------------------


const goalArr = JSON.parse(localStorage.getItem("dailyGoals"))||[];
const addGoalForm = document.querySelector("#addGoalForm");
const goalsContainer = document.querySelector("#goals_container");

const showGoals = ()=>{
    let goals="";
    goalArr.forEach((element,index)=>{
        goals+= `
        <div class="goal_wrapper">
            <div class="goal">${element.goal}</div>
            <div class="goal_description">${element.goalDes}</div>
            <button onClick="deleteGoal(${index})" class="delete_goal_btn"><img src="images/close.png" alt="x"></button>
        </div>`
    });
    goalsContainer.innerHTML=goals;
};

const updateGoalData = (datas)=>{
    let stringDailyGoal = JSON.stringify(datas);
    localStorage.setItem("dailyGoals",stringDailyGoal);
};

const addGoal = ()=>{
    event.preventDefault();
    if (addGoalForm[0].value===""){
        alert("Please add Goal !");
        return
    }
    goalArr.push({
        "goal":addGoalForm[0].value,
        "goalDes":addGoalForm[1].value
    });
    addGoalForm[0].value = "";
    addGoalForm[1].value = "";
    console.log(goalArr);
    updateGoalData(goalArr);
    showGoals();
};
showGoals();

const deleteGoal = (index)=>{
    console.log(index+" deleted")
    goalArr.splice(index,1);
    updateGoalData(goalArr);
    showGoals();
};