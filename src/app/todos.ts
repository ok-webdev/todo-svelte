export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export class TodoService {
	private todos: Todo[] = [];

	getTodos(): Todo[] {
		return this.todos;
	}

	addTodo(title: string): void {
		const newTodo: Todo = {
			id: Date.now(),
			title,
			completed: false
		};

		this.todos = [...this.todos, newTodo];
	}

	toggleTodoCompleted(id: number): void {
		this.todos = this.todos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		);
	}

	removeTodo(id: number): void {
		this.todos = this.todos.filter((todo) => todo.id !== id);
	}
}
