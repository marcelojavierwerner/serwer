  const { createApp } = Vue

  createApp({
    data() {
      return {
        url:"https://mocki.io/v1/841afb06-91e1-4221-a1fa-42eb902990f1",
        productosAll:[],
        productos:[],
        
        nombres:[],
        modelos:[],

        nombre:"All",
        modelo:"All",
      }
      
    },
      methods:{
        fetchdata(url){
          fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            this.productos=data.productos
          })  
          .catch(error=>alert("Ups... se produjo un error: " + error))
        },
      },

      created(){
        this.fetchdata(this.url)
      }
  }).mount('#app')
