# 🎯 ShowLink — Seu Acesso Completo

**Para**: Luciano (proprietário)  
**O que fazer**: Testar tudo e validar antes de mandar para Jeferson  
**Tempo**: 15 minutos

---

## 🚀 RODAR AGORA

```bash
cd /root/showlink-repo
./serve.sh
```

Acesso: **http://localhost:8000**

---

## 📋 CHECKLIST DE TESTE (15 minutos)

### 1. Landing Page (1 min)
```
[ ] Abra http://localhost:8000
[ ] Veja hero video com "O palco começa antes do show"
[ ] Clique "Ver como funciona" → rola a página
[ ] Clique "Entrar / Cadastro" → vai para auth.html
```

### 2. Sistema de Login (2 min)
```
[ ] Você está em auth.html
[ ] Vê 6 botões de demo (Fã, Artista, Produtor, Patrocinador, Realizador, Operador)
[ ] Clique em qualquer um
[ ] Redireciona para app.html com aquela persona
```

### 3. App Hub (1 min)
```
[ ] Você está em app.html (hub de personas)
[ ] Vê "SOU:" + 6 botões de personas
[ ] Vê seu nome no header (ex: "Demo Fã")
[ ] Clique em "Baladas em Cascavel" (ou qualquer link)
```

### 4. MOTOR 1 - Rateio (3 min)
```
[ ] Você está em hall-shows.html
[ ] Vê 3 abas no topo:
    1. "Motor 1: Rateio" (ativo)
    2. "Motor 2: Validação"
    3. "Shows Confirmados"

[ ] TAB 1: Vê 3 cards de bandas em trânsito:
    
    Card 1: Acústicos & Valvulados
    ├─ 💚 PASSAGEM CONFIRMADA
    ├─ 🔴 Maringá · 24 ago (contratado)
    ├─ 📍 Cascavel · 25 ago (LIVRE) ← Verde
    ├─ 🟡 Foz · 26 ago (LIVRE)
    ├─ Cachê: R$ 35k → ÷3 casas = R$ 11.7k ← IMPORTANTE!
    └─ [Propor divisão]
    
    Card 2: Tianastácia
    ├─ 💚 PASSAGEM CONFIRMADA
    ├─ 🔴 Maringá (corporativo)
    ├─ 📍 Cascavel (Quinta ou Sexta)
    ├─ R$ 40k + transporte R$ 3.5k
    └─ [Encaixar rota]
    
    Card 3: Vanguart
    ├─ 💚 DISPONÍVEL
    ├─ 🔴 Toledo (prefeitura)
    ├─ 📍 Cascavel · Domingo
    └─ 2 casas já interessadas

[ ] EFEITO ESPERADO: 
    "Vejo as bandas que já estão na região.
     Se dividir com outras casas, fica barato.
     Custo dividido por 3 casas."
```

### 5. MOTOR 2 - Validação (4 min)
```
[ ] Clique na TAB 2: "Motor 2: Validação"
[ ] Vê 2 campanhas com progress bars

    Campanha 1: Plutão Já Foi Planeta
    ├─ 🎯 CAMPANHA ATIVA
    ├─ Rock Alt · Meta: 400 ingressos · R$ 80
    │
    ├─ 📍 Cascavel → 389/400 (97,25%) ← PERTO! 11 ingressos!
    │  ███████████████████░ 97%
    │  [Pré-comprar em Cascavel]
    │
    ├─ 📍 Toledo → 287/400 (71,75%)
    │  ███████████░░░░░░░░ 72%
    │
    └─ 📍 Foz do Iguaçu → 156/400 (39%)
       ████░░░░░░░░░░░░░░░ 39%
    
    Campanha 2: Acústicos & Valvulados
    ├─ 📍 Cascavel → 412/400 ✅ VALIDADO
    │  ████████████████████ 100%
    │  ✅ VALIDADO · Data: Sábado 29 ago
    │
    ├─ 📍 Maringá → 398/400 (99,5%) ← Falta só 2!
    │  ████████████████████ 99%
    │
    └─ 📍 Foz → 234/400 (58,5%)
       ██████████░░░░░░░░░ 59%

[ ] EFEITO ESPERADO:
    "Vejo as campanhas em andamento.
     Cascavel de Plutão está perto (11 ingressos!)
     Maringá de Acústicos valida hoje (falta 2)
     Se atingir 400, o show é confirmado, sábado."
```

