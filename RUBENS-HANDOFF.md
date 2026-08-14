# 🔨 ShowLink — Handoff para Rubens (Terminar o Sistema)

**De**: Luciano  
**Para**: Rubens (desenvolvimento final React + Kotlin)  
**Data**: Agosto 2026  
**Status**: Referência pronta, implementação aguarda você

---

## 📍 ACESSO IMEDIATO

Tudo está em: `/root/showlink-repo`

```bash
git clone /root/showlink-repo showlink-ref
cd showlink-ref
./serve.sh
# Abre http://localhost:8000
```

Clique em qualquer persona (Demo Fã, Demo Artista, etc.) → veja os dois motores funcionando.

---

## 📋 LEIA NESTA ORDEM

### 1️⃣ **LEIA-PRIMEIRO.txt** (5 min)
Visão geral do que está pronto e o que você precisa fazer.

### 2️⃣ **MOTORES.md** (15 min)
Entenda Motor 1 (Rateio) e Motor 2 (Validação). Leia antes de começar.

### 3️⃣ **IMPLEMENTACAO-MOTORES.md** (30 min)
Arquitetura, dados, fluxo UX, checklist de implementação.

### 4️⃣ **README-IMPLEMENTACAO.md** (referência)
Spec técnica detalhada (database, API endpoints, customizações).

---

## 🎯 O QUE VOCÊ VAI RECEBER

```
/root/showlink-repo/
├─ Documentação (4 arquivos)
├─ Código HTML/CSS (pronto para copiar)
├─ Design tokens (base.css)
├─ Sistema de auth (estrutura)
├─ 2 motores visíveis (hall-shows.html)
├─ 5 personas implementadas
├─ 29 vídeos de assets
└─ Dados de teste seeded
```

**Você NÃO vai receber:**
- Backend (API endpoints)
- Pagamento (Stripe integration)
- Real-time listeners
- Geolocalização completa

---

## 🏗️ ARQUIVOS-CHAVE PARA COPIAR

### Design Tokens (Copiar para Tailwind)
```
/css/base.css

Cores:
--fa: #FF3D7F           (Fã - Pink)
--artista: #10B981      (Artista - Green)
--produtor: #8B5CF6     (Produtor - Purple)
--patro: #35A7FF        (Patrocinador - Cyan)
--realizador: #FF8A34   (Realizador - Orange)

Fonts:
--display: 'Unbounded'  (títulos)
--body: 'Poppins'       (corpo)
--data: 'JetBrains Mono' (números)

Backgrounds:
--ink: #070C16
--navy: #0D1526
--navy-2: #132038
--line: #1F2E4A
```

### Estrutura de Autenticação
```
/auth.html

├─ Login form
├─ Registration form
├─ 6 demo buttons (para testes rápidos)
└─ localStorage para sessão (trocar por JWT depois)

Copiar: Layout, fluxo, validações
Modificar: localStorage → JWT, adicionar backend call
```

### Motor 1 + Motor 2 (PRINCIPAL)
```
/hall-shows.html

├─ TAB 1: Motor 1 (Rateio)
│  └─ Bandas em trânsito com datas livres
│     └─ Cálculo de divisão de custo
│
├─ TAB 2: Motor 2 (Validação)
│  └─ Campanhas com progress bars
│     └─ Atualização em tempo real
│
└─ TAB 3: Shows Confirmados
   └─ Resultado dos motores com badges

Copiar: Estrutura de cards, progress bars, aba switcher
Modificar: conectar a dados reais via API
```

### Proteção de Rotas
```
/js/auth-check.js

Padrão de como verificar autenticação:
├─ localStorage.getItem('showlink_authenticated')
├─ Se false → redireciona para auth.html
└─ Se true → injeta window.showlink.user

Modificar: localStorage → JWT in cookies
```

### Personas (5 arquivos)
```
/modo-fa.html
/modo-artista.html
/modo-produtor.html
/modo-patrocinador.html
/modo-realizador.html

Estrutura:
├─ Header com logo + persona badge + logout
├─ Seções específicas por persona
├─ Dados em cards/grids
└─ Botões de ação (sem funcionalidade agora)

Copiar: Layout, estrutura, identidade visual
Modificar: Botões → funcionalidade real, dados → API
```

---

## 🔄 MIGRAÇÃO DE CÓDIGO (Passo-a-passo)

