<template>
	<header class="page-header">
		<div class="page-header__container">
			<Logo />
			<Hamburger />
		</div>
	</header>
</template>

<style lang="scss" scoped>
.page-header {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	&__container {
		background: transparent;
		padding: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
