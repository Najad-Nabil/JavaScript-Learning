let student = []

let dropdown = document.getElementById("courseFilter");

function addStudent(){
    let studentName = document.getElementById("studentName").value;
    let studentAge = document.getElementById("studentAge").value;
    let studentCourse = document.getElementById("studentCourse").value;
    let studentIsActive = document.getElementById("isActive").checked;

    studentDetails = {
        studentName: studentName,
        studentAge: studentAge,
        studentCourse: studentCourse,
        studentIsActive: studentIsActive
    }

    student.push(studentDetails);

    let totalStudents = document.getElementById("totalStudents");
    totalStudents.innerHTML = "";
    totalStudents.textContent = ("Total Students: "+student.length);

    let activeStudents = document.getElementById("activeStudents");
    activeStudents.innerHTML = "";
    let activeStudentNo = 0;
    for(const i of student){
        if(i.studentIsActive == true){
            activeStudentNo++;
        }
    }
    activeStudents.textContent = ("Active Students: "+activeStudentNo);

    document.getElementById("studentName").value = "";
    document.getElementById("studentAge").value = "";
    document.getElementById("studentCourse").value = "";
    document.getElementById("isActive").checked = false;  
}


function showAllStudents(){
    let studentList = document.getElementById("studentList");
    studentList.innerHTML = "";
    for(let i=0;i<student.length;i++){
        let p = document.createElement("p");
        p.textContent = ((i+1)+". Name: "+student[i].studentName+"\tAge: "+student[i].studentAge+"\tCourse: "+student[i].studentCourse)
        studentList.appendChild(p);
    }
}

function searchStudent(){
    let studentName = document.getElementById("searchInput").value;
    document.getElementById("searchInput").value = "";
    let studentList = document.getElementById("studentList");
    studentList.innerHTML = "";
    let studentInfo = document.createElement("p");
    for(const std of student){
        if(std.studentName == studentName){
            studentInfo.textContent = ("Name : "+std.studentName+"\nAge : "+std.studentAge+"\nCourse : "+std.studentCourse);
            studentList.appendChild(studentInfo);
            return
        }
    }
    studentInfo.textContent = ("Student named '"+studentName+"' not found.");
    studentList.appendChild(studentInfo);
}

studentList = document.getElementById("studentList");
dropdown.addEventListener("change", () => {
    switch(dropdown.value){
        case "Python":
            studentList.innerHTML = "";
            for(const std of student){
                if(std.studentCourse == "Python"){
                    let studentInfo = document.createElement("p");
                    studentInfo.textContent = ("Name : "+std.studentName+"\nAge : "+std.studentAge+"\nCourse : "+std.studentCourse);
                    studentList.appendChild(studentInfo);
                }
            }

        
    }
})