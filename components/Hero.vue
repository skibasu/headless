<template>
	<section class="page-hero">
		<VueSlickCarousel
			:arrows="false"
			:dots="false"
			:autoplay="true"
			:autoplaySpeed="5000"
			:speed="2000"
			:fade="true"
		>
			<div>
				<div
					class="page-hero__elem"
					:style="
						`backgroundImage: url(${acfProps.slide_1_background})`
					"
				></div>
			</div>
			<div>
				<div
					class="page-hero__elem"
					:style="
						`backgroundImage: url(${acfProps.slide_2_background})`
					"
				></div>
			</div>
			<div>
				<div
					class="page-hero__elem"
					:style="
						`backgroundImage: url(${acfProps.slide_3_background})`
					"
				></div>
			</div>
		</VueSlickCarousel>
	</section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
	props: {
		acfProps: {
			type: Object
		}
	},
	components: {
		VueSlickCarousel
	}
};
</script>

<style lang="scss" scoped>
.page-hero {
	&__elem {
		width: 100%;
		height: 100vh;
		background: {
			position: center bottom;
			repeat: no-repeat;
			size: cover;
		}
	}
	.slick-list:focus {
		outline: none !important;
	}
}
</style>
