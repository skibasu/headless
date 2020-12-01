<template>
	<ul class="footer-nav">
		<li class="footer-nav__elem" v-for="elem in menu" :key="elem.page_path">
			<nuxt-link class="footer-nav__link" :to="elem.page_path">{{
				elem.page_title
			}}</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		menu: {
			type: Array
		}
	}
};
</script>

<style lang="scss" scoped>
.footer-nav {
	display: flex;
	&__elem {
	}
	&__link {
		display: block;
		padding: 0 10px;
	}
}
</style>
