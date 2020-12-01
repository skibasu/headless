<template>
	<section class="page error">
		<div class="container">
			<h1 class="error__title">
				Error 404 <br />
				Page doesn't exist !
			</h1>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.error {
	text-align: center;
	padding: 150px 0;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background: $color-background;
	&__title {
		color: $color-white;
		font-size: 42px;
	}
}
</style>
