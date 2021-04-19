<template>
  <div class="hello">
    <!-- Menu do Blog -->
    <header class="menu-blog">
        <nav class="link-menu-global">
            <div class="icon-home">
                <router-link to="/" class="btn btn-default">Blog</router-link>
            </div>
            <div class="links-routers">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link>
                        
                    </li>
                    <hr>
                    <li class="nav-item">
                        <router-link to="/">Produtos</router-link>
                    </li>
                    <hr>
                    <li class="nav-item">
                        <router-link to="/">Contato</router-link>
                    </li>
                </ul>  
            </div>
        </nav>
    </header>

    <!-- Proximo: Fundo preto e imagens -->

    <main class="main-home">
        <div class="Titulo">
            <h1>Welcome Blog</h1>
            <p>este blog desenvolvido com intuito de ajudar a melhorar minhas experiências em Vue</p>
        </div>
        <nav class="all-image">
            <ul>
                <!-- Linha de imagens 1 -->
                <li class="line-one">
                    <div class="img-one">
                        <img src="../assets/Mediterranean-Villa.jpg">
                        <h3>Mediterranean Villa</h3>
                    </div>
                    <div class="img-two">
                        <img src="../assets/modern-building.jpg">
                        <h3>Modern Building</h3>
                    </div>
                    <div class="img-three">
                        <img src="../assets/red-house.jpg">
                        <h3>Red House</h3>
                    </div>
                </li>

                <!-- Linha de imagens 2 -->
                <li class="line-two">
                    <div class="img-one">
                        <img src="../assets/modern-house.jpg">
                        <h3>Modern House</h3>
                    </div>
                    <div class="img-two">
                        <img src="../assets/white-house.jpg">
                        <h3>White House</h3>
                    </div>
                    <div class="img-three">
                        <img src="../assets/art-center.jpg">
                        <h3>Art Center</h3>
                    </div>
                </li>
                
            </ul>
        </nav>
    </main>
    
    
  </div>
</template>

<script>
export default {
  /*props: {
    msg: String,
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    .hello{
        background-color: rgb(172, 172, 172);
    }

    .menu-blog{
        background-color: black;
    }
    
    .link-menu-global{
        display: flex;
        margin: 0 80px 0 80px;
        padding: 10px 15px 10px 15px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 32px;
        color: white;
        margin-bottom: 1px;
    }

    .icon-home{
        display: inline;
    }

    .icon-home a{
        color: white;
        text-decoration: none;
    }

    .navbar-nav {
        display: flex;
        flex-direction: row;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }

    li {
        display: list-item;
        text-align: -webkit-match-parent;
    }

    .links-routers {
        margin-left: 45vw;
        width: 75vw;
        text-align: end;
    }

    .links-routers a{
        margin: 0 5px 0 5px;
        padding: 2px;
        text-decoration: none;
        color: white;
    }

    .links-routers a:hover{
        color: rgb(17, 0, 255);
    }

    hr{
        color: rgb(189, 189, 189);
    }



    /* Main: Tela principal */


    .main-home{
        background-color: black;
        height: 40vw;
    }

    /* Titulo do main */
    .Titulo{
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        margin: 0 0 0 3vw;
        padding: 5vw;
    }

    .Titulo h1{
        margin: 15px;
        padding: auto;
    }

    .Titulo p{
        margin: 2px 5px 0 5px;
        padding: 3px;
        max-width: 100vw;
        min-width: 25;
        width: 50vw;
        min-height: 5vw;
        max-height: 15vw;
        height: auto;
        font-size: 2vw;
    }

    /* END */

    .all-image{
        text-align: center;
        margin: 100px 15px 0 15px;
        padding: 2%;  
    }

    .line-one, .line-two{
        display: flex;
        color: white;
        text-align: center;
        padding-left: 80px;
    }

    .line-two{
        margin-top: 42px;
        overflow: hidden;
    }

    img{
        width: 420px;
    }

    .line-one .img-one, .img-two, .img-three{
        color: black;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        text-align: initial;
        font-size: 2vw;
    }

    .line-two .img-one, .img-two, .img-three{
        color: black;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        text-align: initial;
        font-size: 2vw;
    }

    /* HOVER: */
    
    

</style>
