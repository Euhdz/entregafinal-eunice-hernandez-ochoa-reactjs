const productos = [
  {
    id: "1",
    nombre: "Tamales de pollo en salsa verde",
    descripcion:
      "Paquete de 5 tamales con pechuga de pollo en salsa de chiles y cilantro",
    precio: 75,
    img: "../img/tamalverde.jpeg",
    idCat: "1",
    stock: 1000,
  },
  {
    id: "2",
    nombre: "Tamales de chicharrón prensado",
    descripcion: "Paquete de 5 tamales de chicharrón prensado en salsa verde",
    precio: 75,
    img: "../img/tamalchicharron.jpg",
    idCat: "1",
    stock: 1000,
  },
  {
    id: "3",
    nombre: "Tamales de rajas con queso",
    descripcion:
      "Paquete de 5 tamales con rajas de jalapeño, queso manchego y salsa roja",
    precio: 75,
    img: "../img/tamalrajas.jpg",
    idCat: "1",
    stock: 1000,
  },
  {
    id: "4",
    nombre: "Tamales de puerco en chile rojo",
    descripcion:
      "Paquete de 5 tamales con carne de cerdo en adobo de chile rojo",
    precio: 75,
    img: "../img/tamalrojo.jpg",
    idCat: "1",
    stock: 1000,
  },
  {
    id: "5",
    nombre: "Tamal arcoiris",
    descripcion:
      "Paquete con 5 tamales con base de piña y coco, adornado con cacahuate y chispas de sabor",
    precio: 75,
    img: "../img/tamalarcoiris.jpg",
    idCat: "1",
    stock: 1000,
  },
  {
    id: "6",
    nombre: "Atole de galleta",
    descripcion: "Un litro de atole de galletas de vainilla",
    precio: 60,
    img: "../img/atolegalleta.jpg",
    idCat: "2",
    stock: 500,
  },

  {
    id: "7",
    nombre: "Atole de guayaba",
    descripcion: "Un litro de atole de guayabas frescas",
    precio: 60,
    img: "../img/atoleguayaba.jpg",
    idCat: "2",
    stock: 500,
  },

  {
    id: "8",
    nombre: "Brownies",
    descripcion: "Caja con 8 deliciosos brownies",
    precio: 150,
    img: "../img/brownies.jpg",
    idCat: "3",
    stock: 800,
  },
  {
    id: "9",
    nombre: "Mini-muffins de zanahoria",
    descripcion: "Caja con 12 mini-muffins de zanahoria con trocitos de nuez",
    precio: 120,
    img: "../img/muffinzanahoria.jpg",
    idCat: "3",
    stock: 800,
  },
  {
    id: "10",
    nombre: "Mini-pay de nuez",
    descripcion: "Caja con 12 min-pays de nuez",
    precio: 160,
    img: "../img/paynuez.jpg",
    idCat: "3",
    stock: 800,
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
