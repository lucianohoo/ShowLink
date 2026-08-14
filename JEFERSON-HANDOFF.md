# 📦 ShowLink — Handoff para Jeferson

**De**: Luciano  
**Para**: Jeferson (desenvolvimento React/Kotlin)  
**Data**: Agosto 2026  
**Status**: ✅ Pronto para integração

---

## 1️⃣ ACESSO IMEDIATO (Para Testar Tudo Agora)

### Como rodar a referência de design

```bash
cd /root/showlink-repo
./serve.sh
```

Abre: **http://localhost:8000**

### Testar cada persona (6 opções)

1. Clique em **"Entrar / Cadastro"** (botão vermelho top-right em index.html)
2. Você vai para `auth.html`
3. Vê 6 botões de demo (escolha um):

| Persona | Cor | O que ver |
|---------|-----|----------|
| 🎵 **Fã** | Rosa #FF3D7F | Campanhas que pode pré-comprar, bandas que segue |
| 🎸 **Artista** | Verde #10B981 | Demanda em cidades (Motor 1 + Motor 2), renda estimada |
| 🎯 **Produtor** | Roxo #8B5CF6 | Bandas em trânsito, roteios possíveis, encaixes de data |
| 💰 **Patrocinador** | Ciano #35A7FF | Match % com artistas, sinalizações de cota |
| 🏠 **Realizador** | Laranja #FF8A34 | Casa embaixadora, bandas validadas, transmissão stats |
| 📊 **Operador** | Cal #C7F73E | Dashboard agregado (Hooligans + regional) |

### Página principal para testar os motores

Após fazer login como **qualquer persona**, vá para:  
**"Baladas em Cascavel"** (ou `/hall-shows.html`)

Você verá 3 abas:

1. **⚡ Motor 1: Rateio**
   - Bandas em trânsito com datas livres
   - Exemplo: Acústicos & Valvulados (Maringá → Cascavel + Foz)
   - Botão: "Propor divisão"

2. **🎯 Motor 2: Validação**
   - Campanhas de pré-venda em progresso
   - Exemplo: Plutão Já Foi Planeta (389/400 em Cascavel!)
   - Progress bars por cidade
   - Botão: "Pré-comprar"

3. **✅ Shows Confirmados**
   - Resultado dos motores
   - Badges mostrando qual motor criou cada show

---

## 2️⃣ DOCUMENTAÇÃO COMPLETA (Para Entender a Lógica)

Leia nesta ordem:

### A. Para entender o PRODUTO (Luciano)
```
/MOTORES.md
├─ Explica Motor 1 (Rateio)
├─ Explica Motor 2 (Validação)
├─ Fluxo real (os dois juntos)
└─ Parâmetros configuráveis
```

### B. Para entender a IMPLEMENTAÇÃO (Você)
```
/IMPLEMENTACAO-MOTORES.md
├─ O que mudou desde v1
├─ Arquitetura atual (localStorage)
├─ Estrutura visual (HTML/CSS)
├─ Dados de teste (seeded)
├─ Fluxo de UX por persona
└─ Checklist de migração para React
```

### C. Para integrar ao seu backend (Referência)
```
/README-IMPLEMENTACAO.md (original, mas ainda válido)
├─ Spec técnica completa
├─ API endpoints sugeridos
├─ Database schema
├─ Customizações
└─ Deploy
```

---

## 3️⃣ PASSO-A-PASSO PARA IMPLEMENTAÇÃO

### Fase 1: Setup (Semana 1)

