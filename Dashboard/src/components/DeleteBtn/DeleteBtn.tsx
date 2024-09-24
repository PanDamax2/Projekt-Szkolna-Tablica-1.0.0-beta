import { DeleteBtnProps } from "../../types/components/DeleteBtn";

export function DeleteBtn({ children, onClick }: DeleteBtnProps) {
	return (
		<button 
		type="button"
		onClick={onClick}
		className='text-2xl lg:text-3xl w-40 mt-1 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-700 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80'>
			{children}
		</button>
	)
}
