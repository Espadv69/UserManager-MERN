import UserFormInput from './UserFormInput'

const Form = ({
  onSubmit,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  identificationNumber,
  setIdentificationNumber,
  error,
}) => {
  return (
    <form className="user-form" onSubmit={onSubmit}>
      <UserFormInput
        labelName="First Name:"
        inputType="text"
        inputValue={firstName}
        setValue={setFirstName}
        inputPlaceholder="Enter First Name"
      />

      <UserFormInput
        labelName="Last Name:"
        inputType="text"
        inputValue={lastName}
        setValue={setLastName}
        inputPlaceholder="Enter Last Name"
      />

      <UserFormInput
        labelName="Email:"
        inputType="email"
        inputValue={email}
        setValue={setEmail}
        inputPlaceholder="Enter Email"
      />

      <UserFormInput
        labelName="Identification Number:"
        inputType="text"
        inputValue={identificationNumber}
        setValue={setIdentificationNumber}
        inputPlaceholder="Enter Identification Number"
      />

      {error && <p className="user-form__error">{error}</p>}
      <button className="user-form__button">Add User</button>
    </form>
  )
}

export default Form
