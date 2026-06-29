let add_task = document.querySelector(".add_task");
let closeBtn = document.querySelector(".close");
let addForm = document.querySelector(".add_form");
let taskContainer = document.querySelector(".tasks_container")
let taskData = JSON.parse(localStorage.getItem("data")) || [];
let editIndex = null;
let searchTask = document.querySelector("#search_task");
let totalTask = document.querySelector("#totaltask");
let completedTask = document.querySelector("#completedtask");
let pendingTask = document.querySelector("#pendingtask");


const showDashboard = ()=>{
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
    let stringData=JSON.stringify(datas)
    localStorage.setItem("data",stringData);
}

const addData = ()=>{
    event.preventDefault();
    taskData.push([addForm[0].value,false]);
    updateData(taskData);
    addForm[0].value="";
    add_task.style.display = "none";
    showDashboard();
    showTask(taskData);
}

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
    showDashboard();
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
    showDashboard();
};
const completeRedoTask = (index) => {
    taskData[index][1]=false;
    updateData(taskData);
    showTask(taskData);
    showDashboard();
};


searchTask.addEventListener("input",()=>{
    let ftask = taskData.filter((ttask)=>{
        return ttask[0].toLowerCase().includes(searchTask.value.toLowerCase());
    });
    showTask(ftask);
});

showTask(taskData);
showDashboard()