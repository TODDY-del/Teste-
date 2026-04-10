# IDENTIDADE VISUAL — Gráfica Cristalina

## Stack Técnica
- Tailwind CSS para toda estilização (NUNCA criar arquivos .css separados)
- shadcn/ui como base de componentes, customizados via className
- Todos os valores visuais definidos como TOKENS SEMÂNTICOS no tailwind.config
- NUNCA usar valores hardcoded no código — sempre tokens semânticos
- NUNCA usar cores/radius/sombras padrão do Tailwind — apenas tokens deste documento
- A IA que implementa é RESPONSÁVEL por criar SVGs originais e composições visuais únicas baseadas nas descrições abaixo — NÃO use decoração genérica
- A paleta usa as cores extraídas diretamente da logo oficial: azul marinho `#2E466D` como primário, azul médio `#2782C4` como secundário, azul celeste `#60B3E3` como accent claro. NÃO introduzir nenhuma outra cor vibrante.

## Setup Necessário

### Libs adicionais
| Lib | Pra quê | Instalação |
|---|---|---|
| `framer-motion` | Micro-interações no Hero e hover nos cards de serviço | `npm i framer-motion` |

### Assets externos
| Asset | Pra quê | Como gerar |
|---|---|---|
| Logo SVG | Cabeçalho e footer | Já fornecida pelo cliente — `/public/logo.svg` |
| Google Maps embed | Seção de localização | Google Maps → Compartilhar → Incorporar mapa |

---

## Paleta Extraída da Logo (fonte da verdade)

A logo da Gráfica Cristalina é composta por um gradiente de 20 tons de azul, extraídos diretamente do SVG oficial:

**Escuros (âncora):** `#2E466D` · `#2F4E7C` · `#285893` · `#2B568B` · `#255B97`
**Médios:** `#1463A5` · `#1169AF` · `#106AB2` · `#1A71B7` · `#1E77BC` · `#2782C4`
**Claros:** `#238ECC` · `#2E95D1` · `#2F98D4` · `#45A9DF` · `#42A7DD` · `#41A6DD` · `#55AEE1` · `#5EB2E3` · `#60B3E3`

**Stroke da logo:** `#373435` (quase preto) e `#2E466D`

### Seleção para a interface (3 tons âncora)

| Papel | Hex | Onde aparece |
|---|---|---|
| `accent-primary` | `#2E466D` | Botões, fundo CTA final, borda card horário, ícones ativos, texto de destaque |
| `accent-mid` | `#2782C4` | Links, bordas ativas, badge "aberto", crop marks do hero |
| `accent-light` | `#60B3E3` | Badges, hover tints, dot de status, balões CTA, subtítulo do CTA, ponta do gradiente |

Todo o resto da interface: branco e cinza frio neutro. A força vem do contraste entre o marinho sólido e o fundo limpo.

### Gradiente da marca (uso pontual — apenas 3 lugares)
`linear-gradient(90deg, #2E466D 0%, #2782C4 50%, #60B3E3 100%)`

Aparece em **exatamente** 3 pontos da interface:
1. Linha `border-top` de 2px no footer
2. Barra de régua horizontal abaixo de cada métrica de número
3. Bordas decorativas das folhas no hero (linhas de registro de impressão)

Em nenhum outro lugar. Gradiente como assinatura da marca, não como cor de fundo geral.

---

## A Alma do App

Gráfica Cristalina é uma gráfica de bairro com décadas de confiança — não é uma startup, é um ofício. O site transmite seriedade de quem trabalha com precisão, papel e tinta. A paleta de azuis da logo — do marinho profundo ao celeste luminoso — é a identidade visual: confiança, clareza e profissionalismo. O cliente chega, entende o que a gráfica faz, confia, e clica no WhatsApp.

---

## Referências e Princípios

