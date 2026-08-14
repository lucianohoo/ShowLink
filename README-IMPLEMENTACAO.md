# ShowLink — Guia de Implementação para Rubens

**Data**: Agosto 2026  
**Repositório**: `/root/showlink-repo`  
**Acesso HTTP**: `http://localhost:8000` (após `./serve.sh`)

---

## 🎯 O Que É ShowLink?

Uma plataforma que conecta **5 personas** diferentes do mundo de shows/eventos, cada uma com seu próprio mundo visual e funcionalidade:

```
FÃ → traz demanda (vota, indica bandas, reserva ingressos)
ARTISTA → abre rotas (vê onde tem fãs pedindo)
PRODUTOR → encaixa datas (monta rotas que fazem sentido economicamente)
PATROCINADOR → sinaliza cotas (investe em bandas que fazem match com marca)
REALIZADOR → valida bandas (casas de show - curadoria local)
```

---

## 🏗️ Arquitetura

### Stack
- **Frontend**: HTML5 + CSS3 + JavaScript vanilla (zero dependências)
- **Design System**: CSS variables para tokens visuais
- **Responsivo**: Mobile-first, grid/flexbox, viewport meta tags

### 5 Aplicações Web (1 arquivo HTML cada)
```
modo-fa.html              → Persona: Fã (rosa #FF3D7F)
modo-artista.html         → Persona: Artista (verde #10B981)
modo-produtor.html        → Persona: Produtor (roxo #8B5CF6)
modo-patrocinador.html    → Persona: Patrocinador (cyan #35A7FF)
modo-realizador.html      → Persona: Realizador (laranja #FF8A34)
```

### Nova Feature: Hall de Shows
```
hall-shows.html           → Agenda por região (com carousel personalizado)
```

### Home
```
index.html                → Landing com explicação das 5 personas
```

---

## 🎨 Design System

**`css/base.css`** - Fonte única de verdade
```css
:root {
  /* Cores de fundo */
  --ink: #070C16;
  --navy: #0D1526;
  --navy-2: #132038;
  --line: #1F2E4A;

  /* Marca */
  --lime: #8B5CF6;  /* roxo oficial */
  --paper: #EEF3FA; /* texto */
  --mut: #8296B2;   /* texto secundário */

  /* Personas */
  --fa: #FF3D7F;
  --artista: #10B981;
  --produtor: #8B5CF6;
  --patro: #35A7FF;
  --realizador: #FF8A34;

  /* Tipografia */
  --display: 'Unbounded', sans-serif;    /* títulos */
  --body: 'Poppins', sans-serif;         /* corpo */
  --data: 'JetBrains Mono', monospace;   /* números/dados */
}
```

**`css/home.css`** - Componentes compartilhados
- Hero com vídeo
- Chapters (etapas com vídeo + texto)
- Gauge (barras de progresso)
- Motors (2 métricas lado a lado)
- Mode selector (grid de personas)

---

## 📊 Estrutura de Dados

### Casas (Realizadores)
```json
{
  "id": "hooligans-cascavel",
  "nome": "Hooligans Cascavel",
  "cidade": "Cascavel",
  "estado": "PR",
  "cor": "#FF8A34"
}
```

### Bandas
```json
{
  "id": "rock4roots",
  "nome": "Rock4Roots",
  "genero": "Rock",
  "validada_por": "hooligans-cascavel",
  "cache_max": 5000,
  "avaliacao": 5.0,
  "shows": 5
}
```

### Shows/Eventos
```json
{
  "id": "show-001",
  "banda_id": "rock4roots",
  "casa_id": "hooligans-cascavel",
  "data": "2026-08-15",
  "hora": "22:00",
  "cidade": "Cascavel",
  "estado": "PR",
  "cache": 2400
}
```

---

## 🎬 Vídeos por Persona

Cada persona tem 3 etapas com vídeos:

### Fã
1. **ETAPA 01** - Você sugere (02_fa_votacao.mp4)
2. **ETAPA 02** - Campanha abre (03_fa_campanha_pix.mp4)
3. **ETAPA 03** - Show acontece (04_fa_palco.mp4)

