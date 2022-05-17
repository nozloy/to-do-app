import React from 'react'
import CheckBox from './CheckBox'
import cn from 'classnames'
import { BsTrash } from 'react-icons/bs'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-4 w-full'>
			<button
				className='flex items-center'
				onClick={() => changeTodo(todo._id)}
			>
				<CheckBox isComplited={todo.isComplited} />
				<span
					className={cn('text-white', {
						'line-through text-pink-400 transition-colors ease-in duration-500 ':
							todo.isComplited,
						'text-white transition-colors ease-in duration-500 ':
							!todo.isComplited,
					})}
				>
					{todo.title}
				</span>
			</button>
			<button onClick={() => removeTodo(todo._id)}>
				<BsTrash
					size={22}
					className='text-gray-600 hover:text-pink-400 transition-colors ease-in-out duration-300'
					onClick={removeTodo}
				/>
			</button>
		</div>
	)
}

export default TodoItem
