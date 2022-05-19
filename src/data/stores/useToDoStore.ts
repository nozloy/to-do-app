import create from 'zustand'
import { persist } from "zustand/middleware"

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

export const useToDoStore = create(persist<ToDoStore>((set, get) => ({
    todos: [],
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
                isComplited:ToDo._id === _id ? !isComplited : ToDo.isComplited,
                
                
            }))
        })
    },
    removeTodo: (_id: string) => {
        const { todos } = get();
        set({
            todos: todos.filter((ToDo) => ToDo._id !== _id)
        })
    },
     }),
         {
             name: 'ToDoLocalStorage',
         }
))