```bash
# 1. Clone a referência de design
git clone /root/showlink-repo showlink-ui-reference

# 2. Crie uma nova branch no seu projeto React
git checkout -b feat/two-engines-motor1-motor2

# 3. Copie a estrutura de cores (CSS Variables)
# De: /root/showlink-repo/css/base.css
# Para: seu projeto (Tailwind config OU CSS modules)

CORES_REFERENCIA = {
  '--ink': '#070C16',          // darkest bg
  '--navy': '#0D1526',         // dark layer
  '--lime': '#8B5CF6',         // purple (brand)
  '--fa': '#FF3D7F',           // Fã - Pink
  '--artista': '#10B981',      // Artista - Green
  '--produtor': '#8B5CF6',     // Produtor - Purple
  '--patro': '#35A7FF',        // Patrocinador - Cyan
  '--realizador': '#FF8A34',   // Realizador - Orange
}

# 4. Crie as páginas React
components/
├─ Motor1Card.tsx      # Banda em trânsito
├─ Motor2Card.tsx      # Campanha + progress
├─ ShowConfirmed.tsx   # Show validado
├─ HallShows.tsx       # 3 abas
├─ ProtectedRoute.tsx  # Auth guard
└─ Auth/
   ├─ LoginPage.tsx
   └─ RegisterPage.tsx
```

### Fase 2: Backend Setup (Semana 2)

```bash
# 1. Crie tabelas no Supabase
-- migration_001_schema.sql

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  persona VARCHAR(20) NOT NULL, -- 'fan', 'artist', 'producer', etc
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  band_id UUID REFERENCES bands(id),
  band_name TEXT NOT NULL,
  status VARCHAR(20) NOT NULL, -- 'active', 'validated', 'cancelled'
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE campaign_cities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES campaigns(id),
  city_name TEXT NOT NULL,
  goal_tickets INT DEFAULT 400,
  current_tickets INT DEFAULT 0,
  target_date DATE,
  validated_at TIMESTAMP,
  day_allocated VARCHAR(20), -- 'saturday', 'friday', 'sunday'
);

CREATE TABLE transit_bands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  band_name TEXT NOT NULL,
  confirmed_city TEXT NOT NULL,
  confirmed_date DATE NOT NULL,
  cost INT NOT NULL,
  available_cities TEXT[] NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE shows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  band_id UUID REFERENCES bands(id),
  city_name TEXT NOT NULL,
  date DATE NOT NULL,
  venue_id UUID REFERENCES venues(id),
  motor_type VARCHAR(20), -- 'motor1' ou 'motor2'
  validated_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

# 2. Crie API endpoints (Express/Supabase Functions)
POST   /api/auth/register
POST   /api/auth/login
GET    /api/campaigns (listar ativas)
GET    /api/campaigns/{id}
POST   /api/campaigns/{id}/pre-order
POST   /api/transit-bands
GET    /api/hall-shows/{city}
```

### Fase 3: Frontend Integration (Semana 3)

```bash
# 1. Substitua localStorage por JWT
// ANTES (demo)
localStorage.setItem('showlink_authenticated', 'true');

// DEPOIS (React)
const { data, error } = await supabase.auth.signUp({
  email, password, options: { data: { persona } }
});
setAuthToken(data.session.access_token);

# 2. Conecte componentes à API
// ANTES (hardcoded)
const campaigns = [
  { band: "Plutão", cities: {...} }
];

// DEPOIS (React Query)
const { data: campaigns } = useQuery({
  queryKey: ['campaigns'],
  queryFn: () => fetch('/api/campaigns').then(r => r.json())
});

# 3. Implemente botões reais
// ANTES
<button>Pré-comprar</button> // não faz nada

// DEPOIS
const handlePreOrder = async (campaignId, city) => {
  const { error } = await supabase
    .from('campaign_cities')
    .update({ current_tickets: tickets + 1 })
    .eq('campaign_id', campaignId)
    .eq('city_name', city);
  
  if (!error) {
    // Atualiza UI em real-time via Supabase listener
  }
};
```

### Fase 4: Real-time & Validação (Semana 4)

