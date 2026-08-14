# 🏗️ Implementação: Os Dois Motores Visíveis

**Para**: Rubens, Jeferson, equipe de desenvolvimento  
**De**: Claude (Design Reference)  
**Status**: ✅ Pronto para handoff  
**Data**: Agosto 2026

---

## O que foi mudado desde a v1 (referência original)

### ❌ Antes
```
hall-shows.html tinha 3 abas:
1. "Suas bandas" (carousel personalizados)
2. "Todos os shows" (grid de shows)
3. "Mapa de bandas" (geolocalização)

→ Foco: descoberta de shows já confirmados
→ Problema: não mostrava como os shows são **criados**
```

### ✅ Depois
```
hall-shows.html tem 3 abas que mostram os MOTORES:
1. "Motor 1: Rateio" (bandas em trânsito com datas livres)
2. "Motor 2: Validação" (campanhas de pré-venda em progresso)
3. "Shows Confirmados" (resultado dos motores)

→ Foco: demonstrar a mecânica de como os shows nascem
→ Solução: cada motor é um card interativo com dados de verdade
```

---

## Arquitetura da Implementação

### Autenticação (localStorage, não server)
```
auth.html
├─ Login form (email + senha)
├─ Registration form (nome, email, senha, persona)
└─ Demo mode (6 persona buttons para teste rápido)
    ├─ Demo Fã
    ├─ Demo Artista
    ├─ Demo Produtor
    ├─ Demo Patrocinador
    ├─ Demo Realizador
    └─ Demo Operador

↓ (localStorage)

js/auth-check.js
├─ Verifica localStorage.showlink_authenticated
├─ Se false, redireciona para auth.html
├─ Se true, injeta window.showlink = { user, persona, logout() }
└─ Adiciona logout button ao header
```

### Páginas Protegidas
```
PUBLIC: index.html, como-funciona.html
PROTECTED: app.html, hall-shows.html, modo-*.html

Se usuário não autenticado → redireciona para auth.html
```

### Hall-Shows — Estrutura Visual

**Tab 1: Motor 1 (Rateio)**
```html
<div id="personalized-tab">
  <!-- Carousel de bandas em trânsito -->
  <show-card motor="1">
    <band-name>Acústicos & Valvulados</band-name>
    <status>💚 PASSAGEM CONFIRMADA</status>
    <dates>
      🔴 Maringá · 24 ago (contratado)
      📍 Cascavel · 25 ago (LIVRE)
      🟡 Foz · 26 ago (LIVRE)
    </dates>
    <cost>
      Cachê: R$ 35k → ÷3 casas = R$ 11.7k
    </cost>
    <button>Propor divisão</button>
  </show-card>
</div>
```

**Tab 2: Motor 2 (Validação)**
```html
<div id="all-tab">
  <!-- Campanhas com progress bars por cidade -->
  <campaign>
    <band-name>Plutão Já Foi Planeta</band-name>
    <status>🎯 CAMPANHA ATIVA</status>
    
    <!-- Cada cidade é um card com progress -->
    <city>
      <name>📍 Cascavel</name>
      <progress>389 / 400 (97,25%)</progress>
      <bar width="97.25%"></bar>
      <cta>Pré-comprar</cta>
    </city>
  </campaign>
</div>
```

**Tab 3: Shows Confirmados**
```html
<div id="map-tab">
  <!-- Grid de shows com badge de qual motor os criou -->
  <show-card>
    <badge motor="2">✅ Motor 2 (412/400)</badge>
    <!-- ou -->
    <badge motor="1">💚 Motor 1 (Rateio Maringá)</badge>
  </show-card>
</div>
```

---

## Dados de Teste (Seeded)

### Motor 1: Bandas em Trânsito
| Banda | Contratado em | Data | Livre em | Cachê | Divisão |
|-------|---------------|------|----------|-------|---------|
| Acústicos & Valvulados | Maringá (24 ago) | - | Cascavel (25), Foz (26) | R$ 35k | ÷3 = R$ 11.7k |
| Tianastácia | Maringá (corp) | - | Cascavel (Qui/Sex), Foz (Sáb) | R$ 40k | - |
| Vanguart | Toledo (prefeitura) | - | Cascavel (dom), Foz (seg) | R$ 30k | 2 casas interessadas |

### Motor 2: Campanhas
| Banda | Cascavel | Toledo | Foz | Status |
|-------|----------|--------|-----|--------|
| Acústicos & Valvulados | 412/400 ✅ | 398/400 | 234/400 | VALIDADO em CSC |
| Plutão Já Foi Planeta | 389/400 | 287/400 | 156/400 | 97% CSC |

---

## Fluxo de UX Esperado

