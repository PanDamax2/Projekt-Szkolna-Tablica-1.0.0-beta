import logoIcon from '../../assets/icons/favicon.png'
import { LogoProps } from '../../types/components/Logo'

export function Logo({ shown }: LogoProps) {
	return (
		<div className='flex justify-center items-center  w-full gap-4 mx-auto'>
			<img className={`w-24 ${shown ? 'lg:w-22' : 'lg:w-32'}`} src={logoIcon} alt='Logo' />
			{shown && <h1 className='text-4xl text-white  font-satoshi font-bold'>Szkolny Panel</h1>}
		</div>
	)
}