- **ElectroShop (referência 1):** Estrutura clara de loja física com hero dominante, categorias em cards horizontais, grid de serviços com ícones e labels claros, footer completo com localização e horário. → Princípio: hierarquia de informação em camadas descendentes de importância → Aplicação: Hero com CTA de WhatsApp → Serviços em cards → Localização e horário → Footer com contato.

- **SwiftBook (referência 2):** Hero com título audacioso, prova social imediata, cor de marca única e forte, fundo escuro com accent reconhecível. → Princípio: cor única forte + números de credibilidade reduzem fricção de decisão → Aplicação: azul marinho `#2E466D` como cor dominante da marca, métricas de confiança em seção dedicada.

---

## Decisões de Identidade

### ESTRUTURA

#### Navegação
**O que:** Barra de navegação horizontal fixa no topo, simples e limpa. Logotipo à esquerda. Links centrais discretos: Início, Serviços, Sobre, Contato. Botão de WhatsApp à direita com fundo `accent-primary` (azul marinho) e texto branco.
**Por que:** Público amplo. O botão marinho na navbar estabelece a cor da marca no primeiro elemento interativo. Navegação simples remove fricção.
**Como:** `bg-surface-page border-b border-border-subtle sticky top-0 z-50`. Botão: `bg-accent-primary text-inverse rounded-button`.
**Nunca:** Hamburger menu em desktop. Menu mega. Sidebar. Dropdowns desnecessários. Botão em outra cor.

#### Layout Geral — Página Única (One Page)
**O que:** Site de página única com seções em scroll. Ordem: Hero → Serviços → Diferenciais e Números → Horário e Localização → CTA Final → Footer.
**Por que:** O público não quer explorar um site — quer encontrar a informação rapidamente e entrar em contato. One page remove decisões de navegação.
**Como:** Sections com `id` para âncoras do menu. Alternância de fundo: branco → `surface-card` (cinza frio) → branco → `accent-primary` (CTA) → `surface-footer` (escuro).
**Nunca:** Múltiplas páginas separadas. Carregamento de novas URLs para cada seção.

#### Hierarquia de CTA
**O que:** O CTA de WhatsApp aparece 3 vezes: na navbar, no hero, e numa seção de CTA final. Em mobile, um botão flutuante fixo no rodapé da tela sempre visível.
**Por que:** O objetivo único do site é converter visita em contato via WhatsApp. Máxima visibilidade do único CTA.
**Como:** Hero com botão grande `h-14 px-8`. CTA final com fundo `bg-accent-primary` full-width e botão invertido branco. Botão flutuante mobile com `fixed bottom-6 right-6 z-50`.
**Nunca:** Múltiplos CTAs concorrentes (newsletter, cadastro, etc.). Diluir a ação principal.

---

### LINGUAGEM

#### Tipografia
**O que:** Display font serifada condensada para títulos principais — evoca tradição e solidez, qualidades de uma gráfica estabelecida. Fonte sans-serif limpa para corpo e UI. Contraste intencional entre serif de impacto e sans clean.
**Por que:** Fontes serifadas têm associação histórica com impressão, tipografia e gráficas — é uma escolha temática, não apenas estética.
**Como:** `font-display` em H1 e H2. `font-body` em parágrafos, labels, botões. Par: "Playfair Display" + "DM Sans". Google Fonts.
**Nunca:** Inter, Roboto, ou Arial. Mais de 2 famílias. Serifada no corpo de texto.

#### Cores — Sistema (da logo)
**O que:** Base light (branco + cinza frio levíssimo) + azul marinho `#2E466D` como cor primária da marca, `#2782C4` como cor média e `#60B3E3` como accent decorativo. Todas extraídas da logo.
**Por que:** As cores da logo são a marca. Azul marinho = confiança, seriedade, profissionalismo. O celeste adiciona clareza e leveza. O gradiente entre eles é a assinatura visual da Gráfica Cristalina.
**Como:** Ver tabela de tokens abaixo.
**Nunca:** Introduzir cores fora da paleta da logo (laranja, verde, roxo, amarelo etc). Gradiente em fundos de seção, em cards, em botões. Cinza neutro como botão principal.

