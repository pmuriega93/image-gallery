<template>
  <div class="modal-background fade-in"
        @click.self="$emit('on:close')">
    <div class="modal-container">
        <slot name="header" />
        <slot name="body" />
        <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
    props: {
        img: {
            type: Object
        }
    }
}
</script>

<style scoped>
    .modal-background {
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        height: 100vh;
        justify-content: center;
        left: 0;
        position: fixed;
        top: 0;
        width: 100vw;
    }
    .modal-container {
        align-items: center;
        background-color: #CAF0F8;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: center;
        padding: 15px;
    }

    .fade-in {
        animation: fadeIn ease-out .3s;
    }

    @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
</style>