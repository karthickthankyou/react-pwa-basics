import axios from "axios"

const URL = "https://jsonplaceholder.typicode.com/todos/"

export const fetchTodo = async (query) => {
    const { data } = await axios.get(URL + query)
    console.log(data, 'received')
    return data
}
