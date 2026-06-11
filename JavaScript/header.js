const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <header>
    <h1>BLOG DE HERCULES</h1>
    <nav class="nav">
      <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="#entradas">Entradas</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>
`;
document.body.prepend(headerTemplate.content);
