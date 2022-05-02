function Input({ name, id, type, placeholder, handleOnChange, required }) {
  return (
    <input type={type} id={id} name={name} placeholder={placeholder} onChange={handleOnChange} required={required} />
  );
}

export default Input