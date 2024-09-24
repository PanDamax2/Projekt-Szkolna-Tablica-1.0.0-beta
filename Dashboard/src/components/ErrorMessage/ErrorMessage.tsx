interface ErrorMessageProps {
	message?: {
		response?: {
			data?: {
				message?: string;
			};
		};
	} | string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
	const errorMessage =
		typeof message === 'object' ? message?.response?.data?.message : message;

	return (
		<div className="text-red-600">
			<p>Błąd: {errorMessage || 'Brak połączenia z serwerem.'}</p>
		</div>
	);
}
