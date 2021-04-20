<template>
<div class="hello">
    <!-- Menu do Blog -->
    <header class="menu-blog">
        <nav class="link-menu-global">
            <div class="icon-home">
                <router-link to="/" class="btn-default">Home</router-link>
            </div>
            <div class="links-routers">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    |
                    <li class="nav-item">
                        <router-link to="/Blog">Blog</router-link>
                    </li>
                    |
                    <li class="nav-item">
                        <router-link to="/">Contato</router-link>
                    </li>
                    
                </ul>
                  
            </div>
            
        </nav>
        <hr>
    </header>
</div>
</template>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    .hello{
        background-color: rgb(172, 172, 172);
    }

    .menu-blog{
        position: fixed;
        z-index: 1;
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
</style>