#### Geometria
**O que:** Cantos levemente arredondados (8px a 12px) — suave, mas não pill. Bordas finas com tom frio. Profundidade via alternância de fundos entre seções.
**Por que:** Profissionalismo sem frieza. Não é startup com pills e glassmorphism.
**Como:** Tokens `radius-card: 10px`, `radius-button: 8px`.
**Nunca:** Rounded-full em cards. Sombras coloridas. Glassmorphism.

#### Ícones
**O que:** Ícones Lucide em estilo line de espessura 1.5px, tamanho 20-24px na nav e texto. Em cards de serviço, ícones maiores (40-48px) dentro de um quadrado arredondado com fundo `accent-subtle` (azul celeste a 12% de opacidade).
**Por que:** O fundo celeste nos ícones conecta à paleta da logo sem poluir.
**Como:** `bg-accent-subtle p-3 rounded-[10px]` envolvendo o ícone Lucide em `text-accent-primary`.
**Nunca:** Ícones filled misturados com line. Ícones em cores fora da paleta.

---

### RIQUEZA VISUAL

#### Textura Ambiente
**O que:** Pattern sutil de linhas horizontais paralelas muito finas — evocando linhas de papel — nas seções de fundo `surface-card`, com opacidade de 3%.
**Temática:** Linhas de papel é a metáfora mais direta para uma gráfica. O pattern é tão sutil que parece quase acidental.
**Tratamento:** SVG inline de linhas horizontais repetido como background-image via CSS. Cor `#2E466D` (azul marinho da logo) com `opacity: 0.03`. Espaçamento entre linhas: 12px. Espessura: 0.5px. Fixo — não se move com scroll.

---

#### Conceitos Visuais por Componente

##### Hero — A Promessa da Gráfica
**Representa:** A porta de entrada — o momento em que o cliente decide se confia o suficiente para entrar em contato.
**Metáfora visual:** Folhas de papel com as marcas de registro e corte de impressão profissional — a assinatura de quem sabe o que faz. As bordas usam o gradiente da logo como linhas de registro.
**Cena detalhada:** Lado direito do hero (40-45% em desktop). Folha branca retangular rotacionada -6°, com `shadow-hero-sheet`. Nas bordas superior e inferior da folha: linha fina de 2px com gradiente `#2E466D → #2782C4 → #60B3E3` percorrendo toda a largura — linhas de registro de impressão profissional. Nos 4 cantos da folha: traços em L de 12px × 8px na cor `#2782C4` — crop marks de gráfica, como os que aparecem em qualquer arquivo de impressão real. Logo da Gráfica Cristalina centralizada dentro da folha em tamanho generoso. Segunda folha idêntica parcialmente visível atrás, deslocada 10px para baixo e 8px para a direita, `opacity: 0.3` — sensação de pilha de impressos saindo da gráfica. Fundo: branco puro.
**Viabilidade:** CÓDIGO PURO — `div` com `transform: rotate(-6deg)`, sombra CSS, logo SVG inline, crop marks como elementos `span` posicionados absolutamente.

##### Cards de Serviço
**Representa:** O cardápio de possibilidades — a resposta para "eles fazem o que eu preciso?".
**Metáfora visual:** Cada card tem no canto superior direito uma miniatura SVG da silhueta do produto impresso daquele serviço — não ícone genérico, mas a forma reconhecível do objeto.
**Cenas por tipo de serviço:**
- **Cartão de Visita:** Retângulo pequeno inclinado 8°, com duas linhas finas (texto) e quadrado pequeno no canto (logo) — silhueta imediatamente reconhecível de cartão de visita.
- **Banner/Lona:** Retângulo horizontal largo e baixo com dois círculos nas extremidades superiores (ilhós) — associação universal com banner.
- **Panfleto/Flyer:** Dois retângulos sobrepostos com offset de 5px, o superior rotacionado 4° — pilha de folhetos.
- **Adesivo:** Forma com cantos suaves + linha tracejada ao redor a 4px da borda (`strokeDasharray`) — contorno de corte de adesivo.
- **Carimbo:** Círculo externo + círculo interno menor + três linhas horizontais entre eles — estrutura de carimbo visto de cima.

