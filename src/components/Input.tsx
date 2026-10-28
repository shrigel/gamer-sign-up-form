type InputProps = {
    id: string
    type?: string
    value: string
    setValue: (value: string) => void
    label: string
    helperText?: string
    className?: string
    [key: string]: unknown
}

export default function Input({
    id,
    type = 'text',
    value,
    setValue,
    label,
    helperText,
    className,
    ...props
}: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="preset-6 text-neutral-400"><span className='text-lime-500'>{'>'}</span> {label}</label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`
                    preset-4 text-white bg-neutral-950 border border-neutral-600 px-4 py-2
                    focus:outline-none focus:border-lime-500
                    focus:ring-2 focus:ring-lime-500
                    focus:ring-offset-1 focus:ring-offset-neutral-950 transition-all
                    ${className}
                `}
                required
                {...props}
            />
            {helperText && <span className="preset-7 text-neutral-600">{helperText}</span>}
        </div>
    )
}