export interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
	id: string
	name: string
	// onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onChange: (file: File | null) => void
}
