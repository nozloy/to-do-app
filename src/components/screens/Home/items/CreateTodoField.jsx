import React, { useState, useCallback } from 'react'

// interface CreateTodoFieldProps {
// 	addTodo: (title: string) => void;
// }

const CreateTodoField = ({ newTodo }) => {
	const [title, setTitle] = useState('')
	const addTodo = useCallback(() => {
		newTodo(title)
		setTitle('')
	}, [newTodo, title])
	return (
		<div className='flex items-center justify-between mb-6 rounded-2xl p-4 w-full border-slate-700 border-2'>
			<input
				className='bg-transparent w-full border-none outline-none text-white'
				type={'text'}
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				onKeyPress={(e) => e.key === 'Enter' && addTodo(title)}
				placeholder='Добавить задачу'
			/>
		</div>
	)
}

export default CreateTodoField
