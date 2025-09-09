<!-- AnimatedArrow.svelte -->
<script>
	export let direction = 'right'; // 'left' or 'right'
	export let onClick = () => {};
	export let size = 15; // circle size in pixels
	export let color = '#3FC380'; // dot color
	export let lightColor = '#fff'; // light dot color
</script>

<button class="arrow-button" on:click={onClick}>
	<div class="background-circle">
		<div class="loading-frame" class:left={direction === 'left'}>
			{#each Array(10) as _, i}
				<div
					class="circle"
					style="--circle-size: {size}px; --dot-color: {color}; --light-dot-color: {lightColor};"
					style:animation-delay="{direction === 'right'
						? [0.9, 1.1, 1.3, 1.1, 0.9, 0.9, 0.7, 0.5, 0.3, 0.1][i]
						: [0.1, 0.3, 0.5, 0.7, 0.9, 0.9, 0.9, 1.1, 1.3, 1.1][i]}s"
					style:transform={direction === 'right'
						? [
								'translate(0,25px)',
								'translate(18px,13px)',
								'translate(35px,25px)',
								'translate(18px,38px)',
								'translate(0px,50px)',
								'translate(0,25px)',
								'translate(-20px,25px)',
								'translate(-40px,25px)',
								'translate(-60px,25px)',
								'translate(-80px,25px)'
							][i]
						: [
								'translate(0,25px)',
								'translate(-18px,13px)',
								'translate(-35px,25px)',
								'translate(-18px,38px)',
								'translate(0px,50px)',
								'translate(0,25px)',
								'translate(20px,25px)',
								'translate(40px,25px)',
								'translate(60px,25px)',
								'translate(80px,25px)'
							][i]}
				/>
			{/each}
		</div>
	</div>
</button>

<style>
	.arrow-button {
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 2rem;
		position: relative;
		width: 120px;
		height: 80px;
		flex-shrink: 0;
	}
	.arrow-button:hover {
		opacity: 0.8;
	}
	.background-circle {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80px;
		height: 80px;
		background-color: black;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.loading-frame {
		position: relative;
		width: 50px;
		height: 40px;
		transform: scale(0.6);
	}
	.loading-frame.left {
		/* Remove the flip since we're handling positioning manually */
	}
	.circle {
		position: absolute;
		height: var(--circle-size);
		width: var(--circle-size);
		border-radius: var(--circle-size);
		background-color: var(--dot-color);
		animation: animate linear 2s infinite;
	}
	@keyframes animate {
		0%,
		100% {
			background-color: var(--dot-color);
		}
		50% {
			background-color: var(--light-dot-color);
		}
	}
</style>
