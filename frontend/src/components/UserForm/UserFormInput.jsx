const UserFormInput = ({
  labelName,
  inputType,
  inputValue,
  setValue,
  inputPlaceholder,
}) => {
  return (
    <label className="user-form__label">
      {labelName}
      <input
        type={inputType}
        value={inputValue}
        className="user-form__input"
        onChange={(e) => setValue(e.target.value)}
        placeholder={inputPlaceholder}
      />
    </label>
  )
}

export default UserFormInput
