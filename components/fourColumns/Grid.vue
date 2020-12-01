<template>
	<section
		class="block four-columns-grid"
		:style="
			'backgroundImage:url(' + acfProps.columns_background_image + ')'
		"
	>
		<div class="container">
			<h2 class="block-title">{{ acfProps.columns_title }}</h2>
			<p class="block-description">{{ acfProps.columns_description }}</p>

			<div class="four-columns-grid__grid-wrapper">
				<div class="row">
					<FourColumnsColumn
						v-for="column in acfProps.columns_grid"
						:data="column"
						:key="
							column.grid_column_title +
								new Date() * Math.random()
						"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		acfProps: {
			type: Object
		}
	}
};
</script>

<style lang="scss" scoped>
.four-columns-grid {
	text-align: left;
	background: {
		size: cover;
		position: center center;
		repeat: no-repeat;
	}
}
</style>
