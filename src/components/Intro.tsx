import "../index.css";

export default function Intro() {
  return (
    <div style={{ height: "750px" }} className='flex flex-row bg-contain'>
      {/* <div className='hidden sm:block' style={{ height: "600px" }}>
        <img
          src='./headshot.png'
          alt="Myrrh Khan's face"
          className='object-scale-down top-left'
          style={{ height: "600px" }}
        />
      </div> */}
      <div
        className='
				flex
				flex-col
        overflow-hidden relative'
      >
        <div className=''>
          <img className='intro-bg' src='headshot.png' alt='my face' />
        </div>
        <div className='relative'>
          <h1
            className='
                    text-primary-persian-green
                    text-center
                    text-3xl
                    font-subheader mt-20'
          >
            Hi
          </h1>
          <p className='font-paragraph text-center text-small font-bold text-primary-charcoal pl-20 pr-20'>
            I'm Myrrh (he/him/his) and I am a Computer Science student at
            Worcester Polytechnic Institute pursuing a robotics engineering
            minor, and I will graduate in late 2025 or spring 2026.
          </p>
          <p className='font-paragraph text-center text-small font-bold text-primary-charcoal pl-20 pr-20'>
            I have been programming since 2019, when I joined my high school
            robotics team. I have since programmed a variety of projects, from
            machine learning models to systems programming to web development.
          </p>
        </div>
      </div>
    </div>
  );
}
