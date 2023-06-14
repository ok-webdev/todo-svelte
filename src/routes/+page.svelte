<!-- src/routes/index.svelte -->

<script lang="ts">
	import { type Todo, TodoService } from '../app/todos';
	import { onMount } from 'svelte';

	let newTodoTitle = '';
	let todoService: TodoService;
	let todos: Todo[] = [];

	onMount(() => {
		todoService = new TodoService();
		todos = todoService.getTodos();
	});

	function addTodo() {
		if (newTodoTitle.trim() !== '') {
			todoService.addTodo(newTodoTitle);
			todos = todoService.getTodos();
			newTodoTitle = '';
		}
	}

	function toggleTodoCompleted(id: number) {
		todoService.toggleTodoCompleted(id);
		todos = todoService.getTodos();
	}

	function removeTodo(id: number) {
		todoService.removeTodo(id);
		todos = todoService.getTodos();
	}
</script>

<h1>Todo App</h1>

<input type="text" placeholder="Enter a new todo..." bind:value={newTodoTitle} />
<button on:click={addTodo}>Add Todo</button>

<ul>
	{#each todos as todo (todo.id)}
		<li class={todo.completed ? 'completed' : ''} on:click={() => toggleTodoCompleted(todo.id)}>
			{todo.title}
			<button on:click={() => removeTodo(todo.id)}>X</button>
		</li>
	{/each}
</ul>

<style>
	.completed {
		text-decoration: line-through;
	}
</style>
