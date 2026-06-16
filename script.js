let student = [];

function addName(){
    let name = document.getElementById("studentName").value;
    student.push(name);
    document.getElementById("alert").textContent = "Student Added Successfully"
    document.getElementById("studentName").value = "";
}

function showAllStudents(){
    for(let i=0;i<student.length;i++){
        document.getElementById("output").textContent = (i+". "+student[i]);
    }
}