import React, { useState } from 'react'
import TodoItem from './items/TodoItem'
import CreateTodoField from './items/CreateTodoField'

const data = [
	{
		_id: 'ferfgedr',
		title: 'Помыть лису',
		isComplited: false,
	},
	{
		_id: 'gvndfuirogvbndfo',
		title: 'Почесать лису',
		isComplited: false,
	},
	{
		_id: 'vndfjnvodfi;',
		title: 'Накормить лису',
		isComplited: false,
	},
]

const Home = () => {
	const [todos, setTodos] = useState(data)
	const changeTodo = (id) => {
		const copy = [...todos]
		const current = copy.find((t) => t._id === id)
		current.isComplited = !current.isComplited
		setTodos(copy)
	}
	const removeTodo = (id) => {
		setTodos([...todos].filter((t) => t._id !== id))
	}

	return (
		<div className='w-4/5 mx-auto'>
			<h1 className='text-white text-2xl font-bold text-center mb-10'>
				To-Do App by Almir Sadykoff
			</h1>
			<CreateTodoField setTodos={setTodos} />
			{todos.map((todo) => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
		</div>
	)
}

export default Home
