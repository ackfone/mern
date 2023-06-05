import React, {useState} from 'react'
import './entry.css'
import {LoginForm} from '../../components/login/Login.page'
import { ResetPassword } from "../../components/password-reset/password.reset";

export const Login = () => {
    // state
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [formSelect, setformSelect] = useState('form-login')
  
    const login_detail = (e) => {
      const {name, value} = e.target
      switch (name) {
        case 'email':
          setEmail(value)
          break;
  
        case 'password':
          setPassword(value)
          break;
      
        default:
          break;
      }
    }
  
    const formSubmit = (e) =>{
      e.preventDefault()
      if (!email || !password) {
        return alert('all field required !')
      }
      console.log(email, password);
    }

    const resetEmailSubmit = (e) =>{
      e.preventDefault()
      if (!email) {
        return alert('Please enter email')
      }
      console.log(email);
    }

    const formSwitcher = frmType =>{
      setformSelect(frmType)
    }

  return (
    <div className='bg-secondary overall'>
      <div className='jumbotron p-3 pt-4'>
        {formSelect === 'form-login' && 
          <LoginForm 
            login_detail={login_detail} 
            formSubmit={formSubmit} 
            formSwitcher={formSwitcher}
            email = {email} 
            password = {password}
          /> 
        }
        {formSelect === 'form-reset' && 
          <ResetPassword
            login_detail={login_detail} 
            resetEmailSubmit={resetEmailSubmit} 
            formSwitcher={formSwitcher}
            email = {email} 
          />
        }
      </div>
    </div>
  )
}