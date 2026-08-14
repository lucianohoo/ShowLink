# 🎸 ShowLink — Design de Referência

**Status**: ✅ Pronto para apresentação e handoff  
**Data**: Agosto 2026  
**Servidor Local**: `http://localhost:8000`  

---

## O que é isso?

ShowLink Design Reference é um **protótipo visual funcional** que demonstra como a plataforma ShowLink funciona através de **5 personas interativas**, cada uma com sua própria experiência guiada.

Não é a aplicação completa em produção (essa está em React 18 + Kotlin). É o que você mostra para:
- Investidores
- Parceiros potenciais  
- Clientes (Hooligans, outras casas)
- A equipe de desenvolvimento (Rubens, Jeferson, etc.)

---

## 🎯 Como Acessar

### Local
```bash
cd /root/showlink-repo
./serve.sh
# Abre HTTP server em http://localhost:8000
```

**URLs diretas:**
- **Home (Landing)**: `http://localhost:8000/index.html`
- **App Hub**: `http://localhost:8000/app.html` (persona selector)
- **Fã**: `http://localhost:8000/modo-fa.html`
- **Artista**: `http://localhost:8000/modo-artista.html`
- **Produtor**: `http://localhost:8000/modo-produtor.html`
- **Patrocinador**: `http://localhost:8000/modo-patrocinador.html`
- **Realizador**: `http://localhost:8000/modo-realizador.html`
- **Como Funciona**: `http://localhost:8000/como-funciona.html`
- **Hall de Shows**: `http://localhost:8000/hall-shows.html`

---

## 📁 Estrutura de Arquivos

```
/root/showlink-repo/
├── index.html                    # Landing page (6 etapas do pitch)
├── app.html                      # Hub com persona selector + welcome
├── modo-fa.html                  # Experiência: Fã
├── modo-artista.html             # Experiência: Artista/Banda
├── modo-produtor.html            # Experiência: Produtor
├── modo-patrocinador.html        # Experiência: Patrocinador
├── modo-realizador.html          # Experiência: Realizador (Casa de Show)
├── como-funciona.html            # Onboarding / Como usar
├── hall-shows.html               # Catálogo de eventos (discovery)
│
├── css/
│   ├── base.css                  # Tokens de design (cores, fonts, variables)
│   └── home.css                  # Componentes compartilhados
│
├── videos/                       # 29 arquivos de vídeo
│   ├── 00_geral_trilogia.mp4     # Hero da home
│   ├── 01_hero_problema.mp4      # Problem statement
│   ├── 02_fa_votacao.mp4         # Voting flow
│   ├── 03_fa_campanha_pix.mp4    # Campaign/payment
│   ├── 04_fa_palco.mp4           # Show happens
│   ├── 05_realizador_casas.mp4   # Venue perspective
│   ├── 06_artista_estado.mp4     # Artist/regional demand
│   ├── 07_transmissao.mp4        # Transmission/broadcast
│   └── [21 vídeos adicionais]    # Conteúdo premium
│
├── serve.sh                      # HTTP server (Mac/Linux)
├── serve.bat                     # HTTP server (Windows)
├── README.md                     # Este arquivo
├── VIDEOS.md                     # Mapeamento de vídeos
├── README-IMPLEMENTACAO.md       # Guia para Rubens
└── _archive/                     # Versões antigas (backup)
```

---

## 🎭 As 5 Personas

### 1. **Fã** (Pink #FF3D7F)
**O que faz**: Indica bandas, vota, reserva ingressos, acumula pontos de curador

**Fluxo**:
1. Segue bandas
2. Vota em quem quer trazer pra sua cidade
3. Quando a banda chega, compra antecipado (só paga se o show acontecer)
4. Vira "Fundador" se indicou primeiro
5. Acumula pontos = prioridade, camarote, camiseta, foto com banda

**Vídeos**: 02 (votação) → 03 (campanha/pix) → 04 (palco)

---

### 2. **Artista** (Green #10B981)
**O que faz**: Vê onde os fãs o pedem, monta turnê, recebe cotas de patrocínio

**Fluxo**:
1. Publica sua página
2. Vê o mapa de demanda (quais cidades o querem)
3. Quando atinge demanda, forma a turnê
4. Recebe pré-vendas e cotas sinalizadas

**Vídeos**: 02 (votação) → 06 (estado/demanda) → 04 (palco)

---

### 3. **Produtor** (Purple #8B5CF6)
**O que faz**: Monta rotas, negocia cachês, encaixa bandas em datas próximas

