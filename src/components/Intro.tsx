import '../index.css';

function Intro() {
	return (
		<div style={{ height: '500px' }} className='bg-headshot bg-contain bg-no-repeat'>
			<h1 className="
				text-primary-persian-green
				text-center 
				text-4xl 
				font-subheader"
				>
					Welcome to my site!
			</h1>
			<p className='font-paragraph'>
				I'm Myrrh (he/him/his) and I am a Computer Science student at 
				Worcester Polytechnic Institute pursuing a robotics engineering minor.
			</p>
		</div>
	);
}

export default Intro;