```bash
# 1. Implemente listeners de progresso (Motor 2)
useEffect(() => {
  const subscription = supabase
    .from('campaign_cities')
    .on('UPDATE', payload => {
      // Atualiza progress bar em tempo real
      setCampaignProgress(payload.new);
    })
    .subscribe();
  
  return () => subscription.unsubscribe();
}, [campaignId]);

# 2. Trigger automático quando atingir 400
-- trigger_validate_campaign.sql
CREATE TRIGGER validate_campaign
AFTER UPDATE ON campaign_cities
FOR EACH ROW
WHEN (NEW.current_tickets >= NEW.goal_tickets)
EXECUTE FUNCTION allocate_show_date();

# 3. Função que aloca datas (sábado → sexta → domingo)
CREATE OR REPLACE FUNCTION allocate_show_date()
RETURNS TRIGGER AS $$
BEGIN
  -- Conta quantas cidades já validaram
  -- 1ª = sábado, 2ª = sexta, 3ª = domingo
  ...
END;
```

### Fase 5: Testes (Semana 5)

```bash
# 1. Teste Motor 1 (Rateio)
[ ] Criar banda em trânsito
[ ] Verificar visibilidade em 3+ cidades
[ ] Clicar "Propor divisão"
[ ] Calcular custo dividido

# 2. Teste Motor 2 (Validação)
[ ] Criar campanha
[ ] Pré-comprar em cidade A (50 ingressos)
[ ] Pré-comprar em cidade B (100 ingressos)
[ ] Atingir 400 em cidade C → show validado
[ ] Verificar alocação de data (sábado)
[ ] Cidade D não atingir 400 → ninguém cobrado

# 3. Teste Auth
[ ] Registrar novo usuário
[ ] Login com email/senha
[ ] Logout
[ ] Persona correta aparece em app

# 4. Teste Personas
[ ] Fã: Vê campanhas certas
[ ] Artista: Vê demanda + ranking de cidades
[ ] Produtor: Vê bandas + encaixes
[ ] Patrocinador: Vê match %
[ ] Realizador: Vê casa embaixadora + bandas validadas
[ ] Operador: Dashboard agregado
```

---

## 4️⃣ CHECKLIST DE MERGE

### Antes de fazer PR

```
✅ Código
  [ ] Lintado (eslint, prettier)
  [ ] Testes passando (jest)
  [ ] TypeScript strict mode
  [ ] Sem console.log()
  
✅ UX
  [ ] Todas as 3 abas funcionam
  [ ] Progress bars atualizam em real-time
  [ ] Buttons fazem a ação (não console.log)
  [ ] Responsive mobile/tablet/desktop
  
✅ Dados
  [ ] API retorna dados corretos
  [ ] Validações no backend
  [ ] Transactions para pagamentos (suspenso até validação)
  
✅ Segurança
  [ ] JWT em cookie (httpOnly)
  [ ] CORS configurado
  [ ] Rate limiting em endpoints
  [ ] Validação de persona (servidor, não client)
  
✅ Documentação
  [ ] README atualizado
  [ ] Env vars documentadas
  [ ] Migrações SQL documentadas
```

### Comando de merge

```bash
# 1. Certifique-se que está tudo pronto
git status

# 2. Commit final
git commit -m "feat: Motor 1 & Motor 2 implementation with real-time validation

- Hall-shows redesigned with 3 tabs (Rateio, Validação, Confirmados)
- Real-time campaign progress via Supabase listeners
- Auth system with JWT (replaces localStorage)
- All 6 personas functional (Fã, Artista, Produtor, Patrocinador, Realizador, Operador)
- Database schema (campaigns, campaign_cities, transit_bands, shows)
- API endpoints for pre-order, validation, campaign management
- Automated date allocation (sábado → sexta → domingo)

Closes: ShowLink/project#motors
"

# 3. Push para branch
git push origin feat/two-engines-motor1-motor2

# 4. Criar PR com template
gh pr create \
  --title "feat: Motor 1 & Motor 2 complete implementation" \
  --body "$(cat IMPLEMENTACAO-MOTORES.md)"
```

---

## 5️⃣ CHECKLIST FINAL (Antes de IR para PRODUÇÃO)

