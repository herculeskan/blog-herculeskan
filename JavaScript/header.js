const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <header>
    <h1>🦍 BLOG DE HERCULES</h1>
    <nav class="nav">
      <ul>
        <li><a href="https://herculeskan.github.io/blog-herculeskan/">Home</a></li>
        <li><a href="../lista-entrada/lista_entradas.html">Entradas</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>
`;
document.body.prepend(headerTemplate.content);
