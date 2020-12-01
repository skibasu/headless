<template>
	<button
		type="submit"
		class="btn-submit"
		:class="className"
		:disabled="disabled"
	>
		{{ value }}
	</button>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			require: true
		},
		className: {
			type: String
		},
		disabled: {
			type: Boolean
		},
		onSubmit: {
			type: Function,
			require: true
		}
	}
};
</script>

<style lang="scss" scoped>
.btn-submit {
	cursor: pointer;
	display: block;
	width: 100%;
	text-align: center;
	text-transform: uppercase;
	white-space: nowrap;
	height: 50px;
	line-height: 50px;
	padding: 0 25px;
	font-size: 19px;
	background: $color-dangerous-night;
	color: $color-white;
	border: none;
	outline: none;
	font-weight: 700;
	&:disabled {
		cursor: not-allowed;
	}
}
</style>
