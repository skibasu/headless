<template>
    <div>
        <h1>blog</h1>
        <div class="container">
            <div class="row">
                <div class="col col-4" v-for="(post, key) in posts" :key="key">
                    <div class="col-inner" v-html="post"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$store.getters.getPosts.map((v) => v.content.rendered);
        },
    },
};
</script>

<style lang="scss" scoped></style>
