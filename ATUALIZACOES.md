# Atualização de identidade visual e editorial — Faculdade BP
**LP: Pós-Graduação em Gestão da Qualidade e Segurança do Paciente**
Data: 04/03/2026

---

## 1. Cor da fonte

**Problema:** Textos sem destaque utilizavam preto puro (`#000000`), cor não prevista no guia da marca.

**Correção:** Todos os textos sem destaque passam a usar o **cinza BP** em todo o projeto.

| Token CSS | Antes | Depois |
|---|---|---|
| `--foreground` | `#000000` (preto) | `#6E6E6E` (cinza BP) |
| `--card-foreground` | `#000000` (preto) | `#6E6E6E` (cinza BP) |
| `--popover-foreground` | `#000000` (preto) | `#6E6E6E` (cinza BP) |

> RGB utilizado: R: 110 · G: 110 · B: 110

---

## 2. Nomenclatura da instituição

### 2a. Remoção de "BP Educação e Pesquisa"

| Local | Antes | Depois |
|---|---|---|
| `IntroSection` — parágrafo | "…oferecida pela **BP Educação e Pesquisa**…" | "…oferecida pela **Faculdade BP**…" |
| `IntroSection` — feature card | "**BP Educação**" | "**Faculdade BP**" |
| `IntroSection` — link | "Ver página completa do curso no site da BP →" | "Ver página completa do curso na **Faculdade BP** →" |
| `Footer` — coluna | "**BP Educação**" | "**Faculdade BP**" |
| `TrustSection` — título | "Por que escolher a **Pós-Graduação BP**" | "Por que escolher a **Faculdade BP**" |
| `TrustSection` — descrição | "A pós-graduação **da BP** é reconhecida pelo MEC" | "A pós-graduação **da Faculdade BP** é reconhecida pelo MEC" |

### 2b. Padronização de "BP - A Beneficência Portuguesa de São Paulo"

| Local | Antes | Depois |
|---|---|---|
| `TrustSection` — descrição | "BP - **Beneficência** Portuguesa de São Paulo" | "BP - **A Beneficência** Portuguesa de São Paulo" |
| `Footer` — copyright | "© 2026 BP - **Beneficência** Portuguesa de São Paulo." | "© 2026 BP - **A Beneficência** Portuguesa de São Paulo." |
| `index.html` — meta author | "BP - **Beneficência** Portuguesa de São Paulo" | "BP - **A Beneficência** Portuguesa de São Paulo" |

### 2c. Primeira menção com nome completo (conforme padrão solicitado)

| Local | Antes | Depois |
|---|---|---|
| `TrustSection` — corpo docente | "Nossos professores são profissionais que atuam diretamente na BP…" | "Nossos professores são **profissionais qualificados da Faculdade da BP - A Beneficência Portuguesa de São Paulo** que atuam diretamente…" |
| `FAQContactSection` — FAQ "O curso é reconhecido pelo MEC?" | "…pela BP Educação e Pesquisa **(Faculdade BP – Beneficência Portuguesa de São Paulo)**…" | "…pela **Faculdade BP - A Beneficência Portuguesa de São Paulo**…" |

---

## 3. "Especialize-se" no lugar de "Forme-se"

| Local | Antes | Depois |
|---|---|---|
| `HeroSection` — subtítulo | "**Forme-se** como líder para a excelência em saúde." | "**Especialize-se** como líder para a excelência em saúde." |
| `IntroSection` — título da seção | "**Forme-se** como Líder para a Excelência em Saúde" | "**Especialize-se** como líder para a excelência em saúde" |
| `Footer` — descrição | "**Forme-se** como líder para a excelência em saúde…" | "**Especialize-se** como líder para a excelência em saúde…" |
| `TestimonialsSection` — título | "Histórias de Quem Já **Se Formou**" | "Histórias de quem já **se especializou**" |

---

## 4. Gramática — sentence case

Regra aplicada: apenas a primeira letra de uma frase em maiúscula, exceto nomes próprios e de produtos (ex.: "Faculdade BP", "Pós-Graduação em Gestão da Qualidade e Segurança do Paciente").