Todas as miniaturas: fundo `accent-subtle` (`#60B3E3` 12% opacity), formas em `accent-primary` (`#2E466D`) com `opacity: 0.7`. Dimensão: 44×44px. Posição absoluta `-top-3 -right-3` do card.
**Viabilidade:** CÓDIGO PURO — formas SVG simples (rect, circle, line, path com poucos pontos, strokeDasharray).

##### Seção de Números/Diferenciais
**Representa:** Prova social — "outras pessoas já confiaram e ficaram satisfeitas".
**Metáfora visual:** Barra de régua com o gradiente da logo — precisão de medição, central ao trabalho de uma gráfica.
**Cena detalhada:** Três colunas com `border-r border-border-subtle`. Em cada coluna: número grande em fonte display serifada, logo abaixo uma barra de 3px de altura com gradiente `#2E466D → #60B3E3` e largura variável (100%, 80%, 65% — proporcional ao valor visual de cada métrica), e abaixo o label descritivo em `text-secondary`. A barra de régua é o único elemento com gradiente nessa seção — pontual e significativa. Fundo: `surface-card` com textura de linhas de papel.
**Viabilidade:** CÓDIGO PURO.

##### Card de Horário de Funcionamento
**Representa:** A realidade física do negócio — que existe um lugar, com horário, que pode ser visitado.
**Metáfora visual:** Placa de horário de loja com indicador dinâmico de status calculado em tempo real.
**Cena detalhada:** Card branco com `shadow-card` e `radius-card`. Borda esquerda de 3px sólida em `#2E466D` — marcação editorial que ancora o card. Ícone de relógio Lucide em `text-accent-primary` + título "Horário de Funcionamento". Lista de dias: dia à esquerda em `text-secondary`, horário à direita em `text-primary font-medium`. Domingo: "Fechado" em `text-muted line-through`. Linha do dia atual: dot `#60B3E3 animate-pulse` à esquerda e fundo `accent-subtle` na linha inteira. Badge no topo direito: "Aberto agora" em `bg-[#60B3E3]/15 text-[#2782C4]` ou "Fechado" em cinza — calculado via JS com `new Date()`.
**Viabilidade:** CÓDIGO PURO + JS simples com `new Date()` e comparação de hora.

##### CTA Final
**Representa:** O último empurrão — o usuário leu tudo, está convencido, precisa de um convite claro.
**Metáfora visual:** A seção inteira mergulha no azul marinho da logo. Balões de chat no celeste insinuam a conversa que está prestes a acontecer.
**Cena detalhada:** Fundo `#2E466D` sólido. Canto direito em desktop: três balões SVG de fala em `#60B3E3` com `opacity: 0.15`. Maior: 90×55px, `rx="14"`, ponta triangular base-esquerda. Médio: 65×40px, rotacionado -3°. Menor: 45×28px, rotacionado +5°. Offset vertical de 12px entre eles. `animate-pulse` suave (scale 1.0→1.02 em 3s) no balão maior. Título: branco em fonte serifada. Subtítulo: `#60B3E3` (celeste sobre marinho — contraste bonito e legível, e ainda dentro da paleta da logo). Botão: fundo branco, texto `#2E466D`, `rounded-button`, ícone WhatsApp Lucide.
**Viabilidade:** CÓDIGO PURO — SVG inline para balões, divs para layout.

