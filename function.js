let input = document.querySelector('.input-field')
let addtask = document.querySelector('.add-btn');
let priority = document.querySelector('.priority-btn');
let deletebtn = document.querySelector('.delete-btn');
let list = document.querySelector('.List-item');
addtask.addEventListener('click', () => {
    if (input.value != "") {
        let li = document.createElement('li');
        let div = document.createElement('div');
        let btn1 = document.createElement('button');
        let btn2 = document.createElement('button');
        btn1.innerHTML = "Completed";
        btn2.innerHTML = "Deleted";
        li.innerHTML = input.value;
        div.append(li, btn1, btn2);
        list.appendChild(div);
        input.value = "";

        btn1.addEventListener('click', () => {
            btn1.style.backgroundColor = "green";
        })
        btn2.addEventListener('click', () => {
            list.removeChild(div);
        })
    }
})
priority.addEventListener('click', () => {
    if (input.value != "") {
        let li = document.createElement('li');
        let div = document.createElement('div');
        let btn1 = document.createElement('button');
        let btn2 = document.createElement('button');
        btn1.innerHTML = "Completed";
        btn2.innerHTML = "Deleted";
        li.innerHTML = input.value;
        div.prepend(li, btn1, btn2);
        list.prepend(div);
        input.value = "";
        btn1.addEventListener('click', () => {
            btn1.style.backgroundColor = "green";
        })
        btn2.addEventListener('click', () => {
            list.removeChild(div);
        })
    }
})
deletebtn.addEventListener('click', () => {
    input.innerHTML = "";
    list.innerHTML = ""
})