### 6. Shows Confirmados (2 min)
```
[ ] Clique na TAB 3: "Shows Confirmados"
[ ] Vê ~10 cards de shows

    Card 1: Acústicos & Valvulados
    ├─ ✅ Motor 2 (412/400) ← Badge dizendo qual motor criou
    ├─ 📅 29 ago · 20h
    ├─ Hooligans Cascavel
    └─ [Ingressos]
    
    Card 2: Plutão Já Foi Planeta
    ├─ ⚡ Motor 2 (389/400 · Falta 11) ← Campanha em progresso
    ├─ 📅 22 ago · 21h
    └─ [Pré-comprar]
    
    Card 3: VICKA
    ├─ 💚 Motor 1 (Rateio Maringá) ← Motor 1 badge
    ├─ 📅 29 ago · 20h
    ├─ MPB Bar (Maringá) · 168 km
    └─ [Cotar rateio]

[ ] EFEITO ESPERADO:
    "Vejo que Acústicos já foi validado (Motor 2).
     Plutão está quase lá (11 tickets!)
     VICKA é um rateio (Motor 1).
     Cada show tem origem clara."
```

### 7. Testar outra Persona (2 min)
```
[ ] Procure o nome no header (ex: "Demo Fã")
[ ] Clique nele
[ ] Vê opção de logout
[ ] Clique logout (ou volte pra home)
[ ] Vá pra auth.html novamente
[ ] Escolha OUTRA persona (ex: "Demo Produtor")
[ ] Volte pra hall-shows
[ ] COMPARE: O que muda?
    ├─ Cores dos cards? (Sim, cores da persona)
    ├─ Dados? (Mesmos shows, mas contexto diferente)
    ├─ Títulos das abas? (Mesmos 3 motores)
    └─ Botões? (Ações diferentes por persona)
```

---

## 🎬 FLUXO ESPERADO (Storytelling)

Se quer contar para um investidor em 5 minutos:

```
MINUTO 0: Home
  "A banda cara não toca perto porque ninguém banca sozinho."
  (Mostra hero video)

MINUTO 1: Login
  "Aqui cada um entra: fã, artista, produtor, casa."
  (Clica Demo Fã)

MINUTO 2: Motor 1
  "Se a banda já está na região (corporativo/prefeitura),
   nós juntamos as casas pra dividir o cachê."
  (Mostra Acústicos: R$ 35k ÷3 = R$ 11.7k)

MINUTO 3: Motor 2
  "Se a banda quer crescer, deixa o fã validar primeiro.
   Primeira cidade com 400 ingressos → sábado.
   Se não valida → ninguém é cobrado."
  (Mostra Plutão: 389/400, falta 11!)

MINUTO 4: Resultado
  "Resultado: Acústicos validado (Motor 2),
   VICKA em rateio (Motor 1), tudo transparente."
  (Mostra Shows Confirmados com badges)

MINUTO 5: Conclusão
  "A demanda sempre existiu. Agora ela é visível.
   E o show acontece porque o fã quis."
```

---

## ✅ VALIDAÇÃO - Coisas que DEVE funcionar

### Design & Cores
```
✅ Fã: Cards com borda ROSA (#FF3D7F)
✅ Artista: Cards com borda VERDE (#10B981)
✅ Produtor: Cards com borda ROXO (#8B5CF6)
✅ Patrocinador: Cards com borda CIANO (#35A7FF)
✅ Realizador: Cards com borda LARANJA (#FF8A34)
✅ Operador: Cards com borda CAL (#C7F73E)
```

