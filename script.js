let student = [];

let inputBox = document.getElementById("studentName");
inputBox.addEventListener("keydown" , function(event){
    if(event.key === "Enter"){
        addName();
    }
})

function addName(){
    let name = document.getElementById("studentName").value;
    student.push(name);
    document.getElementById("alert").textContent = "Student Added Successfully"
    document.getElementById("studentName").value = "";
}

function showAllStudents(){

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    let numberOfStudents = document.createElement("p")
    numberOfStudents.textContent = ("Total number of students = "+student.length)
    outputDiv.appendChild(numberOfStudents)
    for(let i=0;i<student.length;i++){
        let p = document.createElement("p");
        p.textContent = ((i+1)+". "+student[i]);
        outputDiv.appendChild(p);
    }
}