<script lang="ts">
	import { type Todo, TodoService } from '../app/todos';
	import { onMount } from 'svelte';
	import TodoList from '../components/TodoList.svelte';
	import NewTodo from '../components/NewTodo.svelte';

	let todoService: TodoService;
	let todos: Todo[] = [];

	onMount(() => {
		todoService = new TodoService();
		todos = todoService.getTodos();
	});

	function addTodo(e: CustomEvent): void {
		todoService.addTodo(e.detail);
		todos = todoService.getTodos();
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

<NewTodo on:addTodo={addTodo} />

<TodoList {todos} on:toggle={toggleTodoCompleted} on:remove={removeTodo} />