### Motor 1
```
✅ 3 bandas em trânsito visíveis
✅ Datas mostradas (🔴 contratado, 📍 livre, 🟡 livre)
✅ Custo dividido por casa visível (÷3 = R$ 11.7k)
✅ Botão "Propor divisão" presente
```

### Motor 2
```
✅ 2 campanhas visíveis
✅ Progress bars por cidade
✅ Percentual correto (389/400 = 97,25%)
✅ Campanha validada mostra ✅ VALIDADO
✅ Botão "Pré-comprar" presente
✅ "Cobrança suspensa até validação" aparece
```

### Shows Confirmados
```
✅ ~10 cards de shows
✅ Badges mostram qual motor criou (Motor 1 ou Motor 2)
✅ Datas, venues, distâncias corretas
```

### Autenticação
```
✅ Demo buttons funcionam (click → login instantâneo)
✅ Header mostra nome do usuário
✅ Logout funciona
✅ Trocar de persona muda aparência
```

---

## 🐛 Se algo QUEBRAR

| Problema | O que fazer |
|----------|------------|
| "Página branca em auth.html" | Verificar console (F12) → Ver erro |
| "Não carrega videos" | Certificar que server está rodando (./serve.sh) |
| "Cores erradas" | Verificar `/css/base.css` → cores definidas |
| "Botões não fazem nada" | Normal! É referência, não tem backend |
| "Logout não funciona" | Limpar localStorage (F12 → Application) |
| "Progresso errado" | Números estão em `/hall-shows.html` lines 200-300 |

---

## 📦 PARA MANDAR PARA JEFERSON

Arquivo: **`/root/showlink-repo/JEFERSON-HANDOFF.md`**

Copiar e colar URL ou enviar arquivo:
```
To: jeferson@showlink.dev
Subject: ShowLink — Referência de Design + Roadmap de Implementação

Anexo: /root/showlink-repo/JEFERSON-HANDOFF.md

Mensagem:
"Jeferson,

Preparei a referência de design completa dos dois motores (Motor 1: Rateio, Motor 2: Validação).

Tudo funcional em HTML/CSS puro — clone /root/showlink-repo e rode ./serve.sh.

Arquivo JEFERSON-HANDOFF.md tem:
1. Como acessar e testar agora
2. Todos os docs para ler (nesta ordem)
3. Passo-a-passo de 5 semanas de implementação
4. Checklist de merge
5. Schema de banco + API endpoints

Estou aqui para tirar dúvidas.
"
```

---

## 📞 PRÓXIMAS AÇÕES

- [ ] **Você**: Rodar ./serve.sh e testar os 7 passos acima
- [ ] **Você**: Validar que Motor 1 + Motor 2 fazem sentido
- [ ] **Você**: Refinar dados/textos se necessário (me avisa)
- [ ] **Você**: Mandar `/root/showlink-repo` ou arquivo JEFERSON-HANDOFF.md para Jeferson
- [ ] **Jeferson**: Ler JEFERSON-HANDOFF.md
- [ ] **Jeferson**: Começar a implementação (week 1 = setup + design tokens)

---

## 💡 DICAS PARA TESTAR

1. **Abra 2 abas do navegador**: Uma com Demo Fã, outra com Demo Produtor
   - Veja o mesmo dado sob dois ângulos diferentes

2. **Varie os dados mentalmente**: 
   - "E se Plutão tivesse 400/400?"
   - "E se tivesse 5 cidades, não 3?"
   - (Jeferson vai poder fazer isso depois)

3. **Explore o HTML**: F12 → DevTools → Elements
   - Veja como `<div class="show-card">` é estruturado
   - Copie a estrutura para React depois

4. **Teste em mobile**: Redimensione a janela
   - Cards devem ser responsivos
   - Carrossel de Motor 1 deve rolar em touch

---

**Tudo pronto. Mande para Jeferson. 🚀**

Dúvidas? Estou aqui.
