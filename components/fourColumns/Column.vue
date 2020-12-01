<template>
	<div class="col four-columns-grid__col">
		<div class="four-columns-grid__inner-col">
			<h3 class="col-title">{{ data.grid_column_title }}</h3>
			<p class="column-description">{{ data.grid_column_description }}</p>
		</div>
		<div class="four-columns-grid__inner-img">
			<img
				class="four-columns-grid__img"
				:src="data.grid_column_icon"
				alt="icon"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: Object
	}
};
</script>

<style lang="scss" scoped>
.four-columns-grid {
	display: flex;
	flex-wrap: wrap;

	&__col {
		display: flex;
		flex: 0 0 100%;
		max-width: 100%;
		padding-bottom: 45px;
		@media all and (min-width: 768px) {
			flex: 0 0 33.33%;
			max-width: 33.33%;
		}

		@media all and (min-width: 1200px) {
			flex: 0 0 25%;
			max-width: 25%;
		}
	}
	&__inner-col {
		flex: 1 1 auto;
		max-width: calc(100% - 40px);
	}
	&__inner-img {
		flex: 0 0 40px;
		max-width: 40px;
	}
	&__img {
		width: 30px;
		height: auto;
		margin: 0 auto;
	}
}
</style>
