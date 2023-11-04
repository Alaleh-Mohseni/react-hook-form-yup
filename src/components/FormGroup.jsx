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
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {labelText}
            </label>
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                {...register(name)}
                className={`${inputClass} bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
            />
            {errors ? <p className="text-red-500 text-sm">{errors?.message}</p> : null}
        </div>
    )
}

export default FormGroup