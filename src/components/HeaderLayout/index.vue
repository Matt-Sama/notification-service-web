<template>
    <div class="header-container">
        <div class="header-title">
            <slot name="header"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.header{
    &-title{
        font-size: 1.5rem;
        font-weight: 700;
        padding: 0;
        margin-bottom: 1.25rem;
        height: $headerLayoutHeight;
    }
}
</style>