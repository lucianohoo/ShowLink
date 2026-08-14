# 📋 SHOWLINK — Guia Único para Rubens

**De**: Luciano  
**Para**: Rubens (finalizar o sistema)  
**Data**: Agosto 2026  
**Escopo**: Integrar layout + onboarding + 5 personas no backend existente

---

## 🚀 ANTES DE COMEÇAR: RODE E VER FUNCIONANDO

```bash
cd /root/showlink-repo
./serve.sh
# http://localhost:8000
```

**Clique nisto (NESTA ORDEM):**

1. **index.html** (landing)
   - Vê hero video "O palco começa antes do show"
   - Entende o todo do sistema
   - Cores aparecem quando explica os motores

2. **"Entrar / Cadastro"** (canto superior direito)
   - Vai pra auth.html
   - Clica em "Demo Fã" (ou qualquer persona)

3. **"Baladas em Cascavel"** (ou qualquer link de evento)
   - Vai pra hall-shows.html
   - **TAB 1: Motor 1 (Rateio)**
     - Vê 3 bandas em trânsito
     - Entende divisão de custo
   - **TAB 2: Motor 2 (Validação)**
     - Vê campanhas com progress bars
     - Plutão está a 389/400 em Cascavel
   - **TAB 3: Shows Confirmados**
     - Vê resultado (qual motor criou cada show)

4. **Volta pra auth.html** (clica no nome no header → logout)
   - Escolhe OUTRA persona (ex: Demo Produtor)
   - Volta pra hall-shows
   - **Vê as mesmas 3 abas, mas com contexto diferente**
     - Fã: "Quero pré-comprar"
     - Produtor: "Quero encaixar rota"

5. **Clica em cada persona em auth.html**
   - Demo Fã, Demo Artista, Demo Produtor, Demo Patrocinador, Demo Realizador, Demo Operador
   - Vê que cada uma tem cores diferentes

**O QUE VOCÊ VAI ENTENDER FAZENDO ISTO:**
- Motor 1 e Motor 2 não são abstratos — estão ali, funcionando
- As 5 personas não veem a mesma coisa — contextos diferentes
- As cores identificam cada persona — visual único
- Tudo tem um propósito — nada é aleatório

---

## 🎯 O QUE É

ShowLink tem **2 motores que criam shows**:

### Motor 1: Rateio por Proximidade
Banda confirmada em uma cidade? Outras casas vizinhas (300km) dividem custo e transportam juntos.
- Exemplo: Acústicos em Maringá (R$ 35k) → Cascavel + Foz dividem = R$ 11.7k cada

### Motor 2: Validação Antecipada
Banda quer turnê mas sem risco. Abre pré-venda em 3 cidades. Se atinge 400 ingressos em uma cidade = show confirmado naquele dia. Se não atinge = ninguém é cobrado.
- Exemplo: Plutão em Cascavel (389/400) — faltam 11 ingressos

---

## 📁 ARQUIVOS PRONTOS EM `/root/showlink-repo`

**RODANDO AGORA:**
```bash
cd /root/showlink-repo
./serve.sh
# http://localhost:8000
```

### Arquivos que você COPIA a estrutura:

| Arquivo | O que é | O que Rubens faz |
|---------|---------|-----------------|
| `/hall-shows.html` | 3 abas (Motor 1, Motor 2, Shows Confirmados) | Copia estrutura HTML, conecta à API real |
| `/auth.html` | Login + 6 botões demo de personas | Copia layout, integra com seu sistema de auth |
| `/css/base.css` | Cores, fonts, design tokens | Adapta pro Tailwind ou CSS do seu projeto |
| `/index.html` | Landing page explicando os motores | Copia, ajusta logo + vídeos |
| `/app.html` | Hub de seleção de personas (6 botões) | Copia o seletor, personaliza |
| `/modo-fa.html` até `/modo-realizador.html` | Páginas por persona (5 arquivos) | Referência de layout — copia estrutura |

### Documentação que Rubens LÊ:

| Arquivo | Propósito | Tempo |
|---------|-----------|-------|
| `/MOTORES.md` | Entender Motor 1 + Motor 2 | 5 min |
| `/IMPLEMENTACAO-MOTORES.md` | Ver antes/depois e checklist técnico | 10 min |

---

## 🔴 O QUE FALTA (Rubens faz isto)

### 1. Onboarding PRÉ-CADASTRO
**Arquivo**: `como-funciona-completo.html`

