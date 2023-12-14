"use client";

import React, { useState, useEffect} from 'react'; 
// import Nav from "/app/home/nav/Nav";
// import ImageUploader from "./Uploader"

const Setting = () => {
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [userName, setUserName] = useState(''); 
  const [bio, setBio] = useState(''); 
  const [profession, setProfession] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 

  // Submit 
  useEffect(() => { 
    validateForm(); 
}, [userName, email, ]); 
// Validate form 
const validateForm = () => { 
    let errors = {}; 

    if (!userName) { 
        errors.userName = 'Name is required.'; 
    } 

    if (!email) { 
        errors.email = 'Email is required.'; 
    } else if (!/\S+@\S+\.\S+/.test(email)) { 
        errors.email = 'Email is invalid.'; 
    } 

    setErrors(errors); 
    setIsFormValid(Object.keys(errors).length === 0); 
}; 
// Submit 
const handleSubmit = () => { 
    if (isFormValid) { 
        console.log('Form submitted successfully!'); 
    } else { 
        console.log('Form has errors. Please correct them.'); 
    } 
}; 

  return (
    <main className="mt-5 justify-center items-center flex flex-col " >
     {/* <Nav/> */}
      <div className="text-center">
        <h1 className="text-3xl text-ui_primary font-semibold" >User Profile Settings</h1>
      </div>
      {/* <div className="mt-5">
      <ImageUploader />
      </div> */}
      
      <form className="mt-10">
        <div className="md:flex md:flex-row ">
          <div className="flex flex-col mt-5">
            <label className="text-2xl" style={styles.label}>FirstName</label>
              <input type="text" id="inputa" className=" mt-2" placeholder="John" value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                /> 
                {errors.name && <p style={styles.error}>{errors.name}</p>}
          </div>
          <div className="flex flex-col mt-5 md:ml-5">
            <label className="text-2xl" style={styles.label}>LastName</label>
            <input type="text" id="inputb" className=" mt-2" placeholder="Doe"  value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                /> 
                {errors.name && <p style={styles.error}>{errors.name}</p>}
          </div>
        </div>
        <div>
          <label className="text-2xl" style={styles.label}>UserName</label>         
          <input type="text" id="input" placeholder="JohnD234" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="flex flex-col mt-5">
          <label className="text-2xl" style={styles.label}>E-mail</label>
          <input type="email" id="input" placeholder="emails@gmail.com" className=""  value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                /> 
                {errors.email && <p style={styles.error}>{errors.email}</p>} 
        </div>
        <div className="flex flex-col mt-5">
          <label className="text-2xl" style={styles.label}>Profession</label>
          <input type="text" id="input" placeholder="A developer" className=" mt-2"  value={profession} 
                    onChange={(e) => setProfession(e.target.value)}  />
        </div>
        <div className="flex flex-col mt-5">
          <label className="text-2xl" style={styles.label}>Bio</label>
          <textarea type="text" id="input" placeholder="I'm a ......" className=" mt-2"   value={bio} 
                    onChange={(e) => setBio(e.target.value)} />
        </div>
        <div className="mt-5 cursor">
          <button id="button" onClick={handleSubmit} >Save Changes</button>
        </div>
      </form>
    </main>
  );
};

export default Setting;

const styles ={
  error: { 
    color: 'red', 
    fontSize: '14px', 
    marginBottom: '6px', 
}, 
 label: {
   color: 'black',
   fontSize: '20px', 
 }
 
}