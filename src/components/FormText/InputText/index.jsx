import React from 'react'

function InputText({ register, error, label, id, name, type }) {
    return <>
        <label htmlFor={id}>{label}</label>
        <input

            id={id}
            name={name}
            type={type}
            {...register([name].toString(), { required: "this field" })}
        />
        {error && <div>{error.message}</div>}
    </>
}

export default InputText;