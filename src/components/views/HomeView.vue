<template>
    <div class="container mt-5">
      <div class="text-center">
        <h1 class="display-4 text-primary mb-4">Add Tasks con Vue</h1>
        <p class="lead text-secondary mb-4">
          Haz tus listas para poder cumplir con tus objetivos.<br>
          Add tus tareas de forma manual o desde una API. 
        </p>
        <img src="/src/assets/todo.png" class="img-fluid mb-4 logo" alt="Vue logo" />
        <h2 class="text-info mt-4">Secciones de la Aplicación</h2>
        <p class="text-muted">
          <ol>
            <li>          <strong>Añadir Tarea:</strong><br> Permite ingresar nuevas tareas manualmente. <br />
            </li>
            <li>          <strong>Lista de Tareas:</strong><br> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas. <br />
            </li>
            <li>          <strong>Vista Combinada:</strong><br> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.
            </li>
          </ol>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomeView",
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
  }
  
  .display-4 {
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
  
  .lead {
    font-size: 1.25rem;
  }
  
  .logo {
    border-radius: 50%; /* Bordes redondeados */
    box-shadow: 0 0 20px rgba(0, 123, 255, 0.5); /* Sombra más prominente */
    transition: transform 0.3s, box-shadow 0.3s; /* Efecto de transición */
  }
  
  .logo:hover {
    transform: scale(1.1); /* Aumentar el tamaño al pasar el mouse */
    box-shadow: 0 0 30px rgba(0, 123, 255, 0.7); /* Aumentar la sombra al pasar el mouse */
  }
  
  h2 {
    font-weight: bold;
  }
  
  .text-muted {
    font-size: 1rem;
  }
  </style>