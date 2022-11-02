window.addEventListener("load", () => {
  // selects elements in HTML
  const form = document.getElementById("new-task-form");
  const input = document.getElementById("new-task-input");
  const list_el = document.getElementById("tasks-container");
  // attaches event listener "submit" to the form.
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents defaults behavior

    const task = input.value;
    // console.log(task);

    // prevents user from entering nothing and submitting
    if (!task) {
      alert("Please fill out the task");
      return;
    }
    // creating a new div to store the task we add, class="task"
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    task_content_el.innerText = task;

    // appendChild is attaching to it's parent, creates input field.
    list_el.appendChild(task_el);
    task_el.appendChild(task_content_el);
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    // task_input_el.setAttribute("readonly", "readonly");

    // task_content_el.appendChild(task_input_el);

    // const task_actions_el = document.createElement("div");
    // task_actions_el.classList.add("actions");

    // const task_edit_el = document.createElement("button");
    // task_edit_el.classList.add("edit");
    // task_edit_el.innerHTML = "Edit";

    // const task_delete_el = document.createElement("button");
    // task_delete_el.classList.add("delete");
    // task_delete_el.innerHTML = "delete";

    // task_actions_el.appendChild(task_edit_el);
    // task_actions_el.appendChild(task_delete_el);

    // task_el.appendChild(task_actions_el);

    // list_el.appendChild(task_el);

    // input.value = "";
  });
});
