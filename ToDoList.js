let todo = [];

function addTask(task){
    todo.push(task)
}

function removeTask(number){
    todo.splice(number, 1);
}

function showAll(){
    for(let i=0;i<todo.length;i++){
        console.log('Task no : '+i+'\nTask : '+todo[i]+'\n\n');
    }
}

addTask('Blaaaa')
addTask('Hellooooo')
addTask('Haiii')
showAll()