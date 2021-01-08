document.addEventListener("DOMContentLoaded", () => {
	let todoForm = document.querySelector("#create-task-form");
	let todoInput = document.querySelector("#new-task-description");
	let todoList = document.querySelector("#tasks");

	todoForm.addEventListener("submit", handleSubmit);

	function handleSubmit(event) {
		event.preventDefault();
		let todo = todoInput.value;
		let todoHTML = `<li>${todo}<button class="delete-btn">X</button></li>`;
		todoList.innerHTML += todoHTML;
		todoInput.value = "";
	}
	todoList.addEventListener("click", handleDeleteItem);
	function handleDeleteItem(e) {
		e.target.parentElement.remove();
	}
});
