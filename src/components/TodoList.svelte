<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import TodoItem from './TodoItem.svelte';
	import type { Todo } from '../app/todos';

	const dispatch = createEventDispatcher();

	export let todos: Todo[] = [];

	function toggleTodoCompleted(e: CustomEvent): void {
		dispatch('toggle', e.detail);
	}

	function removeTodo(e: CustomEvent): void {
		dispatch('remove', e.detail);
	}
</script>

<ul>
	<ul>
		{#each todos as todo (todo.id)}
			<TodoItem {todo} on:remove={removeTodo} on:toggle={toggleTodoCompleted} />
		{/each}
	</ul>
</ul>
