const productos = [
  {
    id: "1",
    nombre: "Pollo en salsa verde",
    descripcion: "Paquete de 5 tamales con pollo en salsa verde con cilantro",
    precio: 100,
    img: "../img/tamalverde.jpeg",
    idCat: "1",
  },
  {
    id: "2",
    nombre: "Pollo con mole",
    descripcion: "Paquete de 5 tamales con pollo en mole poblano",
    precio: 100,
    img: "../img/tamalmole.jpg",
    idCat: "1",
  },
  {
    id: "3",
    nombre: "Rajas con queso",
    descripcion:
      "Paquete de 5 tamales con rajas de jalapeño, queso manchego y salsa roja",
    precio: 110,
    img: "../img/tamalrajas.jpg",
    idCat: "1",
  },
  {
    id: "4",
    nombre: "Cerdo en chile rojo",
    descripcion:
      "Paquete de 5 tamales con carne de cerdo en adobo de chile rojo",
    precio: 90,
    img: "../img/tamalrojo.jpg",
    idCat: "1",
  },
  {
    id: "5",
    nombre: "Atole de galleta",
    descripcion: "Un litro de atole de galletas",
    precio: 50,
    img: "../img/atolegalleta.jpg",
    idCat: "2",
  },
  {
    id: "6",
    nombre: "Atole de guayaba",
    descripcion: "Un litro de atole de guayabas frescas",
    precio: 60,
    img: "../img/atoleguayaba.jpg",
    idCat: "2",
  },
  {
    id: "7",
    nombre: "Atole de chocolate",
    descripcion: "Un litro de atole de chocolate",
    precio: 70,
    img: "../img/atolechocolate.jpg",
    idCat: "2",
  },
  {
    id: "8",
    nombre: "Brownies",
    descripcion: "Caja con 8 brownies",
    precio: 150,
    img: "../img/brownies.jpg",
    idCat: "3",
  },
  {
    id: "9",
    nombre: "Mini-muffins de zanahoria",
    descripcion: "Caja con 12 mini-muffins de zanahoria",
    precio: 120,
    img: "../img/muffinzanahoria.jpg",
    idCat: "3",
  },
  {
    id: "10",
    nombre: "Mini-pay de nuez",
    descripcion: "Caja con 12 min-pays de nuez",
    precio: 140,
    img: "../img/paynuez.jpg",
    idCat: "3",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      resolve(producto);
    }, 2000);
  });
};

//Función que filtra por categoría

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 2000);
  });
};
