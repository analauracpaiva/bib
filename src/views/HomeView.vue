<script setup></script>

<template>
  <div class="main">
    <div class="hero">
      <img class="heroImg" src="../assets/imgs/1000_F_142899942_BJ9qtVpCEXdGpYHA9ZzhTTpBUY0ei6zj.jpg">
    </div>
    <h1>Livros em Nossa Biblioteca!</h1>
    <div class="bookWeek">
      <div class="bookBox">
        <img class="bookPic" src="aa" alt="fotoLivro" />
        <p class="bookTitle">Titulo Livro</p>
        <p class="bookGenre">Genero</p>
        <p class="bookAuthor">Autor</p>
      </div>
      
      
    </div>
  </div>
</template>

<style scoped>

.bookBox{
  width: 15%;
  box-shadow: 1px 2px 5px 1px gray;
  display: flex;
  flex-direction: column;
  padding: 1%;
}
.hero{
  width: 100%;

}
.heroImg{
  width: 100%;

}

.bookPic{
  width: 100%;
  aspect-ratio: 6/8;
  outline: 1px solid black;
}
.bookTitle{
  font-size: large;
  font-weight: bold;
}
.bookGenre , .bookAuthor{
  opacity: 80%;
  line-height: 1%;

}
.main{
  width: 100%;
}
.bookWeek{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 15%;
  gap: 5%

}
</style>

