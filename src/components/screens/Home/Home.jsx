import React from 'react'
import TodoItem from './items/TodoItem'
import CreateTodoField from './items/CreateTodoField'
import { useToDoStore } from '../../../data/stores/useToDoStore.ts'

const Home = () => {
	// const [todos, setTodos] = useState(data)
	// const changeTodo = (id) => {
	// 	const copy = [...todos]
	// 	const current = copy.find((t) => t._id === id)
	// 	current.isComplited = !current.isComplited
	// 	setTodos(copy)
	// }
	// const removeTodo = (id) => {
	// 	setTodos([...todos].filter((t) => t._id !== id))
	// }
	const [todos, newTodo, editTodo, removeTodo] = useToDoStore((state) => [
		state.todos,
		state.newTodo,
		state.editTodo,
		state.removeTodo,
	])
	return (
		<div className='w-4/5 mx-auto'>
			<h1 className='text-white text-2xl font-bold text-center mb-10'>
				To - Do App by Almir Sadykoff
			</h1>
			<CreateTodoField newTodo={newTodo} />
			{todos.map((todo) => (
				<TodoItem
					key={todo._id}
					todo={todo}
					editTodo={editTodo}
					removeTodo={removeTodo}
				/>
			))}
		</div>
	)
}

export default Home
