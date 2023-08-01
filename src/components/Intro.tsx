import '../index.css';

function Intro() {
	return (
		<div style={{ height: '500px' }} className='flex flex-row'>
			<div className='hidden sm:block bg-headshot bg-contain'>
				<img
							src="./headshot.png"
							alt="Myrrh Khan's face"
							max-width="100%"
				/>
			</div>
			<div className='bg-primary-saffron w-full'>
				<h1 className="
					text-primary-persian-green
					text-center
					text-4xl
					font-subheader"
					>
						Welcome to my site!
				</h1>
				<p className='font-paragraph text-center'>
					I'm Myrrh (he/him/his) and I am a Computer Science student at
					Worcester Polytechnic Institute pursuing a robotics engineering minor.
				</p>
			</div>
		</div>
	);
}

export default Intro;