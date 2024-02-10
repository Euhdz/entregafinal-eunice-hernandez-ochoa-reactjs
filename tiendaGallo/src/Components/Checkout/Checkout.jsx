import React from "react";
import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

import "./Checkout.css";

const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState("");

  //Función manejador del formulario

  const manejadorSubmit = (event) => {
    event.preventDefault();

    //Verificamos que todos los campos se completen:
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Es obligatorio llenar todos los campos");
      return;
    }
    //Validamos que el email coincida:
    if (email !== emailConfirmacion) {
      setError("Por favor verifique que los emails coincidan");
      return;
    } else setError("");

    //Creamos un objeto con todos los datos de la orden:

    ////DUDA MIA: Checar por qué en cantidad no se pone el item o si se refiere a cantidad total.
    ////FALTA METER DESCRIPCION ( pero también en carrito)
    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),

      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
      //SI SE QUIERE SE PUEDE CREAR UN OBJETO CLIENTE PARA GUARDAR LA INFO
    };

    //Guardamos la orden de compra en la base de datos:
    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
        //Limpiamos los campos del formulario:
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEmailConfirmacion("");
        setError("");
        //Mostrar el ID de la orden con una alerta:
        Swal.fire({
          title: "Se generó con éxito tu orden de compra",
          text: `El número de tu orden es: ${docRef.id}`,
          icon: "success",
        }).then(function () {
          window.location = "./";
        });
      })
      .catch((error) => {
        console.log("Error al crear la orden de compra", error);
        setError("No fue posible crear la orden de compra");
      });
  };

  return (
    <div>
      <h2>Checkout - Finalizamos la Compra</h2>

      <form onSubmit={manejadorSubmit}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {" "}
              {producto.item.nombre} x {producto.cantidad}{" "}
            </p>
            <p> {producto.item.precio} </p>
            <hr />
          </div>
        ))}
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="emailconf">E-mail Confirmación</label>
          <input
            type="email"
            id="emailconf"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}> {error} </p>}

        <div>
          <button className="btnCheckout" disabled={carrito.length === 0}>
            {" "}
            Finalizar Orden{" "}
          </button>
          <button className="btnCheckout" type="reset">
            {" "}
            Borrar{" "}
          </button>
        </div>
        {/* PENDIENTE: meter estilos a botones, definir clase btnCheckout en css */}

        {/* {ordenId && (
          <strong>
            {" "}
            Gracias por tu compra. Tu número de orden es el siguiente: {
              ordenId
            }{" "}
          </strong>
        )} */}
      </form>
    </div>
  );
};

export default Checkout;
