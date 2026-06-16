let student = []

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