<template>
	<div class="page" :class="'page-' + wpPageContent.slug">
		<div class="page-wrapper" v-if="acfPageContent">
			<component
				v-for="component in componentsArr"
				:key="component + new Date() * Math.random()"
				:is="component"
				:acfProps="acfProps(acfPageContent, component)"
				:wpProps="wpPageContent"
			></component>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import { acfComponentsArray } from "~/acf-components";
import Hero from "~/components/Hero";
import HeroTitle from "~/components/HeroTitle";
import SingleImageBlock from "~/components/SingleImageBlock";
import FourColumnsGrid from "~/components/fourColumns/Grid";
import ContactForm from "~/components/ContactForm";
import Newsletter from "~/components/Newsletter";
export default {
	data() {
		return {
			indexes: {}
		};
	},
	props: {
		id: {
			type: Number
		}
	},
	computed: {
		acfPageContent() {
			return this.$store.getters.getPages.filter(v => v.id == this.id)[0]
				.acf.page_blocks;
		},
		wpPageContent() {
			return {
				title: this.$store.getters.getPages.filter(
					v => v.id == this.id
				)[0].title.rendered,
				slug: this.$store.getters.getPages.filter(
					v => v.id == this.id
				)[0].slug
			};
		},

		componentsArr() {
			const acfBlocks = this.acfPageContent.map(v => v.acf_fc_layout);
			const comp = acfBlocks.map(val =>
				acfComponentsArray
					.filter(elem => elem.name == val)
					.map(val => val.component)
			);

			return comp.map((v, i) => v[0]);
		}
	},
	methods: {
		acfProps(arr, component) {
			if (!this.indexes[component]) {
				this.indexes[component] = 1;
			} else {
				this.indexes[component] = this.indexes[component] + 1;
			}

			return this.acfPageContent.filter(
				v =>
					v.acf_fc_layout ==
					acfComponentsArray.filter(v => {
						return v.component == component;
					})[0].name
			)[this.indexes[component] - 1];
		}
	},
	components: {
		Hero,
		HeroTitle,
		SingleImageBlock,
		FourColumnsGrid,
		ContactForm,
		Newsletter
	}
};
</script>

<style></style>
