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
    titulo: '',
    categoria: '',
    autor: '',
})

const currentAutor = reactive({
  nome: '',
  email: '',
})

const currentCategoria = reactive({
  descricao: '',
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
    titulo: '',
    categoria: '',
    autor: '',
  })
  const data = await TituloService.getAllTitulos()
  titulos.value = data
  isLoading.value = false
}
async function saveAutor() {
  isLoading.value = true
  await AutorService.saveAutor(currentAutor)
  Object.assign(currentAutor, {
    nome: '',
    email: '',
  })
  const data = await AutorService.getAllAutores()
  autores.value = data
  isLoading.value = false
}

async function saveCategoria() {
  isLoading.value = true
  await CategoriaService.saveCategoria(currentCategoria)
  Object.assign(currentCategoria, {
    descricao: '',
  })
  const data = await CategoriaService.getAllCategorias()
  categorias.value = data
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
    <div class="bookform">
      
        
        <div class="form-col">
          <div class="input-col">
            <form class="form" @submit.prevent="save">
            <h3>Adicione um Livro</h3>
            <input v-model="currentTitulo.titulo" type="text" placeholder="Título" />
            <p class="select-label">Autor:</p>
            <select v-model="currentTitulo.autor">
              <option
                v-for="autor in autores"
                :key="autor.id"
                v-bind:value="autor.id"
              >
                {{ autor.nome + " | " + autor.email }}
              </option> 
            </select>
            <p class="select-label">Categoria:</p>
            <select v-model="currentTitulo.categoria">
              <option v-for="categoria in categorias" :key="categoria.id" v-bind:value="categoria.id">
                {{ categoria.id + ") " + categoria.descricao }}
              </option>
            </select>
            <button type="submit" class="button">Enviar</button>
      </form>
          </div>
          <div class="input-col">
            <input
              class="file-input"
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
          <div class="input-col">
            <h3>Adicione um Autor</h3>
            <form @submit.prevent="saveAutor" class="form">
              <input
              v-model="currentAutor.nome" placeholder="Nome"
            />
            <input
              v-model="currentAutor.email" placeholder="Email"
            />
            <button type="submit" class="button">Enviar</button>
            </form>
          </div>
          <div class="input-col">
            <h3>Adicione uma Categoria</h3>
            <form @submit.prevent="saveCategoria" class="form ">
              <input
              v-model="currentCategoria.descricao" placeholder="Descricao"
            />
            <button type="submit" class="button">Enviar</button>
            </form>
            
          </div>
        </div>
    </div>
    <h1 class="Title">Livros no Acervo</h1>
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
h3{
  color: white;
}
input, select {
  padding: 2%;
}

button{
  padding: 2%;
  background-color: #f89c3c;
  margin-top: 10% !important;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover{
  padding: 2%;
  background-color: #c27c31;
  transition: all 0.2s ease-in-out;
  margin-top: 10% !important;
  color: white;
  border: none;
  cursor: pointer;
}

.select-label{
  margin-bottom: 1%;
  color: white;
}
.file-input{
  padding-left: 20%;
}
#preview{
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.autor{
  display: flex;
  align-items: normal !important;
}
.input-col {
  display: flex;
  flex-direction: column;
  margin-right: 5%;
  width: 25%;
  padding-bottom: 2%;
}
.img {
  width: 100%;
  aspect-ratio: 6/8;

}
.cover {
  max-width: 60%;
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
  align-items: flex-start;
  height: 100%;
  justify-content: space-between; 

}
input {
  margin-top: 1%;
}
button {
  margin-top: 1%;
}
.bookform {
  margin-top: 2%;
  padding: 1% 15%;
  background-color: #0b5394;
  margin-bottom: 2%;
}
.Title {
  margin-left: 15%;
  margin-top: 2%;
}
.bookBox {
  width: 15%;
  box-shadow: 1px 2px 5px 1px gray;
  display: flex;
  flex-direction: column;
  padding: 1%;
  background-color: #f1f1f1;
  border-radius: 1vh;
  margin-bottom: 2%;
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
