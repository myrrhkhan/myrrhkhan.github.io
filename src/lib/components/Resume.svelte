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