**Fluxo**:
1. Vê bandas disponíveis com ficha técnica completa
2. Encaixa datas (raio 300 km reduz custos)
3. Divide o cachê com outras casas (roteio)
4. Vende a turnê antes de fechar contrato

**Vídeos**: 02 (votação) → 06 (estado/encaixe) → 03 (campanha/cotas)

---

### 4. **Patrocinador** (Cyan #35A7FF)
**O que faz**: Descobre artistas que casam com sua marca, sinaliza cotas

**Fluxo**:
1. Filtra por público-alvo (idade, gênero, região)
2. Vê match % automático (algo como "87% match com sua marca")
3. Sinaliza interesse/cota
4. Se a campanha acontecer, sua marca está no evento

**Vídeos**: 06 (estado/demanda) → 03 (campanha) → 04 (palco)

---

### 5. **Realizador** (Orange #FF8A34) — Casa de Show
**O que faz**: Valida bandas locais, programa a agenda, vê fila de interessados

**Fluxo**:
1. Valida bandas da sua região (Hooligans valida Rock4Roots)
2. Agenda shows vendo a demanda em tempo real
3. Recebe % do cachê de bandas que validou (validação = monetização)
4. Vê quem quer vir (fãs + outras casas da região)

**Vídeos**: 05 (casas) → 02 (votação) → 07 (transmissão)

---

## 🎬 Vídeos e Estrutura

### 7 Vídeos Essenciais (já integrados)

| Arquivo | Duração | Uso |
|---------|---------|-----|
| `00_geral_trilogia.mp4` | 7.6M | Home hero |
| `01_hero_problema.mp4` | 1.6M | Problem setup |
| `02_fa_votacao.mp4` | 961K | Voting/demand phase |
| `03_fa_campanha_pix.mp4` | 773K | Campaign/payment phase |
| `04_fa_palco.mp4` | 901K | Show happens phase |
| `05_realizador_casas.mp4` | 1.4M | Venue perspective |
| `06_artista_estado.mp4` | 662K | Artist/regional demand |
| `07_transmissao.mp4` | 998K | Transmission/broadcast |

### 22 Vídeos Novos (assets premium)

Veja [`VIDEOS.md`](./VIDEOS.md) para mapeamento completo.

**Categorias:**
- **Premium/Complete**: ShowLink_COMPLETO_HD (19M), preview montage (16M), trilogy with music (7.6M)
- **Hero/Openings**: Intro "Início" (4.4M), bar 360 zoom (3.1M), audience zoom (4.0M)
- **Narrative**: Video 2 with subtitles (1.1M), generated videos (1-6MB), demand comeback (345K)
- **B-roll**: Supporting footage (1-4MB cada)

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** + **CSS3** + **JavaScript vanilla** (zero dependências)
- **CSS Variables** para theming dinâmico por persona
- **Responsive**: Mobile-first, grid/flexbox
- **Fonts**: 
  - `Unbounded` (bold display)
  - `Poppins` (body text)
  - `JetBrains Mono` (data/hub)

### Server
- **Python `http.server`** (HTTP simples em port 8000)
- Scripts: `serve.sh` (Mac/Linux) ou `serve.bat` (Windows)

### Design System
- **Single source of truth**: `css/base.css`
- **Color tokens**: Cores de fundo, personas, acentos
- **Componentes reutilizáveis**: Hero, chapters, gauges, motors, mode selector

---

## 🎨 Design System — CSS Variables

```css
:root {
  /* Backgrounds */
  --ink: #070C16;          /* darkest */
  --navy: #0D1526;         /* dark bg */
  --navy-2: #132038;       /* lighter layer */
  --line: #1F2E4A;         /* borders */
  
  /* Brand */
  --lime: #8B5CF6;         /* purple official */
  --paper: #EEF3FA;        /* text */
  --mut: #8296B2;          /* secondary text */
  
  /* Personas */
  --fa: #FF3D7F;           /* Fan - Pink */
  --artista: #10B981;      /* Artist - Green */
  --produtor: #8B5CF6;     /* Producer - Purple */
  --patro: #35A7FF;        /* Sponsor - Cyan */
  --realizador: #FF8A34;   /* Venue - Orange */
  
  /* Fonts */
  --display: 'Unbounded';          /* titles */
  --body: 'Poppins';               /* body */
  --data: 'JetBrains Mono';        /* numbers/data */
}
```

---

## 📊 Componentes Principais

### Home (`index.html`)
- **Hero** com vídeo + play button
- **6 Chapters** com alternating video/text layout
- **Numeric strip** com 4 KPIs
- **Mode selector grid** linkando para 5 personas
- **Demand meter** (progress bar na top)

