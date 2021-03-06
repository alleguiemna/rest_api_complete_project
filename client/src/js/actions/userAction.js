import { ADD, DELETE, EDIT, GET } from "../types";
import axios from 'axios'


export const addUser = (fullName, email, phone) => async (dispatch) => {
    try {
        const newUser = { fullName, email, phone };
        let res = await axios.post('/users/add', newUser)
        dispatch({
            type: ADD,
            payload: res.data
        })
    } catch (error) {
        alert('post error')
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        let res = await axios.delete(`/users/delete/${id}`)
        dispatch({
            type: DELETE,
            payload: res.data
        })
    } catch (error) {
        alert('delete error')
    }
}

export const getUser = () => async (dispatch) => {
    try {
        let res = await axios.get('/users/get')
        dispatch({
            type: GET,
            payload: res.data
        })
    } catch (error) {
        alert('get error')
    }
}

export const editUser = (id, fullName, email, phone) => async (dispatch) => {
    try {
        let editedUser = { fullName, phone, email }
        let res = await axios.put(`/users/update/${id}`, editedUser)
        dispatch({
            type: EDIT,
            payload: res.data
        })
    } catch (error) {
        alert('put error')
    }
}

// export const editUser = (id, fullName, email, phone) => async (dispatch) =>{
//     try {
//         const editedUser = {
//             fullName, 
//             email,
//             phone
//         }
//         const res = await axios.put(`/users/update/${id}`, editedUser);
//         dispatch({
//             type:EDIT,
//             payload:res.data,
//         })
//     } catch (error) {
//         alert('put error')
//     }
// }