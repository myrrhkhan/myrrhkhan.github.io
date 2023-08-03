import { useState } from "react";

function ListLanguages(props: any) {
  let langs = props.langs;
  const [idx, setIdx] = useState(0);
  let current_lang = langs[idx];

  console.log(langs);

  const buttonClick = (direction: number) => {
    setIdx((idx + direction) % langs.length);
  };

  return (
    <div
      className='flex flex-col justify-center items-center bg-primary-sandy-brown'
      style={{ height: "240px " }}
    >
      <h1 className='text-3xl font-subheader text-primary-persian-green'>
        Experience
      </h1>
      <div className='flex flex-row'>
        <button onClick={() => buttonClick(-1)}>
          {" "}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            />
          </svg>
        </button>
        <p className='text-small font-paragraph text-center pl-10 pr-10'>
          {current_lang}
        </p>
        <button onClick={() => buttonClick(1)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Languages() {
  let langs: String[] = [
    "Java",
    "Python",
    "C/C++",
    "JavaScript (including Svelte and React)",
    "Rust",
  ];
  return <ListLanguages langs={langs} />;
}