##### Footer
**Representa:** O encerramento confiável — contato, endereço, redes sociais.
**Metáfora visual:** O gradiente completo da logo como linha de corte no topo — a assinatura final da marca.
**Cena detalhada:** Fundo `#1E2E45` (marinho ainda mais escuro que `#2E466D`). Linha `border-top` de 2px com gradiente `#2E466D → #2782C4 → #60B3E3` — o gradiente completo da logo como moldura da marca. Três colunas: logo versão light + tagline "Qualidade que você vê e toca." | Links âncora | Contato e redes sociais. Ícones de redes: Lucide 18px, branco 50% opacity, `hover:opacity-100 transition-opacity`. Copyright na base em `text-muted` tamanho pequeno.
**Viabilidade:** CÓDIGO PURO.

---

## Tokens de Design

### Cores — Fundos
| Token | Valor | Uso |
|---|---|---|
| `surface-page` | `#FFFFFF` | Fundo principal das seções ímpares |
| `surface-card` | `#F4F7FB` | Seções alternadas — cinza com leve tom frio para harmonizar com os azuis |
| `surface-elevated` | `#FFFFFF` | Cards com sombra (horário) |
| `surface-footer` | `#1E2E45` | Footer — azul marinho mais escuro que o da logo |

### Cores — Texto
| Token | Valor | Uso |
|---|---|---|
| `text-primary` | `#1A2535` | Títulos — quase preto com tom azulado |
| `text-secondary` | `#4A5568` | Subtítulos, parágrafos de apoio |
| `text-muted` | `#94A3B8` | Labels, hints, dias fechados |
| `text-inverse` | `#FFFFFF` | Texto sobre fundo escuro ou marinho |

### Cores — Accent (extraídas da logo — NENHUMA outra cor vibrante)
| Token | Valor | Uso |
|---|---|---|
| `accent-primary` | `#2E466D` | Cor âncora — botões, fundo CTA, borda card horário, ícones ativos |
| `accent-primary-hover` | `#243858` | Hover state do accent-primary |
| `accent-mid` | `#2782C4` | Links, bordas ativas, badge "aberto", crop marks do hero |
| `accent-light` | `#60B3E3` | Badges, hover tints, dot de status, balões CTA, subtítulo CTA, ponta do gradiente |
| `accent-subtle` | `rgba(96,179,227,0.12)` | Fundo de ícones de serviço, hover tint em cards, linha ativa do horário |

### Gradiente da Marca
| Token | Valor | Uso |
|---|---|---|
| `gradient-brand` | `linear-gradient(90deg, #2E466D 0%, #2782C4 50%, #60B3E3 100%)` | Linha footer (top), barra de régua nos números, bordas hero — em nenhum outro lugar |

### Cores — Status
| Token | Valor | Uso |
|---|---|---|
| `status-success` | `#22C55E` | Dot "aberto agora" — cor neutra para não conflitar com o azul |
| `status-error` | `#EF4444` | Erros de formulário (se houver) |

### Bordas
| Token | Valor | Uso |
|---|---|---|
| `border-default` | `1px solid #E2E8F0` | Contornos de cards — tom frio alinhado aos azuis |
| `border-subtle` | `1px solid #EEF2F7` | Separadores internos, colunas de métricas |
| `border-accent-left` | `3px solid #2E466D` | Borda esquerda do card de horário |

### Geometria
| Token | Valor | Uso |
|---|---|---|
| `radius-card` | `10px` | Cards de serviço, card de horário, mapa |
| `radius-button` | `8px` | Todos os botões |
| `radius-input` | `6px` | Inputs (se houver formulário) |
| `radius-icon-bg` | `10px` | Fundo quadrado dos ícones de serviço |

### Sombras
| Token | Valor | Uso |
|---|---|---|
| `shadow-card` | `0 1px 3px rgba(46,70,109,0.08), 0 1px 2px rgba(46,70,109,0.04)` | Cards em repouso — sombra azulada da marca |
| `shadow-hover` | `0 4px 16px rgba(46,70,109,0.14)` | Cards em hover |
| `shadow-float` | `0 8px 32px rgba(46,70,109,0.16)` | Navbar fixa, botão flutuante mobile |
| `shadow-hero-sheet` | `12px 16px 40px rgba(46,70,109,0.12)` | As folhas de papel no hero |