### Fase 1: Setup (Semana 1)
```bash
# 1. Crie nova branch
git checkout -b feat/two-motors-production

# 2. Copie base colors para Tailwind config
# De: /css/base.css
# Para: tailwind.config.js
colors: {
  'fa': '#FF3D7F',
  'artista': '#10B981',
  ...
}

# 3. Crie pastas de componentes
components/
├─ Motors/
│  ├─ Motor1Card.tsx
│  ├─ Motor2Card.tsx
│  ├─ MotorTabs.tsx
│  └─ ShowConfirmed.tsx
├─ Auth/
│  ├─ LoginPage.tsx
│  └─ RegisterPage.tsx
└─ Personas/
   ├─ PersonaHeader.tsx
   └─ PersonaPageLayout.tsx
```

### Fase 2: Componentes React (Semana 2)
```bash
# 1. Crie Motor1Card.tsx
# Copie de: /hall-shows.html (TAB 1 cards)
# Estrutura:
<div className="show-card">
  <div className="show-poster">{emoji}</div>
  <div className="show-info">
    <h3>{bandName}</h3>
    <p>{status}</p>
    <div className="dates">{...dates}</div>
    <p className="cost">R$ {costPerVenue}</p>
    <button>Propor divisão</button>
  </div>
</div>

# 2. Crie Motor2Card.tsx
# Copie de: /hall-shows.html (TAB 2 campaigns)
# Adicione:
<ProgressBar value={currentTickets} max={400} />
{currentTickets >= 400 && <Badge color="green">✅ VALIDADO</Badge>}

# 3. Crie MotorTabs.tsx
# Estrutura simples com useState para tab ativo
const [activeTab, setActiveTab] = useState('motor1');

return (
  <>
    <div className="tabs">
      <button onClick={() => setActiveTab('motor1')}>Motor 1</button>
      <button onClick={() => setActiveTab('motor2')}>Motor 2</button>
      <button onClick={() => setActiveTab('confirmed')}>Shows</button>
    </div>
    {activeTab === 'motor1' && <Motor1Tab />}
    {activeTab === 'motor2' && <Motor2Tab />}
    ...
  </>
);
```

### Fase 3: Backend Connection (Semana 3)
```bash
# 1. Substitua dados hardcoded por API
// ANTES
const campaigns = [{ band: "Plutão", cities: {...} }];

// DEPOIS
const { data: campaigns } = useQuery({
  queryKey: ['campaigns'],
  queryFn: () => fetch('/api/campaigns').then(r => r.json())
});

# 2. Implemente endpoints necessários
POST   /api/auth/register       → criar usuário
POST   /api/auth/login          → retorna JWT
GET    /api/campaigns           → listar campanhas
POST   /api/campaigns/{id}/pre-order → pré-comprar
GET    /api/hall-shows/{city}   → shows por cidade
POST   /api/validate-campaign   → checar se atingiu 400
```

### Fase 4: Real-time (Semana 4)
```bash
# 1. Implemente Supabase listeners (exemplo)
useEffect(() => {
  const subscription = supabase
    .from('campaign_cities')
    .on('UPDATE', payload => {
      setCampaigns(prev => 
        prev.map(c => 
          c.id === payload.new.campaign_id 
            ? { ...c, cities: [...c.cities, payload.new] }
            : c
        )
      );
    })
    .subscribe();
  
  return () => subscription.unsubscribe();
}, []);

# 2. Progress bar atualiza em tempo real
# Sem refresh, usuário vê 389/400 → 390/400 → ... → 400/400 ✅
```

### Fase 5: Autenticação Real (Semana 5)
```bash
# ANTES (demo)
localStorage.setItem('showlink_authenticated', 'true');

# DEPOIS (produção)
const signUp = async (email, password, persona) => {
  const { data, error } = await supabase.auth.signUp({
    email, password,
    options: { data: { persona } }
  });
  
  // Armazena em cookie (httpOnly)
  setCookie('showlink_jwt', data.session.access_token);
  return data;
};

# Todas as requisições agora têm:
Authorization: Bearer ${jwt_token}
```

---

## 📊 DATABASE SCHEMA (Para seu backend)

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE,
  name TEXT,
  persona VARCHAR(20), -- 'fan', 'artist', 'producer', etc
  created_at TIMESTAMP
);

-- Campaigns (Motor 2)
CREATE TABLE campaigns (
  id UUID PRIMARY KEY,
  band_id UUID,
  band_name TEXT,
  status VARCHAR(20), -- 'active', 'validated', 'cancelled'
  created_at TIMESTAMP
);

