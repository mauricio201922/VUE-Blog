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


    
    
  </div>
</template>

<script>
export default {
  name: 'Blog',
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


</style>
