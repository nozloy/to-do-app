import React, { useState } from 'react'

export const CreateTodoField = ({ setTodos }) => {
	const [title, setTitle] = useState('')
	const addTodo = (title) => {
		setTodos((prev) => [
			{
				_id: new Date().toISOString(),
				title,
				isComplited: false,
			},
			...prev,
		])
		setTitle('')
	}
	return (
		<div className='flex items-center justify-between mb-6 rounded-2xl p-4 w-full border-slate-700 border-2'>
			<input
				className='bg-transparent w-full border-none outline-none text-white'
				type={'text'}
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				onKeyPress={(e) => e.key === 'Enter' && addTodo(title)}
				placeholder='Добавить задачу (или лису)'
			/>
		</div>
	)
}

export default CreateTodoField
