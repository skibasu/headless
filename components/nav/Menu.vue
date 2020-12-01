<template>
	<nav class="page-nav" v-show="isOpen">
		<div class="container page-nav__container">
			<div class="row row--column page-nav__row">
				<ul class="page-nav__menu">
					<NavElem
						v-for="(v, i) in mainMenu"
						:item="mainMenu[i]"
						:key="i"
					/>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	computed: {
		isOpen() {
			return this.$store.state.options.isOpen;
		},
		isMenuReseted() {
			return this.$store.state.options.isMenuReseted;
		},
		mainMenu() {
			return this.$store.getters.getOptions.mainNav;
		}
	}
};
</script>

<style lang="scss" scoped>
.page-nav {
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	z-index: 2;
	padding-bottom: 123px;
	background-color: rgba($color-black, 0.82);
	&__row {
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	&__container {
		height: 100%;
	}
	&__menu {
		padding: 15px;
		text-align: center;
		font-size: 32px;
		font-weight: 700;
		line-height: 2;
		color: $color-white;
		text-transform: uppercase;
	}
}
</style>