### Artista
1. **ETAPA 01** - Seus fãs pedem (02_fa_votacao.mp4)
2. **ETAPA 02** - Demanda visível (06_artista_estado.mp4)
3. **ETAPA 03** - Turnê realizada (04_fa_palco.mp4)

### Produtor
1. **ETAPA 01** - Ficha técnica (02_fa_votacao.mp4)
2. **ETAPA 02** - Encaixe de datas (06_artista_estado.mp4)
3. **ETAPA 03** - Interessados aparecem (03_fa_campanha_pix.mp4)

### Patrocinador
1. **ETAPA 01** - Descobre artista (06_artista_estado.mp4)
2. **ETAPA 02** - Match % (03_fa_campanha_pix.mp4)
3. **ETAPA 03** - Show acontece (04_fa_palco.mp4)

### Realizador
1. **ETAPA 01** - Valida (05_realizador_casas.mp4)
2. **ETAPA 02** - Demanda monta fila (02_fa_votacao.mp4)
3. **ETAPA 03** - Transmissão + repasse (07_transmissao.mp4)

---

## 🔗 Catálogo Hierárquico por Região

Quando alguém abre "Baladas" de uma cidade:

```
1️⃣ SHOWS CONFIRMADOS
   ├─ Rock4Roots · Hooligans Cascavel · 15 ago 22h
   ├─ Plutão Já Foi Planeta · Hooligans Cascavel · 22 ago 21h
   └─ ... (até 10 shows)

2️⃣ BANDAS LOCAIS (validadas pela casa, até R$ 5k)
   ├─ Rock4Roots
   ├─ Plutão Já Foi Planeta
   ├─ Electricmob
   └─ Acústicos & Valvulados

3️⃣ BANDAS NACIONAIS (outras regiões, cachês maiores)
   ├─ VICKA (MPB Bar - Maringá)
   ├─ The Mônic (Crossroad - Curitiba)
   ├─ Metallica Cover (Tork - Curitiba)
   └─ ... mais
```

**Hall de Shows** (`hall-shows.html`):
- **Abas 01**: Carousel de shows das bandas que segue (personalizadas)
- **Abas 02**: Grid de todos shows agendados (até 10)
- **Abas 03**: Mapa com geolocalização (raio 300km)

---

## 🚀 Como Implementar (Passo a Passo para Rubens)

### 1. **Preparar o banco de dados**

Criar tabelas:
```sql
CREATE TABLE casas (
  id UUID PRIMARY KEY,
  nome VARCHAR NOT NULL,
  cidade VARCHAR NOT NULL,
  estado CHAR(2),
  cor VARCHAR,
  criado_em TIMESTAMP
);

CREATE TABLE bandas (
  id UUID PRIMARY KEY,
  nome VARCHAR NOT NULL,
  genero VARCHAR,
  validada_por UUID REFERENCES casas(id),
  cache_max DECIMAL,
  avaliacao FLOAT,
  criado_em TIMESTAMP
);

CREATE TABLE shows (
  id UUID PRIMARY KEY,
  banda_id UUID REFERENCES bandas(id),
  casa_id UUID REFERENCES casas(id),
  data_hora TIMESTAMP,
  cidade VARCHAR,
  estado CHAR(2),
  cache DECIMAL,
  criado_em TIMESTAMP
);

CREATE TABLE usuarios_bandas_seguidas (
  usuario_id UUID,
  banda_id UUID,
  seguido_desde TIMESTAMP,
  PRIMARY KEY (usuario_id, banda_id)
);
```

### 2. **Criar API REST**

Endpoints necessários:
```
GET /api/casas
GET /api/casas/:id/bandas
GET /api/bandas
GET /api/bandas/:id
GET /api/bandas/:id/shows
GET /api/shows?cidade=:cidade&raio=300
GET /api/usuarios/:id/bandas-seguidas
POST /api/usuarios/:id/bandas-seguidas
```

### 3. **Adaptar Frontend**