| Componente | Exemplos corrigidos |
|---|---|
| `Header` | "O Que Você Aprende" → "O que você aprende" |
| `HeroSection` | "Saiba Mais Sobre o Curso" → "Saiba mais sobre o curso" |
| `IntroSection` | "Foco em Liderança" → "Foco em liderança" · "Excelência em Saúde" → "Excelência em saúde" |
| `CoursesSection` | "Identificação de Problemas" → "Identificação de problemas" · "Segurança do Paciente" → "Segurança do paciente" · e demais cards |
| `TrustSection` | "Instituição de Referência em Saúde" → "Instituição de referência em saúde" · "Corpo Docente Especializado" → "Corpo docente especializado" · etc. |
| `CTASection` | "Transforme Sua Carreira em Liderança e Gestão em Saúde" → "Transforme sua carreira…" · "Fale com Nosso Time" → "Fale com nosso time" |
| `FAQContactSection` | "Dúvidas Frequentes" → "Dúvidas frequentes" · "Entre em Contato" → "Entre em contato" · "Nome Completo" → "Nome completo" · "Enviar Minha Solicitação" → "Enviar minha solicitação" |
| `Footer` | "Sobre o Curso" → "Sobre o curso" · "O Que Você Vai Aprender" → "O que você vai aprender" · "Página do Curso" → "Página do curso" · "Nos Acompanhe:" → "Nos acompanhe:" |

---

## 5. Depoimentos — fotos e nomes

**Problema:** As fotos geradas por IA estavam com aparência artificial, com risco de afastar o público. Além disso, foi solicitada atenção para que os nomes correspondam ao gênero representado nas imagens.

**Solução aplicada:** As fotos foram **removidas** e substituídas por **avatares com iniciais** nas cores da marca (roxo e verde-água da Faculdade BP), solução limpa e profissional enquanto fotos reais não são fornecidas.

Os nomes foram revisados para clareza de gênero e adequação ao contexto do curso:

| # | Avatar | Nome | Cargo |
|---|---|---|---|
| 1 | MO (roxo) | Dra. Marina Oliveira | Gestora de qualidade — Hospital de Referência SP |
| 2 | AP (verde-água) | Enf. Ana Paula Silva | Coordenadora de qualidade e segurança |
| 3 | RS (roxo) | Dr. Ricardo Santos | Consultor em gestão da qualidade em saúde |

> **Próximo passo sugerido:** substituir os avatares por fotos reais de egressos ou alunos do curso, mediante autorização. Basta trocar o componente de iniciais por uma tag `<img>` no arquivo `TestimonialsSection.tsx`.

---

## 6. Links para o site da Faculdade

| Local | Antes | Depois |
|---|---|---|
| `IntroSection` — link do curso | URL correto, label desatualizado | Mesmo URL, label atualizado para "Faculdade BP" |
| `Footer` — "Página do curso" | `educacaoepesquisa.bp.org.br/cursos/...` | Mantido (é o site oficial da Faculdade BP) |
| `Footer` — "Outros cursos" | `educacaoepesquisa.bp.org.br/` | Mantido (é o site oficial da Faculdade BP) |

> **Nota:** O domínio `educacaoepesquisa.bp.org.br` **é** o site oficial da Faculdade BP — o nome do domínio ainda não foi atualizado, mas o site já se apresenta como "Faculdade BP". Caso o domínio mude futuramente, basta substituir a URL nos componentes `IntroSection.tsx` e `Footer.tsx`.

---

## 7. Redes sociais no rodapé

As contas foram atualizadas de `@hospitalbp` para as contas oficiais da **Faculdade BP**:

| Rede | Antes | Depois |
|---|---|---|
| Instagram | `instagram.com/hospitalbp/` | `instagram.com/faculdadebp/` |
| Facebook | `facebook.com/hospitalbp` | `facebook.com/faculdadebp` |
| YouTube | `youtube.com/hospitalbp` | `youtube.com/@faculdadebp` |
| LinkedIn | `linkedin.com/company/hospitalbp/` | `linkedin.com/showcase/bp-educa-o-e-pesquisa/` |

---

## 8. Meta tags (`index.html`)

| Tag | Antes | Depois |
|---|---|---|
| `<title>` | "Pós-Graduação BP \| Especialize-se em Saúde com Excelência" | "Faculdade BP \| Especialize-se em saúde com excelência" |
| `og:title` | "Pós-Graduação BP \| Especialize-se em Saúde" | "Faculdade BP \| Especialize-se em saúde" |
| `og:description` | "…excelência da Beneficência Portuguesa de São Paulo." | "…excelência da Faculdade BP - A Beneficência Portuguesa de São Paulo." |
| `author` | "BP - Beneficência Portuguesa de São Paulo" | "BP - A Beneficência Portuguesa de São Paulo" |
| `keywords` | "…BP, Beneficência Portuguesa…" | "…BP, Faculdade BP…" |

---

## Próximos passos

- [ ] Fornecer fotos reais de egressos para substituir os avatares nos depoimentos
- [ ] Aplicar as mesmas correções nas LPs de **Odontologia Hospitalar** e **Enfermagem em Oncologia**
- [ ] Confirmar novo domínio da Faculdade BP caso seja criado (para atualizar os links)