*As sombras usam o RGB do azul marinho `(46,70,109)` — até a profundidade é da marca.*

---

## Componentes Shadcn — Overrides

| Componente | Override (usando tokens) |
|---|---|
| `<Card>` | `bg-surface-elevated border border-default rounded-[radius-card] shadow-card hover:shadow-hover transition-shadow duration-200` |
| `<Button>` primário | `bg-accent-primary text-inverse rounded-[radius-button] hover:bg-accent-primary-hover font-body font-medium` |
| `<Button>` ghost | `border border-default text-text-primary rounded-[radius-button] hover:bg-surface-card` |
| `<Button>` CTA invertido | `bg-white text-accent-primary rounded-[radius-button] hover:bg-accent-subtle font-body font-semibold` |
| `<Badge>` aberto | `bg-accent-subtle text-accent-mid rounded-full text-xs font-medium px-3 py-1` |
| `<Badge>` fechado | `bg-border-subtle text-text-muted rounded-full text-xs font-medium px-3 py-1` |
| `<Separator>` | `bg-border-subtle` |

---

## Estrutura de Seções (Ordem da Página)

1. **Navbar** — Logo + links âncora + botão WhatsApp `#2E466D` fixo no topo
2. **Hero** — Título serifada grande + subtítulo + botão WhatsApp grande + folhas com bordas gradiente da logo e crop marks em `#2782C4`
3. **Serviços** — Grid 3 colunas desktop / 2 tablet / 1 mobile + cards com miniatura SVG de produto + sombras azuladas
4. **Números** — 3 métricas de prova social com barra de régua no gradiente da marca
5. **Horário e Localização** — Card com borda esquerda `#2E466D` + indicador dinâmico + mapa
6. **CTA Final** — Fundo `#2E466D` + botão branco invertido + balões `#60B3E3`
7. **Footer** — Fundo `#1E2E45` + linha gradiente da logo no topo + 3 colunas

---

## Regra de Ouro

Ao criar qualquer tela ou componente:
1. Siga TODAS as decisões de identidade — estrutura, linguagem e riqueza visual
2. Use shadcn/ui como base, customizado via className com tokens semânticos
3. APENAS tokens semânticos — nunca valores crus ou cores padrão do Tailwind
4. As cores são SOMENTE as cores da logo: `#2E466D` (marinho), `#2782C4` (médio), `#60B3E3` (celeste). Zero outras cores vibrantes na interface
5. O gradiente `#2E466D → #60B3E3` aparece em EXATAMENTE 3 lugares: linha do footer, barra de régua nos números, bordas das folhas do hero
6. Sombras usam o RGB do azul marinho — até a profundidade é da marca
7. A fonte serifada nos H1 e H2 é a âncora de personalidade tipográfica — nunca trocar por sans-serif nos títulos de destaque
8. **"Do marinho que ancora ao celeste que ilumina — a confiança da Cristalina, impressa em cada detalhe."**

## Teste Final
Ao lado de um shadcn padrão, a diferença deve ser óbvia em três níveis:
- **ESTRUTURA:** One page com hierarquia clara de CTA, botão WhatsApp omnipresente incluindo flutuante em mobile
- **LINGUAGEM:** Serifada nos títulos, azul marinho `#2E466D` como cor dominante, fundo com tom frio `#F4F7FB`, sombras azuladas que são da marca
- **RIQUEZA:** Folhas com bordas gradiente da logo e crop marks no hero, miniaturas SVG de produto nos cards, barra de régua com gradiente nos números, borda vertical marinho no card de horário, balões celeste no CTA, linha gradiente da logo no footer
