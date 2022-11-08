import React from 'react'
import s from './style.module.sass'
import { login_request, writeCookie  } from '../../request/dummyjson/auth'

export default function AuthForm() {
  
  const auth_callback = ({token}) =>{
    writeCookie('token_value', token);
  }

  const error_callback = ({message}) => {
    alert(message);
  }

  const submit = event =>{
    event.preventDefault();
    const {login, password} = event.target;
    login_request(login.value, password.value, auth_callback, error_callback);
  }

  return (
    <form onSubmit={submit} className={s.form}>
        <input type="text" name='login' placeholder='login'/>
        <input type="text" name='password' placeholder='password'/>
        <button>Войти</button>
    </form>
  )
}
