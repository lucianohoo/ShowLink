# ShowLink — passagem para o Claude Code

Documento único desta sessão. Suba junto com a pasta `showlink-site/` na primeira
mensagem do Claude Code. Tudo aqui já foi decidido e conferido contra o cofre —
nada precisa ser refeito ou revalidado.

---

## 1. Onde está o cofre

A pasta **"ShowLink — Cofre (Produto, Marca, Pitch)"** no Google Drive é o mesmo
acervo do Obsidian (os documentos citam o `Cofre-ShowLink-Obsidian.zip` como origem).
O conector do Drive lê tudo. ID da pasta: `1aEIWRFNHrsk_cjY1t2iYPewz2GsaZEBN`

Documentos canônicos, em ordem de importância para construir o site:

| Documento | Para quê |
|---|---|
| ShowLink — Blueprint do Site (página a página) | O mapa. 10 páginas públicas + 7 painéis |
| ShowLink · 1 — Produto e Regras | Campanha, cotas, marketplace, onboarding SOU: |
| ShowLink · 2 — Personas e Mecânicas | Fundador, 3 fontes das 100 bandas, dois motores |
| ShowLink · 0 — PONTO DE PARTIDA (05 jul) | Decisões travadas de marca e vídeo |
| PDF_PORTFOLIO_EXPERIENCIA_SHOWLINK.pdf | Números oficiais, CNPJ, estado técnico |

**Frase para o Claude Code ler tudo:** "Leia o Blueprint do Site, o documento 1 e o
documento 2 na pasta ShowLink — Cofre no meu Drive antes de escrever qualquer coisa."

---

## 2. Vídeos — o trabalho pesado já está feito

O master de 72s **já é** o vídeo pedagógico completo. Não há nada para gravar.
Foi cortado em oito trechos, reencodados em 720p com poster e faststart. Os oito
juntos pesam 5,1 MB — rodam direto de `videos/`, sem CDN.

| Arquivo | Origem | Duração | Onde entra |
|---|---|---|---|
| `01_hero_problema.mp4` | master 0–12s | 12s | Home, hero |
| `02_fa_votacao.mp4` | master 12–24s | 12s | Etapa 01 — o fã sugere |
| `03_fa_campanha_pix.mp4` | master 24–36s | 12s | Etapa 02 — a campanha abre |
| `05_realizador_casas.mp4` | master 40–56s | 16s | Etapa 03 — a casa recebe |
| `06_artista_estado.mp4` | master 56–72s | 16s | Etapa 04 — a banda roda |
| `07_transmissao.mp4` | showlink_transmissao | 15s | Etapa 05 — um show vira muitos |
| `04_fa_palco.mp4` | master 36–40s | 4s | Etapa 06 — o palco é seu |
| `08_comeback.mp4` | showlink_comeback | 12s | Sem uso ainda — "o fã decide quem volta" |

**Ainda sem trecho próprio:** Produtor e Patrocinador. O master não os cobre. Se
precisarem de vídeo, é um trecho a produzir, não cinco.

**Não usar em produção — marca d'água do Meta AI:** `Início.mp4`,
`generated_video_02010329.mp4`, `media__1_.mp4`, `video-1227244187132166.mp4`.
Os dois verticais servem para Reels e Stories, onde watermark passa como conteúdo social.

**Sem uso ainda:** `ShowLink_Cap1_PARTE1.mp4` (39s, 720p) parece versão alternativa
do mesmo capítulo — comparar com o master e definir qual é o canônico.
`media__4_.jpg` (bar com telões) e `media__5_.jpg` (festival) servem de fundo.

---

## 3. Direção visual decidida

Puxada do próprio filme, para que site e vídeo pareçam a mesma peça — foi o que
fez a NEO Vision funcionar.

```
--ink:#070C16    fundo da página        --lime:#C7F73E   acento da marca
--navy:#0D1526   card                   --paper:#EEF3FA  texto
--navy-2:#132038 elevado                --mut:#8296B2    texto secundário
--line:#1F2E4A   borda

Perfis:  fã #FF3D7F · artista #C7F73E · produtor #9B6BFF
         patrocinador #35A7FF · casa/secretaria #FF8A34

Tipos:   Unbounded (display, itálico no logo) · Poppins (corpo)
         JetBrains Mono (dados, etiquetas, medidores)
```

