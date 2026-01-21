
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register, 
    handleSubmit, 
    watch,
    // formState: { errors, },
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) { 
    // API call ko simulate krte hain
    await new Promise(resolve => setTimeout(resolve, 2000));
    // found that we are able to submit multiple times even when the 
    // previous submission handling is not yet completed
    console.log("submitted data:", data); 
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input id='firstName' type="text" className={errors.firstName ? 'input-error': ''}
          {...register(
            "firstName", 
            {
              required: true, 
              // minLength: 3
              minLength: {value: 3, message: "Min length atleast 3"},
              maxLength: {value: 6, message: "Max length allowed is 6"}
            }
          )} />
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>

      <br />
      <div>
        <label htmlFor="middleName">Middle Name: </label>
        <input id='middleName' type="text" {...register("middleName")} />
      </div>
      
      <br />
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input id='lastName' type="text" {...register("lastName")} />
      </div>

      <br />
      <div>
        <label htmlFor="userName">User Name: </label>
        <input id='userName' type="text" 
          {...register(
            "userName",
            {pattern: {value: /^[A-Za-z0-9]+$/i, message: "Not as per rules"}}
          )} />
        {errors.userName && <p className='error-msg'>{errors.userName.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} value={ isSubmitting ? "Submitting..." : "Submit" } />
    </form>
  )
}

export default App
