<template>
    <AcfPage v-if="id" :id="id" />
</template>

<script>
export default {
    computed: {
        id() {
            let path = this.$nuxt.$route.path.substring(1);
            if (!path) {
                path = "home";
            }

            return this.$store.getters.getPages.filter(
                (v) => v.slug === path
            )[0].id;
        },
    },

    validate({ params, query, store }) {
        let test = false;
        const slugs = store.getters.getPages.map((v) => v.slug);
        let path = params.pathMatch;

        if (!path) {
            path = "home";
        }
        return slugs.includes(path);
    },
};
</script>
