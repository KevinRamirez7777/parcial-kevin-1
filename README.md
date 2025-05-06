# parcial-kevin-1
# POSTMAIL API

API PARCIAL API POSTMAIL REST con Node.js + Express + MongoDB

## Requisitos

- Node.js
- npm

## Instalación

```bash
npm install express
node app.js
```

## Endpoints

### Crear usuario
**POST** `/user`

```json
{
  "id": "123",
  "name": "Juan",
  "packagePrice": 135
}
```

### Ver créditos
**GET** `/user/:id/creditos`

### Agregar envío
**POST** `/envio/:userId`

```json
{
  "envio": {
    "nombre": "Maria",
    "direccion": "Calle Real",
    "telefono": "78945612",
    "referencia": "Casa blanca",
    "observacion": "Tocar la puerta"
  },
  "producto": {
    "descripcion": "Zapatos",
    "peso": 3.5,
    "bultos": 1,
    "fecha_entrega": "2025-05-04"
  }
}
```

### Consultar envíos
**GET** `/envios/:userId`

### Eliminar envío
**DELETE** `/envio/:id`