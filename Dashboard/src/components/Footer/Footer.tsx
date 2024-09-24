export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className='flex items-center justify-between mt-auto p-4 text-[#737e8f] text-2xl'>
			<div className=''>PanDamax</div>
			<div>&copy; Prawa Zastrzeżone {currentYear}</div>
		</div>
	)
}
