<template>
	<button type="submit" class="btn-submit">
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
		onSubmit: {
			type: Function,
			require: true
		}
	}
};
</script>

<style lang="scss" scoped>
.btn-submit {
	transition: 0.5s all ease-in-out;
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
	background: $color-primary;
	color: $color-white;
	border: none;
	outline: none;
	font-weight: 700;
	&:hover {
		background: rgb(95, 114, 127);
	}
}
</style>
