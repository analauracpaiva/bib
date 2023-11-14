<template>
    <div class="main">
        <div class="CardsView">
            <h1>Notícias</h1>
            <div class="NoticiaCard">
                <div class="NoticiaImgBox">
                    <img class="NoticiaImg" src="alguma coisa">
                </div>
                <div class="NoticiaText">
                    <h1>Titulo</h1>
                    <p class="text"> Lorem ipsum Argo et sum Dolor</p>
                </div>
            </div>
              
        </div>
    </div>
</template>
<style scoped>
.NoticiaImg{
    width: 100%;
    aspect-ratio: 4/3;
}
.NoticiaImgBox{
    width: 40%;
}
.CardsView{
    padding: 5% 15%;
}
.NoticiaCard{
    width: 100%;
    display: flex;
    outline: 1px solid #0b5394;
    border-radius: 0.4vh;
    background-color: #f1f1f1;
    margin: 2% 0%;
}
.NoticiaText{
    min-width: 60%;
    width: 60%;
    padding: 0 1%;
}
</style>