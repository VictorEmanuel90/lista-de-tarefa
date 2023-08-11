import {useState} from 'react'

const TodoForms = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category)
        setValue("")
        setCategory("")
    }

  return (
    <div className='todo-forms'>
        <h2>Criar tarefas</h2>
        <form onSubmit={handSubmit}>
            <input type="text" value={value} placeholder='Digite o titulo' onChange={(e) => setValue(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione</option>
                <option value="estudo">Estudo</option>
                <option value="trabalho">Trabalho</option>
                <option value="lazer">Lazer</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForms