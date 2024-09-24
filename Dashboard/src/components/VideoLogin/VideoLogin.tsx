import loginVideo from '../../assets/video/login.mp4'

export function VideoLogin() {
	return (
		<div className='hidden lg:block lg:w-1/2 relative'>
			<video
				autoPlay
				muted
				loop
				playsInline
				className='absolute left-0 hidden lg:block inset-0 w-full h-full object-cover'>
				<source src={loginVideo} type='video/mp4' />
			</video>
			<div className='absolute inset-0 bg-black opacity-50'></div>
			<div className='absolute inset-0 flex items-center justify-center p-4'>
				<blockquote className='text-white text-center text-2xl lg:text-4xl font-bold max-w-lg'>
					<p>"Your limitation - it's only your imagination."</p>
					<footer className='mt-4'>— Anonymous</footer>
				</blockquote>
			</div>
		</div>
	)
}