Usuário novo entra, vê:
- Seção 1: "O Problema" (com vídeo)
- Seção 2: "Motor 1: Rateio" (com imagem + explicação)
- Seção 3: "Motor 2: Validação" (com progress bar animada)
- Seção 4: "Os 5 Papéis" (Fã, Artista, Produtor, Patrocinador, Realizador)
  - **Cada persona mostra sua cor própria (#FF3D7F para Fã, #10B981 para Artista, etc)**
  - Clicável: ao clicar, a seção toda muda pra cor daquela persona
- Botão final: "Entender melhor" → vai pra `/auth.html`

**Conteúdo**: Use os vídeos que você tem (00_geral_trilogia.mp4 e outros). Cada seção com:
- Vídeo ou imagem
- Texto explicativo
- Legenda em português

---

### 2. Onboarding PÓS-CADASTRO (5 caminhos diferentes)

**Arquivo**: `onboarding-[persona].html` (5 arquivos)

Cada persona entra logado e vê seu caminho específico:

#### A) Fã (`onboarding-fa.html`)
```
Bem-vindo, [nome]! 👋

1. "Como funciona pré-comprar?"
   - Vídeo de 30s mostrando Plutão (389/400)
   - Botão "Pré-comprar em Cascavel"
   - Legenda: "Sua cobrança é suspensa até validar"

2. "Como seguir bandas?"
   - Imagem mostrando "Minhas Bandas"
   - Clica em "Adicionar"
   - Vê as 5 que segue

3. "Onde estão teus shows?"
   - Clica em "Meu Calendário"
   - Vê bandas que segue + shows próximos

[Próximo] → Vai pra hall-shows.html
```

#### B) Artista (`onboarding-artista.html`)
```
Bem-vindo, [banda]! 🎸

1. "Crie sua campanha"
   - Explica Motor 2
   - Botão "Iniciar Campanha"
   - Imagem: formulário preenchido

2. "Acompanhe demanda em tempo real"
   - Mostra progress bar (389/400)
   - Legenda: "Cascavel está a 11 ingressos!"

3. "Veja quem está pedindo você"
   - Imagem: ranking de cidades
   - "Curitiba: 234 pré-compras"

[Próximo] → app.html (seu hub)
```

#### C) Produtor (`onboarding-produtor.html`)
```
Bem-vindo, produtor! 🎯

1. "Encaixe rotas (Motor 1)"
   - Explica: Acústicos em Maringá? Divide com Cascavel
   - Imagem: mapa com 3 cidades + cachês
   - Botão "Ver bandas em trânsito"

2. "Acompanhe validações (Motor 2)"
   - Mostra Plutão (389/400)
   - Legenda: "Falta pouco para confirmar"

3. "Sua comissão"
   - Imagem: tabela de repasses por show

[Próximo] → hall-shows.html
```

#### D) Patrocinador (`onboarding-patrocinador.html`)
```
Bem-vindo, patrocinador! 💰

1. "Descubra artistas com seu match"
   - Imagem: card de artista + "85% match com sua marca"
   - Botão "Sinalizar cota"

2. "Veja campanhas em andamento"
   - Mostra Plutão (389/400)
   - Legenda: "Apareça neste show"

3. "Histórico de investimentos"
   - Imagem: tabela com shows, investimentos, ROI

[Próximo] → hall-shows.html
```

#### E) Realizador/Casa (`onboarding-realizador.html`)
```
Bem-vindo, [Casa]! 🏠

1. "Você é Casa Embaixadora"
   - Explica: bandas validadas por você ganham repasse
   - Imagem: "Bandas da sua região"

2. "Participe de Motor 1 (Rateio)"
   - Acústicos em Maringá? Você ganha repasse se trouxer
   - Imagem: divisão de cachê

3. "Valide bandas"
   - Clica em banda → "Validar como Embaixadora"
   - Aí ela fica seu "selo"

[Próximo] → app.html
```

---

## 🎨 CORES (IMPORTANTE)

Cada persona tem uma cor que aparece **em TUDO**:

```
--fa: #FF3D7F           (Fã - Pink)
--artista: #10B981      (Artista - Green)
--produtor: #8B5CF6     (Produtor - Purple)
--patro: #35A7FF        (Patrocinador - Cyan)
--realizador: #FF8A34   (Realizador - Orange)
```

**Onde aparece:**
- Borders dos cards
- Botões de ação
- Headers das seções
- Progress bars (Motor 2)
- Badges de validação

---

## 📹 VÍDEOS

Use os 29 vídeos que você tem. Organize assim:

```
/videos/
├─ onboarding/
│  ├─ 00_motor1_rateio.mp4        (Motor 1 explicado)
│  ├─ 00_motor2_validacao.mp4     (Motor 2 explicado)
│  ├─ 01_fa_precomprar.mp4        (Como fã pré-compra)
│  ├─ 02_artista_campanha.mp4     (Como artista cria campanha)
│  └─ ...
├─ tutorial/
│  ├─ como_seguir_bandas.mp4
│  ├─ como_validar_banda.mp4
│  └─ ...
└─ (videos já existentes)
```

---

## 🔧 PASSO-A-PASSO TÉCNICO

### Fase 1: Estrutura
1. Copia `/hall-shows.html` → adapta ao React/seu framework
2. Copia `/auth.html` → integra com seu login
3. Copia `/css/base.css` → tokens pro Tailwind

### Fase 2: Onboarding PRÉ-Cadastro
1. Cria `como-funciona-completo.html` (ou adapta `/como-funciona.html`)
2. Adiciona 4 seções (Problema, Motor 1, Motor 2, Personas)
3. Cada seção tem vídeo/imagem + legenda
4. Personas são clicáveis e mudam cor

### Fase 3: Onboarding PÓS-Cadastro
1. Cria 5 arquivos: `onboarding-fa.html`, `onboarding-artista.html`, etc
2. Cada um tem 3 seções (vídeo + imagem + contexto)
3. Redirect automático pra `/hall-shows.html` ao fim

### Fase 4: Conectar ao Backend
1. Troca dados hardcoded por API calls
2. `/hall-shows.html` chama `GET /api/campaigns`, `GET /api/transit-bands`
3. Progress bars atualizam em tempo real (listeners Supabase se usar)

### Fase 5: Logos + Acessibilidade
1. Adiciona logo Lei Rouanet (canto superior/rodapé)
2. Adiciona logo Governo (mesma posição)
3. Implementa LIBRAS (vídeos com intérprete) OU widget de tradução
4. Implementa audiovisual (ícone + player com áudio descritivo)

---

## 📊 FLUXO DO USUÁRIO

```
1. Entra em index.html (landing)
   ↓
2. Clica "Entender melhor" → como-funciona-completo.html
   (vê Motor 1, Motor 2, 5 personas em suas cores)
   ↓
3. Clica "Cadastrar" → auth.html
   (escolhe persona: Fã, Artista, etc)
   ↓
4. Entra logado → onboarding-[persona].html
   (3 seções específicas com vídeos)
   ↓
5. Clica "Próximo" → hall-shows.html
   (vê os 3 motores funcionando com dados reais)
   ↓
6. Explora sistema (pré-compra, valida, encaixa rotas, etc)
```

---

## ✅ CHECKLIST ANTES DE ENTREGAR

- [ ] `como-funciona-completo.html` com 4 seções + cores das personas
- [ ] 5 arquivos `onboarding-[persona].html` com vídeos e imagens
- [ ] `/hall-shows.html` conectado à API real (não hardcoded)
- [ ] 3 abas (Motor 1, Motor 2, Shows Confirmados) funcionando
- [ ] Cores corretas em cada persona
- [ ] Logo Lei Rouanet + Logo Governo visíveis
- [ ] LIBRAS implementado (vídeos com intérprete OU widget)
- [ ] Audiovisual implementado
- [ ] Mobile responsivo (320px → 4K)
- [ ] Performance (< 3s load, Lighthouse 90+)

---

## 🚀 QUANDO PRONTO

1. Commit final:
```bash
git commit -m "feat: ShowLink layout + onboarding + 5 personas

- Landing page with hero video
- Pre-signup onboarding (como-funciona-completo.html)
- 5 personas with dedicated onboarding flows
- Motor 1 (Rateio) + Motor 2 (Validação) visible
- Real-time progress bars
- Lei Rouanet + Government logos
- LIBRAS + Audiovisual accessibility
- All personas with correct colors (#FF3D7F, #10B981, #8B5CF6, #35A7FF, #FF8A34)
- Backend API integration
"
```

2. Push pra produção

---

## 📞 DÚVIDAS

| Pergunta | Resposta |
|----------|----------|
| Como Motor 1 funciona? | `/MOTORES.md` — 5 min |
| Qual é a cor do Artista? | #10B981 (em `/css/base.css`) |
| Qual vídeo usar onde? | `/videos/` — organize por pasta |
| Rubens precisa de mais? | Liga pro Luciano direto |

---

**Tudo pronto. Boa sorte, Rubens! 🚀**