-- Campaign Cities (Motor 2 progress)
CREATE TABLE campaign_cities (
  id UUID PRIMARY KEY,
  campaign_id UUID,
  city_name TEXT,
  goal_tickets INT DEFAULT 400,
  current_tickets INT DEFAULT 0,
  day_allocated VARCHAR(20), -- 'saturday', 'friday'
  validated_at TIMESTAMP
);

-- Transit Bands (Motor 1)
CREATE TABLE transit_bands (
  id UUID PRIMARY KEY,
  band_name TEXT,
  confirmed_city TEXT,
  confirmed_date DATE,
  cost INT,
  available_cities TEXT[]
);

-- Shows (Resultado)
CREATE TABLE shows (
  id UUID PRIMARY KEY,
  band_id UUID,
  city_name TEXT,
  date DATE,
  motor_type VARCHAR(20), -- 'motor1' or 'motor2'
  validated_at TIMESTAMP
);
```

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### Semana 1: Setup
- [ ] Copiar design tokens para Tailwind
- [ ] Criar estrutura de pastas
- [ ] Configurar autenticação (JWT setup)
- [ ] Git branch criada

### Semana 2: Componentes
- [ ] Motor1Card.tsx
- [ ] Motor2Card.tsx
- [ ] ProgressBar component
- [ ] MotorTabs.tsx
- [ ] ShowConfirmed.tsx
- [ ] LoginPage.tsx

### Semana 3: Backend
- [ ] API endpoints implementados
- [ ] Database migrations rodadas
- [ ] Conexões funcionando
- [ ] Testes de API

### Semana 4: Real-time
- [ ] Supabase listeners configurados
- [ ] Progress bars atualizam em tempo real
- [ ] Auto-validação ao atingir 400
- [ ] Testes de real-time

### Semana 5: Integração
- [ ] Auth JWT funciona
- [ ] Todas as personas logam
- [ ] Dados vêm da API, não hardcoded
- [ ] Botões fazem ações reais

### Semana 6-8: Testes + Deploy
- [ ] Testes end-to-end
- [ ] Mobile responsivo
- [ ] Performance (Lighthouse 90+)
- [ ] Staging deploy
- [ ] Pilot (Hooligans)
- [ ] Production deploy

---

## 🎯 PERSONAS - O QUE CADA UMA VÊ

### Fã (Pink #FF3D7F)
```
Vê:
├─ Campanhas que pode pré-comprar
├─ Bandas que segue
├─ Progresso de validação (XX/400)
└─ Botão: "Pré-comprar" (suspende cobrança)

Ação: Pré-compra + vote = validação
```

### Artista (Green #10B981)
```
Vê:
├─ Demanda em cidades (map com números)
├─ Campanhas de tour
├─ Ranking de interesse
└─ Botão: "Iniciar campanha"

Ação: Lança campanha de tour
```

### Produtor (Purple #8B5CF6)
```
Vê:
├─ Bandas em trânsito
├─ Oportunidades de rateio
├─ Calcular rotas (raio 300km)
└─ Botão: "Propor divisão" ou "Encaixar rota"

Ação: Forma roteios, encaixa datas
```

### Patrocinador (Cyan #35A7FF)
```
Vê:
├─ Artistas com match % de marca
├─ Campanhas em progresso
├─ Audiência (idade, região)
└─ Botão: "Sinalizar cota"

Ação: Marca presença em shows
```

### Realizador/Casa (Orange #FF8A34)
```
Vê:
├─ Bandas da sua região (validadas)
├─ Campanhas da região
├─ Demanda em tempo real
└─ Botão: "Agendar" ou "Participar de rateio"

Ação: Agenda shows, valida bandas
```

---

## 🚀 PRÓXIMOS PASSOS

1. **Hoje**: Leia MOTORES.md + IMPLEMENTACAO-MOTORES.md
2. **Semana 1**: Setup (branch, design tokens, auth)
3. **Semana 2**: Componentes React
4. **Semana 3-5**: Backend, real-time, integração
5. **Semana 6-8**: Testes, deploy, pilot

---

## 💬 DÚVIDAS?

| Dúvida | Resposta |
|--------|----------|
| "Como funciona Motor 1?" | Leia MOTORES.md |
| "Como começo a copiar?" | Leia IMPLEMENTACAO-MOTORES.md, Fase 1 |
| "Qual é o schema?" | Veja Database Schema acima |
| "Como implementar real-time?" | Fase 4 deste arquivo |
| "Como rodar a referência?" | `cd /root/showlink-repo && ./serve.sh` |

---

**Estou aqui se tiver dúvidas. Boa sorte!** 🚀

Próximos passos: Leia MOTORES.md → IMPLEMENTACAO-MOTORES.md → comece Semana 1.
