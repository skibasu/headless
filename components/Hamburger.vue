<template>
	<button
		class="menu-toggle"
		:class="isOpen && 'isOpen'"
		@click="menuOpenHandler"
	>
		<span
			class="line line-top menu-toggle__line menu-toggle__line--top"
		></span>
		<span
			class="line line-center menu-toggle__line menu-toggle__line--center"
		></span>
		<span
			class="line line-bottom menu-toggle__line menu-toggle__line--bottom"
		></span>
	</button>
</template>
<script>
export default {
	computed: {
		isOpen() {
			return this.$store.state.options.isOpen;
		}
	},
	methods: {
		menuOpenHandler() {
			this.$store.state.options.isOpen = !this.$store.state.options
				.isOpen;
		}
	}
};
</script>

<style lang="scss" scoped>
.menu-toggle {
	position: relative;
	border: none;
	width: 36px;
	height: 30px;
	text-indent: 100%;
	font-size: 0;
	line-height: 0;
	overflow: hidden;
	position: relative;
	cursor: pointer;
	outline: none;
	background: 0 0;
	padding: 0;
	-o-transition: width 0.3s, height 0.2s;
	-webkit-transition: width 0.3s, height 0.2s;
	transition: width 0.3s, height 0.2s;
	margin-right: 0;
	z-index: 2;
	&__line {
		position: absolute;
		width: 100%;
		height: 4px;
		left: 0;
		right: 0;
		background-color: $color-primary;
		transition: all 0.5s, top 0.3s, height 0.3s;
		&--top {
			top: 3px;
			transform: rotate(0);
		}
		&--center {
			top: 13px;
			opacity: 1;
		}
		&--bottom {
			top: 23px;
			transform: rotate(0);
		}
	}
	&.isOpen {
		.line {
			background-color: #fff;
		}
		.line-top {
			transform: rotate(45deg);
			top: 13px;
		}
		.line-center {
			opacity: 0;
		}
		.line-bottom {
			transform: rotate(-45deg);
			top: 13px;
		}
	}
}
</style>
