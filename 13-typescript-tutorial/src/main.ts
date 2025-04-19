type Task = {
  readonly id?: number;
  description: string;
  isCompleted: boolean;
};

type TaskManager = {
  // usage: task Manipulation - start
  add(tasks: Task[], task: Task): Task[];
  toggle(tasks: Task[], id: number): Task[];
  remove(tasks: Task[], id: number): Task[];
  // usage: task Manipulation - end

  // usage: localStorage - start
  store(tasks: Task[]): void;
  restore(): Task[];
  // usage: localStorage - end

  // usage: DOM Manipulation - start
  renderAll(tasks: Task[], parent: HTMLElement): void;
  render(tasks: Task, parent: HTMLElement): void;
  // usage: DOM Manipulation - end
};

const taskManager: TaskManager = {
  add(tasks, task) {
    const newTask: Task = {
      ...task,
      id: Math.floor(Math.random() * Date.now()),
    };
    return [...tasks, newTask];
  },
  toggle(tasks, id) {
    return tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
  },
  remove(tasks, id) {
    return tasks.filter((task) => task.id !== id);
  },

  // storage
  store(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },
  restore() {
    let persistedTasks = localStorage.getItem('tasks');

    if (persistedTasks === null) {
      return [];
    }

    return JSON.parse(persistedTasks);
  },

  // render
  render({ id, description, isCompleted }, parentElement) {
    if (id === undefined) {
      return;
    }

    // checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isCompleted;
    checkbox.setAttribute('data-id', id.toString());
    checkbox.addEventListener('change', handleToggle);

    // label
    const label = document.createElement('label');
    label.textContent = 'Toggle';
    label.appendChild(checkbox);

    // button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('btn');
    removeBtn.classList.add('btn-hipster');
    removeBtn.setAttribute('data-id', id.toString());
    removeBtn.addEventListener('click', handleRemove);

    // div
    const div = document.createElement('div');
    div.appendChild(label);
    div.appendChild(removeBtn);

    // span
    const span = document.createElement('span');
    span.textContent = description;

    // li
    const li = document.createElement('li');
    li.appendChild(span);
    li.appendChild(div);

    parentElement.appendChild(li);
  },
  renderAll(tasks, parentElement) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
    tasks.forEach((task) => {
      this.render(task, parentElement);
    });
  },
};

const taskForm = document.querySelector('.form')! as HTMLFormElement;

const formInput = document.querySelector('.form-input')! as HTMLInputElement;

const taskList = document.querySelector('.list')! as HTMLUListElement;

let tasks: Task[];

tasks = taskManager.restore();
taskManager.renderAll(tasks, taskList);

function handleSubmit(event: SubmitEvent): void {
  event.preventDefault();

  const taskDescription = formInput.value.trim();

  if (taskDescription === '') {
    window.alert('Please provide a task description');
    formInput.focus();
    return;
  }

  tasks = taskManager.add(tasks, {
    description: taskDescription,
    isCompleted: false,
  });
  taskManager.renderAll(tasks, taskList);
  taskManager.store(tasks);

  taskForm.reset();
  formInput.focus();
}

function handleToggle(event: Event) {
  const checkbox = event.currentTarget as HTMLElement;
  const id = new Number(checkbox.getAttribute('data-id')).valueOf();

  tasks = taskManager.toggle(tasks, id);
  taskManager.renderAll(tasks, taskList);
  taskManager.store(tasks);
}

function handleRemove(event: Event) {
  const btn = event.currentTarget as HTMLElement;
  const id = new Number(btn.getAttribute('data-id')).valueOf();

  tasks = taskManager.remove(tasks, id);
  taskManager.renderAll(tasks, taskList);
  taskManager.store(tasks);
}

taskForm.addEventListener('submit', handleSubmit);
