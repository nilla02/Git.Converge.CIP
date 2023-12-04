export default function StatusLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-bold text-rose-600 ` + className}>
            {value ? value : children}
        </label>
    );
}