**Assinatura:** o medidor de demanda. Barra fina no topo que enche conforme se
desce a página, marcada `DEMANDA` — a mecânica do produto virada em navegação.
Dentro de cada capítulo o medidor reaparece com o número real daquela etapa.

Vídeos tocam sozinhos ao entrar na tela e pausam ao sair, sem controles. Só o
hero merece botão de play, por ter narração.

---

## 4. Regras do cofre que o site precisa respeitar

Errei essas na primeira versão e corrigi. Não repetir.

**Números oficiais.** 17 anos de Hooligans, 5.000+ shows, 1.000+ artistas,
23 bandas hoje rumo a 100. (Eu tinha inventado outros.)

**São dois motores de viabilização, não um.** Demanda dos fãs *e* apoio de
patrocinador. O show fica viável quando qualquer um dos dois está forte.

**Estados da campanha.** Rascunho → Votação → Pré-venda → Aprovado → Realizado,
com Não atingiu → Estorno automático.

**Rateio casa-a-casa por dia.** 1ª casa a validar fica com sábado a valor cheio;
2ª com sexta a −10 a 20%; 3ª com quinta ou domingo a −15 a 30%. Raio de 300 km.
Split 40/25/25/10 — **nunca** misturar com o internacional 65/25/10 da transmissão.
Quem opera o encaixe é o produtor.

**A entrada é a tela "SOU:".** Não é uma grade de modos. Regra travada: depois
dela ninguém cai numa home genérica, cada perfil entra na ShowLink dele.

**"Realizador" é nome de protótipo.** No cofre o perfil é Casa/Secretaria.

**Fundador.** Quem indica a banda primeiro tem preferência para construir a página.
Mensagem oficial: "Descubra cedo. Vire Fundador."

**Apadrinhamento.** Banda apadrinha até 5. Madrinha recebe 5% de cada nova
contratação da apadrinhada por 1 ano. ShowLink fica com 5%. Uma madrinha só por
banda — casa ou banda, nunca as duas.

**Shoowme** é o guia de todas as personas. Muda o roteiro, nunca a personalidade.

**Nunca música de terceiros.** Trilhas originais via Suno.

---

## 5. O que já está construído

`showlink-site/index.html` — a home, que é a página A1 do blueprint. Serve de
página-modelo para as outras: os tokens, o cabeçalho, o rodapé, o Shoowme e o
medidor já estão resolvidos ali.

Estrutura em seis capítulos, na ordem da história e não na ordem das personas:
o fã sugere → a campanha abre → a casa recebe → a banda roda o estado → um show
vira muitos → o palco é seu. A tela SOU: vem depois, como escolha, não como
cardápio de entrada. Isso resolve o problema de ninguém chegar sabendo qual perfil é.

`index_v1_backup.html` é a versão anterior às correções. Pode apagar.

---

## 6. Decisões que faltam — só suas

**Onde entram Produtor e Patrocinador no onboarding.** O blueprint marca isso como
"A DECIDIR". O site no ar tem seis botões diferentes dos cinco protótipos. A home
paralela usa cinco perfis; precisa bater com o que for decidido.

**Valor do pré-ingresso.** O documento 2 usa R$ 45 como exemplo; a tela de Pix no
filme mostra R$ 80. Não coloquei preço em lugar nenhum do site até definir.

**Qual master é o canônico** — o de 72s ou o Cap1 de 39s.

**Produtor e Patrocinador ganham vídeo próprio?**

---

## 7. O pacote — o que levar e o que deixar

A pasta `showlink-site/` é autossuficiente. Suba ela inteira no Claude Code e
nada mais precisa ser reenviado.

```
showlink-site/
├─ PASSAGEM.md            este documento
├─ index.html             a home (página A1 do blueprint)
├─ videos/                8 cortes 720p + 8 posters — 5,1 MB no total
├─ prototipos/            os 5 modos em HTML, já renomeados
│  ├─ modo-fa.html        rosa  #F1356C  · tour do Shoowme, timeline, selo Fundador
│  ├─ modo-artista.html   limão #D4FF00  · Madrinha, completude, cidades
│  ├─ modo-produtor.html  roxo  #9B00FF  · casting, ficha técnica, radar
│  ├─ modo-patrocinador.html  azul #00B7FF · match por público, modalidades
│  └─ modo-realizador.html    laranja #FF8A00 · Casa Embaixadora + Secretaria
└─ referencias/
   ├─ fundo-bar-teloes.jpg
   └─ fundo-festival.jpg
```

