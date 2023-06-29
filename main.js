alert("Bienvenido a Tienda Oficial de Cine Católico");

document.addEventListener("DOMContentLoaded", () => {
  let total_compra = 0;
  let lista_articulos = "";

  while (true) {
    let articulo = solicitarCodigo();
    if (articulo === "terminar" || articulo === null) {
      break;
    }

    let cantidad = solicitarCantidad();
    if (cantidad === null) {
      break;
    }

    let descripcion = getDescripcionArticulo(articulo);
    if (descripcion === "") {
      alert("Artículo no encontrado");
      continue;
    }

    let importe = getImporte(articulo);
    let subtotal = importe * cantidad;
    lista_articulos += `${descripcion} - Cantidad: ${cantidad} - Subtotal: S/${subtotal.toFixed(2)}<br>`;
    total_compra += subtotal;
  }

  if (total_compra > 0) {
    document.write("Lista de artículos comprados:<br>" + lista_articulos);
    document.write("El total de la compra es: S/" + total_compra.toFixed(2));
  } else {
    document.write("Compra vacía!");
  }
});

function solicitarCodigo() {
  let articulo = prompt("Ingrese el código del artículo (o 'terminar' para finalizar la compra')");
  if (validarInput(articulo)) {
    return articulo;
  }
  return null;
}

function solicitarCantidad() {
  let cantidad = prompt("Ingrese la cantidad que desea comprar");
  if (validarInput(cantidad) && validarCantidad(cantidad)) {
    return parseInt(cantidad);
  }
  return null;
}

function validarInput(input) {
  if (!input || input.trim() === "") {
    alert("Entrada vacía");
    return false;
  }
  return true;
}

function validarCantidad(cantidad) {
  if (isNaN(parseInt(cantidad))) {
    alert("Debe ingresar un número válido para la cantidad");
    return false;
  }
  return true;
}

function getDescripcionArticulo(articulo) {
  let descripcion = "";

  switch (articulo) {
    case "1":
      descripcion = "Taza de Cerámica - S/ 20.00";
      break;
    case "2":
      descripcion = "Taza Metálica - S/ 15.00";
      break;
    case "3":
      descripcion = "Polera Unisex - S/ 40.00";
      break;
    case "4":
      descripcion = "Polo Unisex - S/ 30.00";
      break;
  }

  return descripcion;
}

function getImporte(articulo) {
  let importe = -1;

  switch (articulo) {
    case "1":
      importe = 20;
      break;
    case "2":
      importe = 15;
      break;
    case "3":
      importe = 40;
      break;
    case "4":
      importe = 30;
      break;
  }

  return importe;
}
