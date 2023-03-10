

import Seccion from "./Components/Seccion"

const lista = [
  {
    id: 1,
    producto: "EUKANUBA PERRO ADULTO X 20 KG",
    precio: "4.030",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/adulto-raza-mediana21-03524fa04b33d8d1ed16357022062093-480-0.webp"
  },
  {
    id: 2,
    producto: "PEDIGREE PERRO ADULTO X 21KG",
    precio: "7.430",
    img: "https://catycanar.vtexassets.com/arquivos/ids/167311-800-auto?v=638071566721400000&width=800&height=auto&aspect=true"
  },
  {
    id: 3,
    producto: "KUME PERRO ADULTO X 3KG",
    precio: "4.390",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/perro-kume-mordida-standar1-d36bde0d155c0f195a15950411509766-640-01-680428e9e537b5a27616351702109849-1024-1024.webp"
  },
  {
    id: 4,
    producto: "AGILITY ADULTOS X 3KG",
    precio: "3.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/agility-adumed-600x6781-5b19b6fe1891f3f54216059125072555-1024-1024.webp"
  },
  {
    id: 5,
    producto: "VITALCAN COMPLETE ADULTOS X 3KG",
    precio: "5.000",
    img: "https://s.lamason.us/petshopmdq.com/media/2020/11/29105009/VC-COMPLETE-PERRO-MYG-ADULTO2.jpg"
  },
  {
    id: 6,
    producto: "ROYAL CANIN PUPPY X 10KG",
    precio: "4.000",
    img: "https://puppis.vteximg.com.br/arquivos/ids/167003-1000-1000/Royal-Canin-Puppy-Medium.jpg?v=636965493339970000"
  },
  {
    id: 7,
    producto: "ROYAL CANIN JUNIOR X 15KG",
    precio: "4.770",
    img: "https://traviesospetshop.com.ar/wp-content/uploads/2022/04/royal-performance-junior-x-2und.png"
  },
  {
    id: 8,
    producto: "OPTIMUM CACHORROS X 3KG",
    precio: "5.770",
    img: "https://nordenpet.com.ar/wp-content/uploads/2021/02/Optimum-Perro-Cachorro-Raza-Pequena.jpg"
  },
  {
    id: 9,
    producto: "PROPLAN PUPPY X 3KG",
    precio: "3.870",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/cachorro-raza-grande1-af2dbde3676ee6617016051173083360-480-0.webp"
  },
  {
    id: 10,
    producto: "ROYAL CANIN JUNIOR X 10KG",
    precio: "3.970",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQq1BeIjmSraR8Fq8gs-HJC6CVnhxgGOPJjUeeUq0S85lf27yn_QICM6ckZ2U3XsfTENzmB_7VEbCumlmUh0W7yx1uqWJN7g7qc5v2LV7TnK0G4GO5SSjZWEA"
  },
  {
    id: 11,
    producto: "PRETAL PARA PERROS TALLE S",
    precio: "1.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/pretal-paris-11-c196f462818df8a6e116023562258485-480-0.webp"
  },
  {
    id: 12,
    producto: "PRETAL PARA PERROS TALLE M",
    precio: "1.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/pretal-brooklyn1-e13ccce62d751944be16023559416624-480-0.webp"
  },
  {
    id: 13,
    producto: "PRETAL PARA PERROS CAMUFLADO PINK",
    precio: "1.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/camuflado-pink-11-a8eb725cca57c0368615914688746397-480-01-ce2683a5bb0a5714fe16529713838949-480-0.webp"
  },
  {
    id: 14,
    producto: "PRETAL PARA PERROS CAPITAL AMERICA",
    precio: "1.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/captain-america11-c4f3e2462092f27a6c15875272718866-480-0.webp"
  },
  {
    id: 15,
    producto: "PRETAL PARA PERROS ARNES MARBLE",
    precio: "1.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/arnes-marble11-c361dd9126277533c016128716071521-480-01-69120b13e462a72dfe16529710352174-480-0.webp"
  },
  {
    id: 16,
    producto: "RUEDITAS DE GOMA PARA PERROS",
    precio: "2.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/ruedita-cancat1-125edbda75f1407ae415875854189967-480-0.webp"
  },
  {
    id: 17,
    producto: "CUERDAS PARA PERROS",
    precio: "2.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/soga-2-nudos-16-soga-de-tela-con-nudo1-a0db0eb1fdc55c424316445924756769-480-0.webp"
  },
  {
    id: 18,
    producto: "PELOTAS PARA PERROS",
    precio: "770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/pelota-con-chifle1-b7ee0a3cd0091655b215975062822848-480-0.webp"
  },
  {
    id: 19,
    producto: "PELOTAS PORTA COMIDA PARA PERROS",
    precio: "770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/squiki1-68154822edf24226aa16202475984010-480-0.webp"
  },
  {
    id: 20,
    producto: "HUESITOS LIMIADIENTES CON POLLO PARA PERROS",
    precio: "1.500",
    img: "https://cat-oh.com/wp-content/uploads/2020/05/4564-Gweb-2048x2041.jpg"
  },
  {
    id: 21,
    producto: "ROYAL CANIN GATOS X 15KG",
    precio: "5.000",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/screenshot_61-c042b5a512bdefa5ea16678599846932-480-0.webp"
  },
  {
    id: 22,
    producto: "VITALCAN GATOS X 7,5KG",
    precio: "4.770",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/145/238/products/kitten-frente-x751-e9502baf1d46f40ac916485718570775-480-0.webp"
  },
  {
    id: 23,
    producto: "KUMEGATOS ADULT TODAS LAS EDADES X 1,5KG",
    precio: "4.870",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2021/03/packs-producto-gato-300x300.png"
  },
  {
    id: 24,
    producto: "VITALCAN COMPLETE ADULT X 15KG",
    precio: "5.000",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2021/06/Complete-Gato-Adulto-1.5-y-15-Kg-300x300.jpg"
  },
  {
    id: 25,
    producto: "INFINITY GATOS X 10KG",
    precio: "6.370",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2022/04/INFINITY-GATO-x-10kg-300x300.jpg"
  },
  {
    id: 26,
    producto: "NUTRIQUE BABY CAT & KITTEN X 7,5KG",
    precio: "7.500",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2019/07/baby-cat-kitten-300x300.png"
  },
  {
    id: 27,
    producto: "ROYAL CANIN BABY CAT X 10KG",
    precio: "5.370",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2019/01/ROYAL-CANIN-Baby-Cat-x-15-Kg-300x300.jpg"
  },
  {
    id: 28,
    producto: "JUGUETE GATO RASCADOR UNICO COLOR",
    precio: "1.770",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2020/07/20200710_131818-300x300.jpg"
  },
  {
    id: 29,
    producto: "JUGUETE GATO RASCADOR ONDEADA DE CARTON MIMI",
    precio: "1.550",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2020/07/20200710_131720-300x300.jpg"
  },
  {
    id: 30,
    producto: "JUGUETE GATO DISCOVER, UNICO COLOR",
    precio: "1.450",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2020/07/20200710_130043-300x300.jpg"
  },
  {
    id: 31,
    producto: "JUGUETE GATO BLISTER RATITAS, COLORES SURTIDOS",
    precio: "1.550",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2020/07/Inked105752567_3099373346766768_206031201872983091_o_LI-e1609098023288.jpg"
  },
  {
    id: 32,
    producto: "PIEDRITAS SANITARIAS GATOS ABSORSOL PREMIUM X 3,6KG",
    precio: "2.500",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2019/06/Absorsol-x-36kg-300x300.jpg"
  },
  {
    id: 33,
    producto: "PIEDRITAS SANITARIAS THE BEST X 4KG",
    precio: "3.000",
    img: "https://hollywoodpetshop.com.ar/wp-content/uploads/2020/02/The-Best-Sanitario-Mineral-300x300.jpg"
  },
  ]

function App() {
  return (
    <>
      <Seccion lista = {lista} />

    </>

  );
}

export default App;
