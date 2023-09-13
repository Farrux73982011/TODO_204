let form = document.querySelector("form");
let container = document.querySelector(".con_div");
let todos = [];

form.onsubmit = (event) => {
  event.preventDefault();

  let todo = {
    id: Math.random(),
    isDone: false,
    time: new Date().getHours() + ":" + new Date().getMinutes(),
  };

  let fm = new FormData(event.target);

  fm.forEach((value, key) => {
    todo[key] = value;
  });

  todos.push(todo);
  reload(todos);
};

function reload(arr) {
  container.innerHTML = "";

  for (let item of arr) {
    let box = document.createElement("div");
    let p = document.createElement("span");
    let span = document.createElement("span");
    let button = document.createElement("button");

    box.classList.add("box");
    p.classList.add("text");
    span.classList.add("op");
    button.innerHTML = "x";
    span.innerHTML = item.time;
    p.innerHTML = item.task;

    container.append(box);
    box.append(p, span, button);

    button.onclick = () => {
      todos = todos.filter((el) => el.id !== item.id);
      box.classList.add("delete-anim");
      setTimeout(() => {
        box.remove();
      }, 500);
    };
    p.onclick = () => {
      if (!item.isDone) {
        item.isDone = true;
        p.classList.add("line");
      } else {
        item.isDone = false;
        p.classList.remove("line");
      }
    };
    let modal = document.querySelector('.modal')
    let close_btns = document.querySelector('.modal__close')
    let izmenit = document.querySelector('.izmenit')
    let done = document.querySelector('.done')
    let time = document.querySelector('.time')

    done.onclick = () => {
        modal.classList.add('hide')
        item.task = izmenit.value
        p.innerHTML = izmenit.value
        item.time = time.value
        span.innerHTML = time.value
        izmenit.value = ''
        time.value = ''
    }
    box.ondblclick = () => {
        modal.classList.remove('hide')
    };

    close_btns.onclick = () => {
        modal.classList.add('hide')
    }
  }
}