### Personas (`modo-*.html`)
- **Header sticky** com logo, persona badge, theme switcher, notifications
- **Shoowme raccoon** (mascote interativo com guided tour)
- **Seções customizadas** por persona (diferentes dados)
- **Timeline/journey** visualization
- **Founder status** e perks system
- **Points/curator** score display

### Hall de Shows (`hall-shows.html`)
- **3 abas** (personalized carousel, all events grid, geolocation map)
- **Event cards** com poster, band, date/time, venue, distance
- **Genre filters**
- **Regional organization**

---

## 🚀 Como Usar Localmente

### Início rápido
```bash
cd /root/showlink-repo
./serve.sh
# Siga as URLs impressas
```

### Testar cada persona
```
1. Abra http://localhost:8000/app.html
2. Clique no botão SOU [Persona]
3. Será levado para modo-[persona].html
4. Clique no 🦝 no canto pra iniciar o tour guiado
```

### Editar HTML localmente
```bash
# Editores compatíveis
nano index.html
code modo-fa.html
vim css/base.css
# Salve e refresh no browser
```

---

## 📋 Próximos Passos / Handoff para Rubens

### Se Rubens for refazer isto em React/Supabase:

1. **Copiar estrutura**: 5 rotas (personas) + home + hall
2. **Copiar design tokens**: CSS variables → Tailwind config
3. **Integrar vídeos**: URLs nos componentes
4. **Conectar a backend**: Supabase API onde houver dados estáticos
5. **Adicionar Shoowme**: Biblioteca de guided tours (cmdk? Shepherd.js?)
6. **Testar responsivo**: Deve funcionar desktop + tablet + mobile

Veja [`README-IMPLEMENTACAO.md`](./README-IMPLEMENTACAO.md) para spec técnica.

---

## 🎓 Entender a Narrativa

**A jornada de um show:**

```
FÃ vota
   ↓ (demanda agregada)
PRODUTOR vê oportunidade
   ↓ (forma rota com raio de 300km)
CASA REALIZA a agenda
   ↓ (entra com palco + público)
PATROCINADOR sinaliza cota
   ↓ (financiamento + visibilidade de marca)
ARTISTA confirma turnê
   ↓ (risco zerado, múltiplas cidades)
SHOW ACONTECE
```

Cada persona enxerga isto de um ângulo. A ShowLink **conecta os pontos**.

---

## 📱 Responsividade

- ✅ **Mobile** (320px+): Completo
- ✅ **Tablet** (768px+): Otimizado
- ✅ **Desktop** (1024px+): Full experience
- ✅ **Video playback**: Loop automático, mute por padrão
- ✅ **Touch events**: Todos os botões são touch-friendly

---

## 🐛 Troubleshooting

### "Videos não carregam"
- Verifique se está rodando via `http://` (não `file://`)
- `./serve.sh` inicia o servidor
- Se porta 8000 está ocupada, edite `serve.sh` e mude

### "Tema não está aplicando"
- Limpe cache (Ctrl+Shift+Delete ou Cmd+Shift+Delete)
- Verifique `css/base.css` — é a fonte de verdade

### "Shoowme tour não inicia"
- Confira se JavaScript está habilitado
- Abra DevTools (F12), console deve estar limpo
- Clique no 🦝 ou role até seção marcada com `id="s-bandas"` etc.

---

## 📄 Documentos Relacionados

- [`VIDEOS.md`](./VIDEOS.md) — Mapeamento de todos os vídeos
- [`README-IMPLEMENTACAO.md`](./README-IMPLEMENTACAO.md) — Guia técnico completo para Rubens
- [`ESTRUTURA-CATALOG.md`](./ESTRUTURA-CATALOG.md) — Como funciona o catálogo hierárquico
- [`INSTRUÇÕES.md`](./INSTRUÇÕES.md) — Checklist de teste

---

## 🎯 Performance

- **Tamanho**: ~5KB (HTML) + ~10KB (CSS) por página
- **Vídeos**: Carregam sob demanda (lazy)
- **Animações**: CSS + JS simples (60 FPS)
- **Lighthouse**: Deve atingir 90+ em Performance

---

## 👋 Suporte

**Quem fez**: Claude (Anthropic), com direção de Luciano  
**Quando**: Agosto 2026  
**Pra quem**: Investidores, parceiros, equipe dev (Rubens, Jeferson)  

**Próximas versões**:
- [ ] React implementation (Rubens, Jeferson)
- [ ] Backend integrado (Supabase)
- [ ] Mobile app (Kotlin Multiplatform)
- [ ] CI/CD pipeline
- [ ] Monitoramento de performance

---

**Ready to scale. 🚀**
