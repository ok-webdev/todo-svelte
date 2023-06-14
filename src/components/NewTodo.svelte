<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let newTodoTitle: string = '';

	function addTodo() {
		if (newTodoTitle.trim()) {
			dispatch('addTodo', newTodoTitle);
			newTodoTitle = '';
		}
	}
</script>

<form on:submit={addTodo}>
	<input type="text" placeholder="Enter a new todo..." bind:value={newTodoTitle} />
	<button type="submit">Add Todo</button>
</form>
