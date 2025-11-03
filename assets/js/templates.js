// assets/js/templates.js

function templateHome() {
  return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-content">
        <h1 id="hero-title">ONG Exemplo — Transformando Comunidades</h1>
        <p class="lead">Promovemos inclusão e desenvolvimento por meio de projetos educacionais e socioambientais.</p>
        <p>
          <a class="btn" href="projetos.html" data-link>Conheça nossos projetos</a>
          <a class="btn btn-outline" href="cadastro.html" data-link>Seja voluntário</a>
        </p>
      </div>
      <figure class="hero-media" aria-hidden="true">
        <img src="assets/images/banner-principal.png" alt="Voluntários em ação">
      </figure>
    </section>

    <section aria-labelledby="sobre-title" class="about">
      <h2 id="sobre-title">Missão, Visão e Valores</h2>
      <p>Nossa missão é promover oportunidades e reduzir desigualdades locais com ações sustentáveis e participação comunitária.</p>
      <ul class="values">
        <li>Inclusão</li>
        <li>Transparência</li>
        <li>Sustentabilidade</li>
      </ul>
    </section>
  `;
}

function templateProjetos() {
  return `
    <h1>Projetos Sociais</h1>
    <p>Conheça nossos projetos e oportunidades de participação.</p>

    <section class="project-list" aria-labelledby="lista-title">
      <h2 id="lista-title">Principais Projetos</h2>

      <article class="project" aria-labelledby="p1-title">
        <img src="assets/images/projeto-educacao.png" alt="Oficina de tecnologia">
        <h3 id="p1-title">Oficina de Tecnologia</h3>
        <p>Capacitação digital para jovens: aulas de programação, robótica e empreendedorismo.</p>
        <p><strong>Vagas:</strong> 20 • <strong>Duração:</strong> 3 meses</p>
      </article>

      <article class="project" aria-labelledby="p2-title">
        <img src="assets/images/projeto-doacoes.png" alt="Horta comunitária">
        <h3 id="p2-title">Horta Comunitária</h3>
        <p>Projeto de agricultura urbana para segurança alimentar e sustentabilidade.</p>
      </article>
    </section>

    <section class="donate" aria-labelledby="doa-title">
      <h2 id="doa-title">Como doar</h2>
      <p>Doações via transferência ou plataformas parceiras. A transparência é nossa prioridade.</p>
      <a class="btn" href="cadastro.html" data-link>Apoie um projeto</a>
    </section>
  `;
}

function templateCadastro() {
  return `
    <h1>Cadastro de Voluntário / Doador</h1>
    <p>Preencha seus dados. Campos com <span aria-hidden="true">*</span> são obrigatórios.</p>

    <form id="cadastroForm" action="#" method="post" novalidate>
      <fieldset>
        <legend>Dados Pessoais</legend>

        <label for="nome">Nome completo <span aria-hidden="true">*</span></label>
        <input id="nome" name="nome" type="text" required minlength="3">

        <label for="email">E-mail <span aria-hidden="true">*</span></label>
        <input id="email" name="email" type="email" required>

        <label for="cpf">CPF <span aria-hidden="true">*</span></label>
        <input
          id="cpf"
          name="cpf"
          type="text"
          inputmode="numeric"
          pattern="^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$"
          placeholder="000.000.000-00"
          required
        >

        <label for="telefone">Telefone</label>
        <input id="telefone" name="telefone" type="tel" inputmode="tel" placeholder="(00) 00000-0000">

        <label for="nascimento">Data de nascimento</label>
        <input id="nascimento" name="nascimento" type="date">
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>

        <label for="cep">CEP</label>
        <input id="cep" name="cep" type="text" inputmode="numeric" placeholder="00000-000">

        <label for="endereco">Endereço</label>
        <input id="endereco" name="endereco" type="text">

        <label for="cidade">Cidade</label>
        <input id="cidade" name="cidade" type="text">

        <label for="estado">Estado</label>
        <select id="estado" name="estado">
          <option value="">Selecione</option>
          <option value="SP">SP</option>
          <option value="RJ">RJ</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Preferências</legend>
        <label>
          <input type="checkbox" name="voluntario"> Desejo ser voluntário
        </label>
        <label>
          <input type="checkbox" name="doador"> Desejo receber notícias sobre doações
        </label>
      </fieldset>

      <div class="form-actions">
        <button type="submit" class="btn">Enviar cadastro</button>
        <button type="reset" class="btn btn-outline">Limpar</button>
      </div>
      <p id="formMsg" role="status" aria-live="polite"></p>
    </form>
  `;
}

function templateNotFound() {
  return `
    <section class="container">
      <h1>Página não encontrada</h1>
      <p>A página solicitada não existe. <a href="index.html" data-link>Voltar ao início</a>.</p>
    </section>
  `;
}

window.Templates = {
  home: templateHome,
  projetos: templateProjetos,
  cadastro: templateCadastro,
  notFound: templateNotFound
};
