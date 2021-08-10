import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'

import Message from '../components/Message'
import Loader from '../components/Loader'
import {getUserDetails,updateUser} from '../actions/userActions'
import { USER_UPDATE_RESET } from '../constants/userConstants'
const UserEditScreen = ({match,history}) => {
    const userId = match.params.id
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [isAdmin,setisAdmin] = useState(false)
    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.userDetails)
    const {loading,error,user} = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const {loading: loadingUpdate,error: errorUpdate,success: successUpdate} = userUpdate


    useEffect(()=>{
        if(successUpdate){
            dispatch({type: USER_UPDATE_RESET})
            history.push('/admin/userList')
        }else
        {
            if(!user.name || user._id !== userId){
                dispatch(getUserDetails(userId))
           }
           else {
               setName(user.name)
               setEmail(user.email)
               setisAdmin(user.isAdmin)
           }
        }

        
    },[dispatch,user,history,userId,successUpdate])
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({_id:userId,name, email,isAdmin}))
       
    }
    return (
        <>
            <Link to ='/admin/userList' className='btn btn-light my-3'>
                GoBack


            </Link>
            <FormContainer>
            <h1>Edit User</h1>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>  }
            
            {loading ? <Loader/> : error? <Message variant='danger'>{error}</Message> : (
                <Form onSubmit ={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label> Name </Form.Label>
                    <Form.Control 
                        type='name' 
                        placeholder='Enter name' 
                        value = {name} 
                        onChange={(e)=> setName(e.target.value)}>

                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label> Email Address</Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder='Enter email' 
                        value = {email} 
                        onChange={(e)=> setEmail(e.target.value)}>

                        </Form.Control>
                </Form.Group>

                <Form.Group controlId='isAdmin'>
                    
                    <Form.Check 
                        type='checkBox' 
                        label= 'Is Admin?'
                        value = {isAdmin}
                        checked = {isAdmin} 
                        onChange={(e)=> setisAdmin(e.target.checked)}>

                        </Form.Check>
                </Form.Group>

                
                <Button type = 'submit' variant='primary'>
                    Update
                </Button>
            </Form>

            )}
            
            
        </FormContainer>
        </>
       
            
        
    )
}

export default UserEditScreen