Copiar estrutura HTML de `modo-fa.html` etc., mas:
- **Trocar dados estáticos** por `fetch()` chamando a API
- **Adicionar autenticação** (JWT token)
- **Integrar geolocalização** se quiser raio dinâmico
- **Conectar ao Mapbox/Google Maps** para o mapa de shows

Exemplo:
```javascript
// Antes (estático):
<div class="bandcard">
  <div class="bandname">Rock4Roots</div>
  ...
</div>

// Depois (dinâmico):
fetch('/api/bandas?validada_por=hooligans-cascavel')
  .then(r => r.json())
  .then(bandas => {
    bandas.forEach(banda => {
      const card = document.createElement('div');
      card.className = 'bandcard';
      card.innerHTML = `
        <div class="bandname">${banda.nome}</div>
        <div class="bandmeta">${banda.genero} · Validada por ${banda.validada_por.nome}</div>
        ...
      `;
      container.appendChild(card);
    });
  });
```

### 4. **Adicionar interatividade**

- Botões "Reservar ingresso" → POST `/api/reservas`
- Botões "Seguir banda" → POST `/api/usuarios/:id/bandas-seguidas`
- Botões "Sinalizar cota" → POST `/api/sinalizacoes`
- Filtros por gênero/faixa etária → GET `/api/bandas?genero=rock&faixa_etaria=18-29`

### 5. **Deploy**

- Frontend: Vercel, Netlify, ou seu servidor
- Backend: Node.js + Express, Python + Django, ou similar
- Banco de dados: PostgreSQL, MySQL, etc.

---

## 🎯 Fluxo de Dados (Exemplo: Fã em Cascavel)

```
1. Fã entra em modo-fa.html
2. Fetch GET /api/usuarios/:id/bandas-seguidas
   → Retorna: [Rock4Roots, Plutão, VICKA, ...]
3. Fetch GET /api/shows?banda_ids=[...] 
   → Retorna: shows das bandas que segue
4. Renderiza carousel com shows personalizados
5. Fã clica "Reservar ingresso"
6. POST /api/reservas { usuario_id, show_id, quantidade }
7. Backend registra reserva, envia confirmação
```

---

## 📋 Checklist de Implementação

- [ ] Criar tabelas no banco
- [ ] Implementar API REST
- [ ] Copiar estrutura HTML das 5 personas
- [ ] Conectar dados estáticos → dinâmicos (fetch)
- [ ] Adicionar autenticação/login
- [ ] Implementar reservas de ingressos
- [ ] Implementar "Seguir banda"
- [ ] Implementar "Sinalizar cota" (patrocinador)
- [ ] Implementar filtros
- [ ] Integrar Mapbox/Google Maps (opcional)
- [ ] Mobile responsivo - testar
- [ ] Performance - lazy load de imagens/vídeos
- [ ] Tests (unit + e2e)
- [ ] Deploy

---

## 🎨 Customização por Cliente

Se você quiser adaptar pra seu próprio cliente:

1. **Mudar cores**: Editar `:root` em `css/base.css`
2. **Mudar logo**: Trocar `.logo` text por `<img>`
3. **Mudar nomes de personas**: Trocar "Fã" → "Fã da música", etc.
4. **Mudar vídeos**: Trocar URLs em `<video src="...">`
5. **Mudar fontes**: Trocar imports de Google Fonts

---

## 📞 Suporte

**Documentação técnica:**
- `INSTRUÇÕES.md` → Como rodar localmente
- `ESTRUTURA-CATALOG.md` → Conceito do catálogo
- `css/base.css` → Documentação de tokens

**Repositório local:**
```
/root/showlink-repo
```

**Servidor de teste:**
```bash
cd /root/showlink-repo
./serve.sh
# Abra http://localhost:8000
```

---

## 🚢 Próximas Features

- [ ] Sistema de transmissão de shows (live streaming)
- [ ] Rateio automático de cachês
- [ ] Royalties de bandas amadrinhadoras
- [ ] Notificações push (banda agendou show perto de você)
- [ ] Sistema de review/rating
- [ ] Exportação de relatórios (casas/produtores)
- [ ] Integração com Spotify/YouTube (pull de dados de artista)

---

**Pronto para começar? Boa sorte, Rubens! 🚀**
