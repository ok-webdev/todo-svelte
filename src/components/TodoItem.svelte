<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Todo } from '../app/todos';
	export let todo: Todo;

	const dispatch = createEventDispatcher();

	function toggleTodoCompleted(id: number): void {
		dispatch('toggle', id);
	}

	function removeTodo(id: number): void {
		dispatch('remove', id);
	}
</script>

<li class={todo.completed ? 'completed' : ''}>
	<input type="checkbox" on:click={() => toggleTodoCompleted(todo.id)} />
	{todo.title}
	<button on:click={() => removeTodo(todo.id)}>X</button>
</li>

<style>
	.completed {
		text-decoration: line-through;
	}
</style>