Os protótipos são a fonte dos componentes: cartão de banda, timeline da jornada,
anel de progresso, balão do Shoowme com holofote, alternador de tema. Reaproveitar
de lá em vez de reinventar.

**Não precisa reenviar.** Estes ficaram para trás de propósito:

| Arquivo original | Por quê |
|---|---|
| `ShowLink_COMPLETO_HD.mp4` (72s) | Já cortado nos oito trechos. Guardar como fonte, não subir |
| `showlink_transmissao.mp4` · `showlink_comeback_demanda.mp4` | Já convertidos em `07_` e `08_` |
| `Início.mp4` · `generated_video_02010329.mp4` · `media__1_.mp4` · `video-1227244187132166.mp4` | Marca d'água do Meta AI. Servem para Reels e Stories, não para o site |
| Os cinco `.json` do Obsidian | São só configuração de tema e plugins. O conteúdo está no Drive |
| Os prints do WhatsApp | Já viraram a estrutura da home |
| `ShowLink_Cap1_PARTE1.mp4` (39s) | Pendente de decisão: é ou não o master canônico |

---

## 8. Como abrir no Claude Code

Construir em **HTML, CSS e JavaScript puros**, multi-página. Não Next.js.
O Rubens vai reconstruir na stack dele de qualquer jeito — o valor deste site é
ser referência fiel e legível, não código de produção. HTML puro ele lê em cinco
minutos, abre no celular e não precisa de servidor.

### Prompt de abertura

Copie daqui até o fim do bloco e cole como primeira mensagem, com a pasta
`showlink-site/` anexada.

---

Estou construindo um site paralelo da ShowLink — uma referência navegável que o
Rubens, meu frontend, vai usar como base para refinar e reconstruir na stack dele.
Não é código de produção. Por isso: **HTML, CSS e JavaScript puros, multi-página,
sem framework e sem build.** Precisa abrir com duplo clique e funcionar no celular.

Anexei a pasta `showlink-site/`. Leia o `PASSAGEM.md` primeiro — ele tem os tokens
de cor e tipografia, os oito vídeos já cortados e mapeados, as regras de negócio já
conferidas e a lista do que ainda não foi decidido. O `index.html` é a home pronta
e serve de página-modelo: cabeçalho, rodapé, Shoowme, medidor de demanda e o padrão
de capítulo com vídeo à esquerda e explicação à direita já estão resolvidos ali.

Antes de escrever qualquer linha, leia no meu Google Drive, na pasta
**"ShowLink — Cofre (Produto, Marca, Pitch)"**, estes três documentos:

- ShowLink — Blueprint do Site (página a página)
- ShowLink · 1 — Produto e Regras
- ShowLink · 2 — Personas e Mecânicas

O blueprint é o mapa: dez páginas públicas e sete painéis, cada um marcado como
NO AR, PARCIAL ou ROADMAP. É ele que manda, não a minha memória nem a sua.

Três regras de trabalho:

**Primeira: extraia o CSS compartilhado antes de criar a segunda página.** Os tokens
estão hoje dentro do `index.html`. Mova para `css/base.css` e faça a home importar,
para não haver duas fontes de verdade.

**Segunda: reaproveite os protótipos.** A pasta `prototipos/` tem os cinco modos em
HTML com o tour do Shoowme, cartão de banda, timeline, anel de progresso e alternador
de tema já funcionando. Puxe esses componentes de lá em vez de reescrever.

**Terceira: quando o cofre e eu divergirmos, pare e pergunte.** Já errei números
inventando; prefiro a interrupção. E há quatro decisões em aberto listadas na seção
6 do `PASSAGEM.md` — se alguma delas bloquear, pergunte em vez de escolher sozinho.

Comece pela **página do evento em campanha** (item A3 do blueprint). É a tela que
mostra o "só paga se acontecer" funcionando, e é a que mais pesa no pitch. Depois
dela, nesta ordem: agenda pública, perfil da banda, tela SOU:, painel do fã.

Uma página por vez. Ao terminar cada uma, me mostre e espere antes de seguir.

---

Ordem sugerida das próximas páginas, por peso no pitch:
página do evento em campanha → agenda pública → perfil da banda → tela SOU: →
painel do fã.
