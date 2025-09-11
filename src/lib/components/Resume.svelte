<script lang="ts">
	function download(url: string) {
		const a = document.createElement('a');
		a.href = url;
		a.download = url.split('/').pop()!;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
</script>

<div style="background-color: var(--tf-page-bg-color)" class="bg-gradient py-3">
	<div class="m-6">
		<h1 class="text-2xl font-medium">Intrigued? Let's Talk!</h1>
		<p class="text-lg sm:text-xl">
			I'm currently looking for full-time entry-level jobs. If you like what you see, reach out to
			me on <a
				href="https://www.linkedin.com/in/myrrh-khan"
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-600 underline hover:text-blue-800">LinkedIn</a
			>!
		</p>
		<p class="text-lg sm:text-xl">
			For security reasons, I do not publish my personal phone number or email on this website, but
			I'm also reachable at mskhan@wpi.edu before February 2026, or mskhan@alum.wpi.edu from
			February 2026 onward. My Google Voice number, (339) 707-0364, also works. Rest assured, these
			reach me just as well as my personal phone and email!
		</p>
	</div>
	<div class="resume_box">
		<button type="submit" style="width: 40%;" onclick={() => download('resumes/resume.pdf')}
			>Download!</button
		>
		<!-- <object data="resume.pdf" type="application/pdf" width="80%" height="1000px">
        alt : <a href="resume.pdf">resume.pdf</a>
    </object> -->
		<iframe
			title="resume preview"
			width="80%"
			height="1000px"
			src="/resumes/resume.pdf"
			style="border: none;"
			loading="lazy"
		>
			<p>
				Your browser doesn't support PDF preview.
				<a href="/resumes/resume.pdf" target="_blank" download> Download the resume here </a>
			</p>
		</iframe>
	</div>
</div>

<style>
	.resume_box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