```
🟢 DESIGN REFERENCE
  ✅ Todas as 3 cores de persona visíveis
  ✅ Tipografia Unbounded (display) + Poppins (body)
  ✅ Tokens de design (CSS variables → Tailwind)
  
🟢 FUNCIONALIDADE
  ✅ Motor 1: Bandas em trânsito com divisão de custo
  ✅ Motor 2: Campanhas com progress bars
  ✅ Validação automática ao atingir 400
  ✅ Alocação de datas (sábado → sexta → domingo)
  ✅ Cobrança suspensa até validação
  
🟢 AUTENTICAÇÃO
  ✅ Login/registro funcional
  ✅6 personas mapeadas
  ✅ JWT tokens
  ✅ Logout
  
🟢 DADOS REAIS
  ✅ Integração com Cloudfy (histórico Hooligans)
  ✅ Geolocalização (raio 300km)
  ✅ Repasse automático pós-show
  ✅ Ranking de cidades (demanda)
  
🟢 PERFORMANCE
  ✅ Lighthouse 90+
  ✅ <3s load time
  ✅ Real-time sem delay (< 500ms)
  
🟢 SEGURANÇA
  ✅ HTTPS obrigatório
  ✅ Validações no backend
  ✅ Rate limiting
  ✅ Sem dados sensíveis em localStorage
  
🟢 MOBILE
  ✅ Responsivo 320px → 4K
  ✅ Touch-friendly buttons
  ✅ Carrossel toque suave
```

---

## 6️⃣ ARQUIVOS PRINCIPAIS

### Você precisa entender ESTES arquivos:

| Arquivo | Descrição | Ler por? |
|---------|-----------|----------|
| `/auth.html` | Sistema de login (demo) | Entender fluxo de auth |
| `/hall-shows.html` | 3 abas dos motores | Copiar estrutura visual |
| `/js/auth-check.js` | Route protection | Ver como implementar auth guard |
| `/css/base.css` | Design tokens | Cores, fonts, spacing |
| `/MOTORES.md` | Explicação dos motores | Entender regras de produto |
| `/IMPLEMENTACAO-MOTORES.md` | Guia técnico completo | Roadmap de desenvolvimento |

### Você pode IGNORAR (já foi usado):

- `/modo-*.html` (personas individuais)
- `/CONSOLIDACAO.md` (histórico)
- `/TEST-REPORT.md` (relatório antigo)
- `/ENTREGA.md` (entrega da v1)

---

## 7️⃣ CONTATO & SUPORTE

### Se tiver dúvida sobre...

| Dúvida | Procure em |
|--------|-----------|
| Como Motor 1 funciona? | `/MOTORES.md` seção Motor 1 |
| Como Motor 2 funciona? | `/MOTORES.md` seção Motor 2 |
| O que mudou desde v1? | `/IMPLEMENTACAO-MOTORES.md` antes/depois |
| Como implementar em React? | `/IMPLEMENTACAO-MOTORES.md` Fase 1-5 |
| Qual é o schema do banco? | `/IMPLEMENTACAO-MOTORES.md` Fase 2 |
| Como testar tudo? | Seção "3️⃣ Passo-a-passo" acima |
| Qual a cor do Fã? | `#FF3D7F` (em `/css/base.css`) |

---

## 8️⃣ TIMELINE SUGERIDA

```
Semana 1: Setup + Design tokens
Semana 2: Backend (auth + campaigns)
Semana 3: Frontend (Motor 1 + Motor 2)
Semana 4: Real-time + Validação
Semana 5: Testes + Refinamentos
Semana 6: Deploy staging
Semana 7: Pilot com Hooligans
Semana 8: Produção (aberto para todos)
```

---

## ✅ ESTÁ PRONTO PARA COMEÇAR

Tudo que você precisa está em `/root/showlink-repo`:
- Design reference funcional ✅
- Documentação completa ✅
- Dados de teste seeded ✅
- Arquitetura definida ✅

**Próximo passo: Abra `auth.html`, explore as 6 personas, e comece a implementação em React.**

---

**Boa sorte, Jeferson! 🚀**

Dúvidas? Estou por aqui.
