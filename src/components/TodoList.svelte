<script lang="ts">
	import TodoItem from './TodoItem.svelte';
	import type { Todo } from '../app/todos';

	export let todos: Todo[] = [];
</script>

<ul>
	{#each todos as todo (todo.id)}
		<TodoItem {todo} on:remove on:toggle />
	{/each}
</ul>
