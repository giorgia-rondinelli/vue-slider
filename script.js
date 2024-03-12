const{createApp}=Vue
createApp({
  data(){
    return{
      images : [
        {
            url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
            title: 'Svezia',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
        },
      
        {
            url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
            title: 'Perù',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
        },
      
        {
            url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
            title: 'Chile',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
        },
        {
            url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
            title: 'Argentina',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
        },
        {
            url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
            title: 'Colombia',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
        },
      ],
      counter:0,
      
      

    }
  },
  methods:{
    nextPrev(isNext){
      if(isNext=true){
        this.counter++
      }
      else{
        this.counter--
      }

      if (this.counter===this.images.length){
        this.counter=0
      }
      else if(counter===-1){
             counter=images.length-1
           }
    }

  }
}).mount('#app')


// setInterval(()=>{
//   imgCollection[counter].classList.remove('active')
//   thumbCollection[counter].classList.remove('active')
//   counter++
//   if(counter===images.length){
//     counter=0
//   }
//   imgCollection[counter].classList.add('active')
//   thumbCollection[counter].classList.add('active')
// },2000)

// // elementi 
// const imgContainer= document.querySelector('.my-carousel-images')
// console.log(imgContainer)
// let counter= 0
// const containerThumb= document.querySelector('.my-thumbnails')
// console.log(containerThumb)
// // const containerimg= document.querySelectorAll('.my-thumbnail')
// // console.log(containerimg)


// // bottoni
// const btnNext=document.querySelector('.my-next')
// console.log(btnNext)
// const btnPrev=document.querySelector('.my-previous')
// console.log(btnPrev)

// // inserisco immagini con template literal
// for(let i=0;i<images.length; i++){
//   const img=images[i]
//   console.log(img.url)
//   console.log(img.title)
//   imgContainer.innerHTML+=`<div class="my-carousel-item ">
//     <img class="img-fluid" src="${img.url}" alt="${img.title} picture">
//     <div class="item-description px-3">
//         <h2>${img.title}</h2>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.</p>
//     </div>
//   </div>`
//   containerThumb.innerHTML+=`<div class="my-thumbnail">
//   <img class="img-fluid" src="${img.url}" alt="Thumbnail of Svezia picture">
// </div>`
  
// }

// // raggruppo elementi con classe my-carousel-item 
// const imgCollection=document.getElementsByClassName('my-carousel-item')
// console.log(imgCollection)
// const thumbCollection=document.getElementsByClassName('my-thumbnail')
// console.log(thumbCollection)

// // rendo visibile solo la prima immagine 
// imgCollection[counter].classList.add('active')
// thumbCollection[counter].classList.add('active')






// // creo funzione per bottone nexr
// btnNext.addEventListener('click', function()
// {
//   imgCollection[counter].classList.remove('active')
//   thumbCollection[counter].classList.remove('active')
//   counter++
//   if(counter===images.length){
//     counter=0
//   }
//   imgCollection[counter].classList.add('active')
//   thumbCollection[counter].classList.add('active')


// })


// // creo funzione per bottone prev 
// btnPrev.addEventListener('click',function(){
//   imgCollection[counter].classList.remove('active')
//   thumbCollection[counter].classList.remove('active')
//   counter--
//   if(counter===-1){
//     counter=images.length-1
//   }
//   imgCollection[counter].classList.add('active')
//   thumbCollection[counter].classList.add('active')

// })