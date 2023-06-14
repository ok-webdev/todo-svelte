<!-- src/routes/index.svelte -->

<script lang="ts">
	import { type Todo, TodoService } from '../app/todos';
	import { onMount } from 'svelte';
	import TodoList from '../components/TodoList.svelte';

	let newTodoTitle = '';
	let todoService: TodoService;
	let todos: Todo[] = [];

	onMount(() => {
		todoService = new TodoService();
		todos = todoService.getTodos();
	});

	function addTodo(): void {
		if (newTodoTitle.trim() !== '') {
			todoService.addTodo(newTodoTitle);
			todos = todoService.getTodos();
			newTodoTitle = '';
		}
	}

	function toggleTodoCompleted(e: CustomEvent): void {
		todoService.toggleTodoCompleted(e.detail);
		todos = todoService.getTodos();
	}

	function removeTodo(e: CustomEvent) {
		todoService.removeTodo(e.detail);
		todos = todoService.getTodos();
	}
</script>

<h1>Todo App</h1>

<input type="text" placeholder="Enter a new todo..." bind:value={newTodoTitle} />
<button on:click={addTodo}>Add Todo</button>

<TodoList {todos} on:toggle={toggleTodoCompleted} on:remove={removeTodo} />
