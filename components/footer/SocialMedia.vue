<template>
	<ul class="main-footer__social-media">
		<li
			class="main-footer__social-media-elem"
			v-for="elem in media"
			:key="elem.social_media_link"
		>
			<a
				:href="elem.socialmedia_link"
				class="main-footer__social-media-link"
			>
				<img
					:src="elem.social_media_icon"
					alt="icon"
					class="main-footer__social-media-img"
				/>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		media: {
			type: Array
		}
	}
};
</script>

<style lang="scss" scoped>
.main-footer {
	&__social-media {
		display: flex;
	}
	&__social-media-elem {
		width: 25px;
		&:not(:last-child) {
			margin-right: 5px;
		}
	}
	&__social-media-link {
		display: block;
	}
	&__social-media-img {
		display: block;
		width: 100%;
	}
}
</style>