### Usuário novo (Fã)
```
1. Clica "Entrar / Cadastro" em index.html
2. Vai para auth.html
3. Escolhe persona "Demo Fã" (atalho)
   OU preenche form de registro
4. localStorage.showlink_authenticated = true
5. Redireciona para app.html
6. Clica em "Baladas em Cascavel"
7. Vê hall-shows.html com os 3 motores
   - Tab 1: Vê bandas em trânsito
   - Tab 2: Vê campanhas que pode pré-comprar
   - Tab 3: Vê shows confirmados
8. Clica em "Pré-comprar" em Plutão (389/400)
9. (Botão sem funcionalidade — é demo, mas mostra o fluxo)
```

### Usuário produtor
```
1. Demo Produtor
2. Vê Motor 1: Quais bandas estão em trânsito
3. Clica "Propor divisão" → forma rota com 3 casas
4. Vê Motor 2: Quais campanhas estão validando
5. Acompanha progresso (Cascavel está a 11 ingressos!)
```

---

## Para a Implementação em React/Kotlin

### 1. Substituir localStorage por sessão real
```javascript
// Atual (demo)
localStorage.setItem('showlink_authenticated', 'true');
localStorage.setItem('showlink_user', JSON.stringify(user));

// Novo (React + Backend)
const { data, error } = await supabase.auth.signUp({
  email, password, data: { persona }
});
// Token JWT em cookie + sessão
```

### 2. Substituir dados hardcoded por API
```javascript
// Atual (demo)
const campaigns = [
  { band: "Plutão Já Foi Planeta", cities: {...} }
];

// Novo (React + API)
const { data: campaigns } = await supabase
  .from('campaigns')
  .select('*, campaign_cities(*)')
  .eq('status', 'active');
```

### 3. Substituir buttons "sem funcionalidade" por operações reais
```javascript
// Atual
<button>Pré-comprar</button> // não faz nada

// Novo
<button onClick={() => {
  mutate('/api/campaigns/{id}/pre-order', { city, user });
}}>Pré-comprar</button>
```

### 4. Arquitetura de Pasta (sugerida)
```
frontend/
├─ pages/
│  ├─ auth.tsx (login + registro)
│  ├─ app.tsx (hub de personas)
│  ├─ hall-shows.tsx (3 abas)
│  └─ modo-[persona].tsx
├─ components/
│  ├─ Motor1Card.tsx (banda em trânsito)
│  ├─ Motor2Card.tsx (campanha + progress)
│  ├─ ShowConfirmed.tsx (resultado)
│  └─ ProtectedRoute.tsx (auth guard)
└─ api/
   ├─ auth.ts (supabase)
   ├─ campaigns.ts (CRUD)
   └─ cities.ts (geolocation)

backend/
├─ migrations/
│  ├─ 001_create_users.sql
│  ├─ 002_create_campaigns.sql
│  ├─ 003_create_campaign_cities.sql
│  └─ 004_create_shows.sql
├─ functions/
│  ├─ validate_campaign() (trigger on city reach 400)
│  ├─ allocate_dates() (sábado→sexta→domingo)
│  └─ calculate_repasse() (pós-show)
└─ realtime/
   └─ campaign_progress (listen + broadcast)
```

### 5. Checklist de Migração
- [ ] Backend (Supabase ou similar)
- [ ] Autenticação JWT
- [ ] Database schema (users, campaigns, cities, shows)
- [ ] API endpoints (CRUD campaigns, pre-order, validate)
- [ ] Real-time listeners (progress bars atualizam em tempo real)
- [ ] Pagamento suspenso (integração Stripe/processadora)
- [ ] Webhooks de confirmação
- [ ] Notificações push (fã, quando campanha valida)
- [ ] Analytics (qual motor está gerando mais shows)
- [ ] Histórico de repasses (por casa, por artista)

---

## Assets & Referências

| Arquivo | Descrição |
|---------|-----------|
| `/hall-shows.html` | Implementação dos motores em HTML/CSS puro |
| `/MOTORES.md` | Explicação executiva dos dois motores |
| `/README-IMPLEMENTACAO.md` | Guia técnico original (desatualizado, use isto) |
| `/auth.html` | Autenticação (trocar por OAuth real) |
| `/js/auth-check.js` | Route guard (trocar por middleware real) |

---

## Próximas Decisões da Equipe

1. **Backend**: Supabase, Firebase, ou stack próprio?
2. **Pagamento**: Qual processadora? (Stripe, Square, local?)
3. **Notificações**: Push nativa, SMS, email?
4. **Geolocalização**: Google Maps, OpenStreetMap, ou Mapbox?
5. **Legislação**: Regulação de pré-venda, cálculo de imposto?
6. **Testes**: Pilot com Hooligans Cascavel antes de IR para 100%?

---

## Status Final

✅ **Design Reference**: Completo  
✅ **Auth System**: Funcional (localStorage)  
✅ **Motor 1 Visual**: 3 exemplos reais  
✅ **Motor 2 Visual**: Campanhas com progress  
✅ **Documentação**: Este arquivo  
🟡 **Backend**: Aguardando decisão  
🟡 **Integração de Pagamento**: Aguardando  
🟡 **Geolocalização Real**: Aguardando  

---

**Pronto para começar a implementação em React + Backend.**  
**Handf de referência completo. 🚀**
