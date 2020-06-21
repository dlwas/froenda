<template>
    <div class="contact">
        <SectionName name="contact" />
    </div>
</template>

<script>
    import SectionName from '@/components/SectionName.vue'

    export default {
        name: 'Contact',
        components: {
            SectionName
        }
    }
</script>

<style lang="scss" scoped>
    .contact {
        color: $text__secondary;
        margin-top: 5.5rem;
    }
</style>