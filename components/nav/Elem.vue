<template>
	<li class="page-nav__menu-item">
		<a
			href="/"
			class="page-nav__menu-item-link"
			:class="isRouteActive(item.page_path) && 'active'"
			@click.prevent="onClickHandler(item.page_path)"
			>{{ item.page_link }}</a
		>
		<div class="page-nav__sub-menu-wrapper" v-if="item.submenu">
			<ul class="page-nav__sub-menu" v-show="isShowSubmenu">
				<li
					class="page-nav__sub-menu-item"
					v-for="subItem in item.submenu"
					:key="subItem.submenu_page_path"
				>
					<a
						href="/"
						@click.prevent="
							sublinkOnClickHandler(subItem.submenu_page_path)
						"
						class="page-nav__sub-menu-item-link"
						:class="
							isRouteActive(subItem.submenu_page_path) && 'active'
						"
						>{{ subItem.submenu_page_title }}
					</a>
				</li>
			</ul>
		</div>
	</li>
</template>

<script>
export default {
	data() {
		return {
			isClicked: false,
			isShowSubmenu: false
		};
	},
	props: {
		item: {
			type: Object
		}
		// hasSubmenu: {
		// 	type: Boolean
		// }
	},

	methods: {
		onClickHandler(path) {
			if (this.item.submenu && !this.isClicked) {
				this.resetMenu(true);
			} else if (this.isClicked) {
				this.redirect(path);
			} else if (!this.isClicked && !this.item.submenu) {
				this.redirect(path);
			}
		},
		sublinkOnClickHandler(path) {
			this.redirect(path);
		},
		isRouteActive(path) {
			if (this.$nuxt.$route.path == path) {
				return true;
			} else {
				return false;
			}
		},

		redirect(path) {
			this.$router.push(path);
			this.$store.state.options.isOpen = false;
			this.resetMenu();
		},
		resetMenu(v = false) {
			this.isShowSubmenu = v;
			this.isClicked = v;
		}
	}
};
</script>

<style lang="scss" scoped>
.page-nav {
	&__sub-menu {
		padding: 40px 15px;
	}
	&__sub-menu-item:hover > a {
		color: $color-primary;
	}
	&__menu-item:hover > a {
		color: $color-primary;
	}
	&__sub-menu-item-link.active,
	&__menu-item-link.active {
		color: $color-primary;
	}
}
</style>
