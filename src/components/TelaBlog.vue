<template>
<div class="hello">
    <main class="main-home">
        <div class="Titulo">
            <h1>Criticas</h1>
            <p>Aqui vc pode criticar a casa</p>
        </div>
    </main>

    <!-- IMAGEM: Uma casa aleatória para a crítica -->

    <header class="position-absolute start-50 translate-middle" id="bloco-image">
        <div class="shadow p-3 mb-5 bg-body rounded">
            <figure class="shadow mb-5">
                <img src="../assets/Mediterranean-Villa.jpg">
            </figure>
            <div class="shadow p-3 mb-3 form-comentario">
                <label for="nomeInput" class="form-label">Nome</label>
                <input type="text" class="form-control" id="nomeInput" v-model="nomeField">
                
                <br/>

                <label for="comentarioInput" class="form-label">Comente aqui!</label>
                <textarea class="form-control" id="comentarioInput" rows="3" v-model="comentarioField"></textarea>

                <br/>

                <button class="btn btn-primary spacing" @click="salvarDados">Enviar</button><br/>

                <div class="shadow p-3 mb-3 form-comentario" v-for="dado in dados" :key="dado">
                    <p>{{dado.id}}</p>
                    <br/>
                    <p>{{dado.nome}}</p>
                    <br/>
                    <p>{{dado.comenta}}</p>
                    <a class="colorindo" role="button" @click="removeDado(dado.id)">Remove</a>
                </div>
            </div>

            
        </div>
    </header>
    

</div>
</template>

<script>
import axios from 'axios'
export default {

    // Função que toda hora que o site da TelaBlog inicia, entra aqui
    created: function(){
        /*axios.get("https://localhost:44302/Home/RetornaComentarios").then(res => {
            alert(res)
        })*/
        axios({
            method: 'get', //you can set what request you want to be
            url: 'https://localhost:5001/Home/RetornaComentarios',
        }).then(res => {
            res.data.forEach(element => {
                this.dados.push(element)
            });
        }).catch(err => {
            alert(err)
        })
    },

    data() {
        return{
            nomeField: "",
            comentarioField: "",
            dados: []
        }
    },

    methods: {

        // Methodo que salva dados no banco
        salvarDados: function(){

            /* Salvando no Banco */
            axios({
                method: 'post',
                url: 'https://localhost:5001/Home/Salvar?nome=' + this.nomeField + '&comentario=' + this.comentarioField,
            }).then(res => {
                console.log(res)
            }).catch(err => {
                alert(err)
            })

            this.nomeField = ""
            this.comentarioField = ""
            
        },

        // Methodo que remove dados do Banco
        removeDado: function(i){
            var novoArray = this.dados.filter(dado => dado.id != i)
            this.dados = novoArray

            /* DELETA DO BANCO E DO COMENTARIO */
            axios({
                method: 'post',
                url: 'https://localhost:5001/Home/DeletarComentario/' + i,
            }).then(res => {
                
                console.log(res)
            }).catch(err => {
                alert(err)
            })
        }

    }
    
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
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

    #bloco-image{
        top: 80vw;
    }

    /* formulario comentario */

    .form-comentario label, .form-comentario input{
        display: flex;
    }

    .form-comentario{
        text-align: center;
    }

    .spacing{
        margin: 0 0 15px 0;
        padding: 2px;
    }

    .colorindo{
        color: red;
        text-decoration: none;
    }

</style>
