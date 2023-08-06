function toggleMode(){
    const html = document.documentElement
   
    //logica:
   
    // if(html.classList.contains('light')){
   //     html.classList.remove('light')
    //} else {
   //     html.classList.add('light')
   // }

   //simplificado *
   html.classList.toggle('light')

   // pegar a tag img

   const img = document.querySelector("#profile img")

   //subistituir a imagem
   if(html.classList.contains('light')){
      //se tiver light mode, adicionar a imagem light
      img.setAttribute("src","./assets/avatar-light.jpg")
   }else
   //se tiver sem o light mode, manter a imagem normal
   img.setAttribute("src","./assets/avatar.jpg")
   img.setAttribute("alt","homem com fundo azul de oculos escuro")
 

   
}