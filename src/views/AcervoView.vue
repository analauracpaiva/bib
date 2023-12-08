<script setup>
import { ref, reactive, onMounted } from 'vue'

import Loading from 'vue-loading-overlay'
import TituloService from '../services/titulos'
import CategoriaService from '../services/categorias'
import AutorService from '../services/autores'
import imageService from '../services/images.js'

const autores = ref([])
const categorias = ref([])
const coverUrl = ref('')
const file = ref(null)
const titulos = ref([])
const isLoading = ref(false)

const currentTitulo = reactive({
  nome: '',
  descricao: '',
  alunos: [],
  professor: ''
})

const currentAutor = reactive({
  nome: '',
  email: '',
})

function onFileChange(e) {
  file.value = e.target.files[0]
  coverUrl.value = URL.createObjectURL(file.value)
}

onMounted(async () => {
  isLoading.value = true
  const data = await TituloService.getAllTitulos()
  titulos.value = data
  isLoading.value = false
})

onMounted(async () => {
  const data = await AutorService.getAllAutores()
  autores.value = data
})
onMounted(async () => {
  const data = await CategoriaService.getAllCategorias()
  categorias.value = data
})

async function save() {
  isLoading.value = true
  const image = await imageService.uploadImage(file.value)
  currentTitulo.capa_attachment_key = image.attachment_key
  await TituloService.saveTitulo(currentTitulo)
  Object.assign(currentTitulo, {
    nome: '',
    descricao: '',
    alunos: [],
    professor: '',
    capa_attachment_key: ''
  })
  const data = await TituloService.getAllTitulos()
  titulos.value = data
  isLoading.value = false
}
async function saveAutor() {
  isLoading.value = true
  await AutorService.saveTitulo(currentAutor)
  Object.assign(currentTitulo, {
    nome: '',
    email: '',
  })
  const data = await AutorService.getAllAutores()
  autores.value = data
  isLoading.value = false
}

async function deleteTitulo(titulo) {
  isLoading.value = true
  await TituloService.deleteTitulo(titulo)
  const data = await TituloService.getAllTitulos()
  titulos.value = data
  isLoading.value = false
}

function editTitulo(titulo) {
  currentTitulo.value = { ...titulo }
}
</script>

<template>
  <Loading v-model:active="isLoading" is-full-page class="loading" />
  <div class="main">
    <h1 class="Title">Livros em Nossa Biblioteca!</h1>
    <div class="bookform">
      <form class="form" @submit.prevent="save">
        <h3>Adicione um Livro</h3>
        <div class="form-col">
          <div class="input-col">
            <input v-model="currentTitulo.titulo" type="text" placeholder="Título" />
            <select v-model="currentTitulo.autor">
              <option
                v-for="categoria in categorias"
                :key="categoria.id"
                v-bind:value="categoria.id"
              >
                {{ categoria.descricao }}
              </option>
            </select>
            <select v-model="currentTitulo.categoria">
              <option v-for="autor in autores" :key="autor.id" v-bind:value="autor.id">
                {{ autor.nome }}
              </option>
            </select>
          </div>
          <div class="input-col">
            <input
              type="file"
              accept="image/png, image/jpeg"
              name="file_upload"
              @change="onFileChange"
            />
            <div id="preview">
              <div class="cover">
                <img class="img" v-if="coverUrl" :src="coverUrl" />
              </div>
            </div>
          </div>
          <div class="input-col autor">
            <h3>Adicione um Autor</h3>
            <input
              v-model="currentAutor.nome" placeholder="Nome"
            />
            <input
              v-model="currentAutor.email" placeholder="Email"
            />
            
          </div>
        </div>
        <button type="submit" class="button">Enviar</button>
      </form>
    </div>
    <div class="bookWeek">
      <div v-for="titulo in titulos" :key="titulo.id" class="bookBox">
        <img class="bookPic" v-bind:src="titulo.capa.file" alt="fotoLivro" />
        <p class="bookTitle">{{ titulo.titulo }}</p>
        <p class="bookGenre">{{ titulo.categoria.descricao }}</p>
        <p class="bookAuthor">{{ titulo.autor.nome }}</p>
        <button @click="editTitulo">Editar</button>
        <button @click="deleteTitulo(titulo)">Deletar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.autor{
  display: flex;
  align-items: normal !important;
}
.input-col {
  display: flex;
  flex-direction: column;
  margin-right: 5%;
}
.img {
  width: 100%;
  aspect-ratio: 6/8;
}
.cover {
  width: 60%;
  aspect-ratio: 6/8;
}
.form {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.form-col {
  display: flex;
  flex-direction: row;
  align-items: center;
}
input {
  margin-top: 1%;
}
button {
  margin-top: 1%;
}
.bookform {
  padding: 1% 15%;
  background-color: #0b5394;
  margin-bottom: 2%;
}
.Title {
  margin-left: 15%;
  margin-top: 5%;
}
.bookBox {
  width: 15%;
  box-shadow: 1px 2px 5px 1px gray;
  display: flex;
  flex-direction: column;
  padding: 1%;
  background-color: #f1f1f1;
  border-radius: 1vh;
}
.hero {
  width: 100%;
}
.heroImg {
  width: 100%;
}

.bookPic {
  width: 100%;
  aspect-ratio: 6/8;
  outline: 1px solid black;
}
.bookTitle {
  font-size: large;
  font-weight: bold;
}
.bookGenre,
.bookAuthor {
  opacity: 80%;
  line-height: 1%;
}
.main {
  width: 100%;
}
.bookWeek {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0% 15%;
  gap: 5%;
}
</style>
