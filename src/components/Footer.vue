<template>
    <section class="footer">
        footer section
    </section>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style lang="scss" scoped>
    .footer {
        @include setContainer(6vw);
        color: $text__secondary;
    }
</style>