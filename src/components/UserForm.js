import { useState } from "react";
const UserForm = ({ formName, onSave }) => {
    const [user,setUser]=useState({id:Math.floor(Math.random()*10000)+1,
        first_name:'',last_name:'',avatar:'',email:''});
        const onSubmit = (e)=>{
            e.preventDefault()
            onSave(user)
            setUser({first_name:'',last_name:'',avatar:'',email:''})
        }
  return (
    <form onSubmit={onSubmit}>
      <h3>{formName}</h3>
      <label htmlFor="fname">First name</label>
      <input type="text" id="fname" name="fname" value={user.first_name} onChange={(e)=>setUser({...user,first_name:e.target.value})}/>
      <label htmlFor="lname">Last name</label>
      <input type="text" id="lname" name="lname" value={user.last_name} onChange={(e)=>setUser({...user,last_name:e.target.value})}/>
      <label htmlFor="avatar">Avatar URL</label>
      <input type="text" id="avatar" name="avatar" value={user.avatar} onChange={(e)=>setUser({...user,avatar:e.target.value})}/>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
      <input type="submit" value="Save" />
    </form>
  );
};

export default UserForm;
