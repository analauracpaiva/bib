<template>
    <div class="main">
        <div class="CardsView">
            <div class="NoticiaCard">
                <div class="NoticiaImgBox">
                    <img class="NoticiaImg" src="../assets/imgs/biblioteca-sa-corredor.jpg">
                </div>
                <div class="NoticiaText">
                    <h1>Bem-vindo ao Tesouro do Conhecimento: Explore o Acervo da Biblioteca UFPR</h1>
                    <p class="text"> Descubra um universo de sabedoria e cultura na Biblioteca da Universidade Federal do Paraná (UFPR). Nosso acervo é um testemunho vivo da riqueza intelectual, abrangendo diversas disciplinas e oferecendo uma fonte inesgotável de recursos para estudantes, pesquisadores e entusiastas do aprendizado.</p>
                    <h2>Explorando o Acervo:</h2>
                    <p>Em nosso site, você encontrará uma vasta coleção de obras que abrange desde clássicos atemporais até as mais recentes publicações acadêmicas. Navegue por categorias, explore coleções especiais e mergulhe em volumes que representam séculos de conhecimento acumulado.</p>
                    <h2>Riqueza Cultural em Suas Mãos:</h2>
                    <p>O acervo da Biblioteca UFPR vai além dos limites da educação formal. Oferecemos uma gama diversificada de recursos, incluindo obras raras, documentos históricos e exposições virtuais que proporcionam uma imersão única na riqueza cultural e intelectual.</p>
                </div>
            </div>
              
        </div>
    </div>
</template>
<style scoped>
.NoticiaImg{
    width: 100%;
    height: 100%;
}
.NoticiaImgBox{
    width: 50%;
}
.CardsView{
    padding: 5% 8%;
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
    min-width: 50%;
    width: 60%;
    padding: 0 1%;
}
</style>