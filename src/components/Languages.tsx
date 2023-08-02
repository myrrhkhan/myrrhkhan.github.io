function ListLanguages(props: any) {
	let langs = props.langs;
	console.log(langs);
	let idx = 0;
	let current_lang = langs[0];

	// TODO: support for scrolling up
	const handleScroll = () => {
		idx = (idx + 1) % (langs.length);
		current_lang = langs[idx];
	}

	return (
		<div 
			className="flex flex-col justify-center items-center bg-primary-sandy-brown"
			onScroll={handleScroll}	
			style={{height: "240px "}}
		>
			<h1 className="text-3xl font-subheader text-primary-persian-green">Experience</h1>
			
			<p className="text-small font-paragraph text-center">{current_lang} (should scroll but it doesn't do that yet)</p>
		</div>
	)
}

export default function Languages() {
	let langs: String[] = ['Java', 'Python', 'C/C++', 'JavaScript (including Svelte and React', 'Rust'];
	return (
		<ListLanguages
			langs={langs}
		/>
	)
}