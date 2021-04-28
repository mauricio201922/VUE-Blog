<template>
<div class="hello">
    

    <!-- Proximo: Fundo preto e imagens -->

    <main class="main-home">
        <div class="Titulo">
            <h1>Welcome Blog</h1>
            <p>este blog desenvolvido com intuito de ajudar a melhorar minhas experiências em Vue</p>
        </div>
        <nav class="all-image">
            <!-- Linha de imagens 1 -->
            <div class="line-one">
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
            </div>

                <!-- Linha de imagens 2 -->
            <div class="line-two">
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
            </div>
        </nav>

        <header class="bg-dark text-center" id="contato">
            <h1 class="text-light">Contato</h1> <br/>

            <div class="d-flex justify-content-center text-white pad">
                <div class="d-grid flex-column spacing-input">
                    
                    <div class="p-1 bd-highlight form-floating col-auto">
                        <input required type="text" name="nome" class="w-100 form-control" id="floatingInputValue" v-model="nomeContato">
                        <label for="floatingInputValue">Nome: </label>
                    </div>

                    <div class="p-1 bd-highlight form-floating col-auto">
                        <input required type="email" name="email" class="form-control" id="floatingInputValue" placeholder="exemplo@exemplo.com" v-model="emailContato">
                        <label for="floatingInputValue">Email: </label>
                    </div>

                    <div class="p-1 bd-highlight form-floating col-auto">
                        <input required type="text" name="tel" class="form-control" id="floatingInputValue" placeholder="(xx) xxxxx-xxxx" v-model="telContato">
                        <label for="floatingInputValue">Telefone/Celular: </label>
                    </div>

                </div>

                <div class="p-2 bd-highlight form-floating">
                    <textarea required placeholder="Digite sua mensagem!" rows="8" cols="50" v-model="msgContato"></textarea>
                </div>

                

            </div>

            <div>
                <button @click="enviarContato" class="btn btn-primary">
                    <div v-if="loading" class="spinner-border spinner-border-sm"></div> Eviar
                </button>
            </div>

            <hr>

            <div class="text-center">
                <span class="text-muted">© 2021 - 2021  |  Blog - Blog do Maurício.</span>
            </div>
        </header>
        <div>{{ $store.getters.testar }}</div>
    </main>

    
</div>
</template>

<script>
//import axios from 'axios'
export default {
  data() {
      return{
          // Valores de contatos
          nomeContato: "",
          emailContato: "",
          telContato: "",
          msgContato: "",

          // carregando os dados
          loading: false,
      }
  },

  methods: {
      enviarContato(){
          try {
              this.loading = true
              setTimeout(() => {
                  this.$store.dispatch('SalvandoContato', {nome: this.nomeContato, email: this.emailContato, telefone: this.telContato, mensagem: this.msgContato})
                  this.loading = false
              }, 1000)
          } finally {
              this.teste = this.$store.state.isLoading
          }
          
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

    /* imagem 1 2 e 3 */

    .img-one, .img-two, .img-three{
        overflow: hidden;
    }

    .img-one img, .img-two img, .img-three img{
        position: relative;
        max-width: 100%;
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    
    .img-one:hover img, .img-two:hover img, .img-three:hover img{
        -moz-transform: scale(1.03);
        -webkit-transform: scale(1.1);
        transform: scale(1.03);
    }

    /* SHEDOW */
    .img-one img, .img-two img, .img-three img{
        box-shadow: 0 2px 5px rgb(100, 100, 100);
    }

    input {
        min-width: 400px;
    }

    .spacing-input{
        padding: 12px;
    }

    .spacing-input input{
        margin: 2px 8px 2px 2px;
    }

    .pad{
        padding: 8px 0 8px 0;
    }

    label {
        color: black;
    }

</style>
