<template>
	<section class="block block-newsletter">
		<div class="container">
			<div class="row">
				<div class="col block-newsletter__col-1">
					<h2 class="col-title">
						{{ acfProps.newsletter_title }}
					</h2>
					<p class="column-description">
						{{ acfProps.newsletter_description }}
					</p>
					<p class="column-info block-newsletter__col-info">
						{{ acfProps.newsletter_info_message }}
					</p>
				</div>
				<div class="col block-newsletter__col-2">
					<MailChimpSingUp
						:acfApiKey="acfProps.mailchimp_api_key"
						:acfAudienceId="acfProps.mailchimp_audience_id"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import MailChimpSingUp from "./MailChimpSingUp.vue";
export default {
	components: { MailChimpSingUp },
	props: {
		acfProps: {
			type: Object
		}
	}
};
</script>

<style lang="scss" scoped>
.block-newsletter {
	background: $color-primary;
	padding: 60px 0;
	&__col-1 {
		color: $color-white;
		margin-bottom: 30px;
		@media all and(min-width:992px) {
			margin-bottom: 0;
		}
	}
	&__col-2 {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	&__col-2,
	&__col-1 {
		flex: 0 0 100%;
		max-width: 100%;

		@media all and(min-width:992px) {
			flex: 0 0 50%;
			max-width: 50%;
		}
	}
	&__col-info {
		margin-top: 8px;
		opacity: 0.72;
	}
}
</style>
