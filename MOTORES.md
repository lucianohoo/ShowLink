# 🎸 ShowLink — Os Dois Motores Visíveis

**Status**: ✅ Implementados e visíveis em `/hall-shows.html`  
**Acesso**: Requer login (qualquer persona de demo)  
**Data**: Agosto 2026

---

## 📍 Onde ver os motores

Após fazer login em qualquer persona, navegue para **Baladas em Cascavel** (ou hall-shows.html).

Você verá 3 abas:
1. **Motor 1: Rateio** — Bandas em trânsito com datas livres
2. **Motor 2: Validação** — Campanhas de pré-venda com progress bars
3. **Shows Confirmados** — Resultado dos dois motores em ação

---

## Motor 1 — Rateio por Proximidade

### O quê?
Quando uma banda é contratada em uma cidade, as casas vizinhas (300km de raio) recebem um alerta mostrando as datas livres dela. Podem se organizar para dividir cachê + transporte.

### Exemplo visível
```
Acústicos & Valvulados
💚 PASSAGEM CONFIRMADA

🔴 Maringá · 24 ago (contratado)
📍 Cascavel · 25 ago (LIVRE)
🟡 Foz · 26 ago (LIVRE)

Cachê total: R$ 35k → ÷3 casas = R$ 11.7k
[Botão] Propor divisão
```

### Efeito
- Banda barata fica ainda mais barata por casa
- Viagem é dividida entre múltiplas casas
- Produtor encaixa rotas com 3+ pontos de parada
- Casa que validou a banda ganha repasse de cada show

### Personas que atuam
- **Produtor**: Vê as rotas, propõe encaixes
- **Realizador (Casa)**: Vê bandas em trânsito, participa do rateio
- **Artista**: Vê quantas casas quer participar de sua rota

---

## Motor 2 — Validação Antecipada

### O quê?
Banda quer fazer turnê mas não tem garantia. Inicia campanha de pré-venda em múltiplas cidades. Se 3 cidades atingem 400 ingressos, os 3 shows são confirmados. Se não atinge, ninguém é cobrado.

### Exemplo visível
```
Plutão Já Foi Planeta
🎯 CAMPANHA ATIVA
Rock Alt · Meta: 400 ingressos por cidade · Valor: R$ 80

📍 Cascavel
389 / 400 ingressos (97,25% · Faltam 11)

📍 Toledo
287 / 400 ingressos (71,75% · Faltam 113)

📍 Foz do Iguaçu
156 / 400 ingressos (39% · Faltam 244)

[Botão] Pré-comprar em Cascavel
Cobrança suspensa até validação
```

### Efeito
- Risco da casa é eliminado (só paga se validar)
- Demanda comprovada **antes** da banda sair
- Primeira cidade a atingir 400 → **sábado** (melhor noite)
- Segunda cidade → **sexta**
- Terceira cidade → **domingo** ou **quinta**

### Personas que atuam
- **Fã**: Vê campanhas que podem acontecer perto, pré-compra
- **Artista**: Vê quantas cidades o estão pedindo em tempo real
- **Produtor**: Acompanha validação, ajuda a publicizar
- **Patrocinador**: Vê campanhas e faz match % de marca
- **Realizador**: Vê campanhas da sua região, participa com pré-venda

---

## Os Dois Juntos — Fluxo Real

```
PASSO 1: Motor 1 Ativa
├─ Prefeitura contrata Vanguart em Toledo (corporativo)
├─ ShowLink alerta Cascavel e Foz: "Vanguart disponível"
└─ Casas veem que compartilhar é possível

PASSO 2: Motor 2 Ativa
├─ Mas a banda também quer crescer — inicia campanha
├─ Fãs de 3 cidades começam a pré-comprar
├─ Primeira (Cascavel) atinge 400 → confirmado, sábado
├─ Segunda (Maringá) atinge 400 → confirmado, sexta
└─ Terceira (Foz) não atinge → não cobra ninguém, não acontece

PASSO 3: Resultado
├─ 2 shows confirmados (Cascavel + Maringá)
├─ Vanguart viaja em rota (rateio pode activar ainda)
├─ Fãs que pré-compraram em Cascavel são cobrados
├─ Fãs em Foz não são cobrados (meta não atingida)
└─ Casas que validaram ganham repasse de cada show
```

---

## Parâmetros Configuráveis (por Campanha)

| Parâmetro | Padrão | Significado |
|-----------|--------|------------|
| Meta ingressos | 400 | Quantos ingressos precisam para validar |
| Valor ingresso | Configurável | Preço individual (ex: R$ 80) |
| Nº cidades | 3–5 | Quantas cidades disputam |
| Primeira ⭐ | Sábado | Melhor dia da semana |
| Segunda | Sexta | Segundo melhor |
| Terceira | Domingo/Quinta | Dia mais fraco |

---

## Como Explicar para Investidores

### O Problema
"A banda cara não toca perto porque nenhuma casa de 600 lugares banca R$ 40k sozinha."

### A Solução (Motor 1 + Motor 2)
1. **Motor 1**: Se a banda já está na região (corporativo/prefeitura), mostre para outras casas dividirem custo.
2. **Motor 2**: Se ela quer crescer, deixe fãs de múltiplas cidades validarem **antes** da band comprometer.

### O Resultado
"Agora a banda toca porque a demanda está comprovada, e o custo é dividido. A casa reduz risco a zero."

---

## Próximas Iterações

- [ ] Integração com Cloudfy (dados reais de frequência)
- [ ] Algoritmo de "match" entre banda + regional demand
- [ ] Notificações em tempo real de progresso de campanha
- [ ] Pagamento com cartão suspenso até validação
- [ ] Repasse automático entre casas (pós-show)
- [ ] Análise de ticket médio por persona/banda
- [ ] Mapa interativo de demanda por região

---

## Código Relevante

- **HTML**: `/hall-shows.html` — Abas e cards dos motores
- **Autenticação**: `/js/auth-check.js` — Proteção de rotas
- **Login**: `/auth.html` — Registra usuário e persona
- **Landing**: `/index.html` — Explicação do produto

---

## Quick Start

```bash
cd /root/showlink-repo
./serve.sh
# Abra http://localhost:8000
# Clique em "Entrar"
# Escolha persona (ex: "Demo Fã")
# Vá para "Baladas em Cascavel"
# Explore os 3 abas
```

---

**Pronto para apresentar aos investidores. 🚀**
