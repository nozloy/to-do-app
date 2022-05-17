import create from 'zustand'

interface ToDo {
    _id: string;
    title: string;
    isComplited: boolean;
}

interface ToDoStore {
    todos: ToDo[];
    newTodo: (title: string) => void;
    editTodo: (_id: string, title: string, isComplited: boolean) => void;
    removeTodo: (_id: string) => void;
}

export const useStore = create<ToDoStore>((set, get) => ({
	    todos: [
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
    ],
    newTodo: (title: string) => {
        const { todos } = get();
        const newTodo = {
            _id: (new Date().toISOString()),
            title,
            isComplited: false
        }
        set({
            todos: [newTodo].concat(todos),
        })
    },
    editTodo: (_id: string, title: string, isComplited: boolean) => {
        const { todos } = get();
        set({
            todos: todos.map((ToDo) => ({
                ...ToDo,
                title: ToDo._id === _id ? title : ToDo.title,
                isComplited:ToDo._id === _id ? !ToDo.isComplited : ToDo.isComplited,
                
                
            }))
        })
    },
    removeTodo: (_id: string) => {
        const { todos } = get();
        set({
            todos: todos.filter((ToDo) => ToDo._id !== _id)
        })
    },
}))