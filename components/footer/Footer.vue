<template>
	<footer class="main-footer">
		<div class="container">
			<div class="row main-footer__row">
				<div class="col main-footer__col">
					<Copyrights :text="getCopyrightsText" />
				</div>
				<div class="col main-footer__col">
					<FooterNav :menu="getMenu" />
				</div>
				<div class="col main-footer__col">
					<SocialMedia :media="getSocialMedia" />
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import axios from "axios";
export default {
	computed: {
		getCopyrightsText() {
			return this.$store.getters.getOptions.copyrights;
		},
		getMenu() {
			return this.$store.getters.getOptions.footerNav;
		},
		getSocialMedia() {
			return this.$store.getters.getOptions.socialMedia;
		}
	}
};
</script>

<style lang="scss" scoped>
.main-footer {
	color: $color-white;
	padding: 40px 0;
	border-top: 1px solid $color-border;
	background-color: $color-background;
	&__row {
		justify-content: space-between;
		align-items: center;
	}
	.col {
		flex: 0 0 auto;
	}
}
</style>
