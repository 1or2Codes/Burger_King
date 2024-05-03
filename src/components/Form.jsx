import { useState } from 'react'

function Form() {
  const [formDetails, setformDetails] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  function updateForm(e){
    const {name, value} = e.target


    setformDetails(prev => {
      return {...prev, [name]: value}
    })

    console.log(formDetails)
  }
  return (
    <div className='w-3/5 bg-white mt-10 ml-auto mr-auto rounded-3xl'>
        <form action="">
            <header className='flex justify-evenly p-5 font-medium'>
                <div>Sign Up</div>
                <div>Sign In</div>
        </header>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text"
              name='firstName' 
              id='firstName'
              value={formDetails.firstName}
              className='border block'
              onChange={updateForm}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text"
              name='lastName' 
              id='lastName'
              value={formDetails.lastName}
              className='border block'
              onChange={updateForm}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              name='email' 
              id='email'
              value={formDetails.email}
              className='border block'
              onChange={updateForm}
            />
          </div>
        </form>
    </div>
  )
}

export default Form