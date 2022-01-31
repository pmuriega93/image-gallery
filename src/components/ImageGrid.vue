<template>
  <section class="grid-container">
    <figure v-for="(picture,index) in pictures" :key="picture.id">
      <img :src="picture.src" :alt="picture.photographer"
      class="img-grid"
      @click="openModal(index)"
      >
    </figure>
      <modal
        v-if="isModalOpen"
        @on:close="closeModal"
        >
        <template #header>
          <h2 class="modal-title">Photo taken by: {{ modalPicture.photographer }}</h2>
          <hr>
        </template>
        <template #body>
          <img :src="modalPicture.src" alt="Foto" class="img-modal">
        </template>
        <template #footer>
          <button @click=download(modalPicture.src)
          class="btn">Download</button>
        </template>

      </modal>
  </section>
</template>

<script>
import Modal from './Modal.vue'
import { saveAs } from 'file-saver'
export default {
  components: {
    Modal
  },
  props: {
    pictures: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isModalOpen: false,
      modalPicture: {}
    }
  },
  methods: {
    openModal(id) {
      this.isModalOpen = true
      this.modalPicture = {
        photographer: this.pictures[id].photographer,
        src: this.pictures[id].src
      }
    },
    closeModal() {
      this.isModalOpen = false
    },
    download( photo ) {
      saveAs(photo, "image.jpg");
    }
  }

}
</script>

<style scoped>
  .grid-container {
    align-content: center;
    display: grid;
    gap: 15px;
    grid-column: full-start / full-end;
    grid-template-columns: repeat(3, minmax(min-content, 1fr));
    justify-items: center;
    margin: 0 auto;
    padding: 30px;
    width: 100vw;
  }

  .img-grid {
    display: block;
    height: 100%;
    object-fit: cover;
    transition: all .3s;
    width: 100%;
  }

  .img-grid:hover {
    outline: 3px solid #0096C7;
    transform: scale(1.1);
    cursor: pointer;
  }
  .modal-title {
    font-size: 34px;
    color: #03045E;
  }
  .btn {
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    background-color: #03045E;
    color: #e5e5e5;
    font-size: 26px;
    cursor: pointer;
    font-weight: 200;
    transition: opacity .3s;
  }
  .btn:hover {
    opacity: .8;
  }

</style>