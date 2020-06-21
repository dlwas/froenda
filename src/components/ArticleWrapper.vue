<template>
    <div class="article__wrapper" :class="{ 'rotated' : isRotated}">
        <img src="@/assets/section-background-wrapper.svg" alt="background section wrapper image" width="100%">
    </div>

</template>

<script>
    export default {
        name: "ArticleWrapper",
        props: {
            isRotated: Boolean
        }
    }
</script>

<style lang="scss" scoped>
    .article__wrapper {
        margin-top: -0.2rem;

        @media #{$mobile} {
            margin-top: -0.3rem;
        }

        &,
        .rotated {
            margin-bottom: -0.1rem;

            @media #{$mobile} {
                margin-bottom: -0.2rem;
            }
        }
    }

    .rotated {
        transform: rotate(180deg);
    }
</style>