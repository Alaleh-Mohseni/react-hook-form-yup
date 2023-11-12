function FormGroup({
    htmlFor,
    labelText,
    type,
    name,
    id,
    placeholder,
    inputClass,
    errors,
    register
}) {

    return (
        <div>
            <label
                htmlFor={htmlFor}
                className="block mb-2 text-sm font-medium"
            >
                {labelText}
            </label>
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                {...register(name)}
                className={`${inputClass} bg-gray-700 border border-gray-600 placeholder-gray-400 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 ring-offset-gray-800`}
            />
            {errors ? <p className="text-red-500 text-sm">{errors?.message}</p> : null}
        </div>
    )
}

export default FormGroup