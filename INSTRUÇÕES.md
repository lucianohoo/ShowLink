# ShowLink — Instruções de Teste Local

## ✅ Estado Atual

### Cores das Personas (FIXADAS)
Cada persona tem sua cor própria:
- **Fã** → Rosa (`#FF3D7F`) · Bring (demanda)
- **Artista** → Verde (`#10B981`) · Open (território)
- **Produtor** → Roxo (`#8B5CF6`) · Fit (rotas)
- **Patrocinador** → Cyan (`#35A7FF`) · Signal (investimento)
- **Realizador** → Laranja (`#FF8A34`) · Validate (curadoria)

### Data Real Integrada
**6 Casas (Realizadores):**
- Hooligans Cascavel
- Empório Santa Maria (Toledo)
- MPB Bar (Maringá)
- Zepellin (Foz do Iguaçu)
- Crossroad (Curitiba)
- Tork (Curitiba)

**20+ Bandas Reais do Catálogo PR** (mapeadas por casa):
- Rock4Roots, Plutão Já Foi Planeta, Electricmob (Hooligans)
- VICKA, Vanguart (MPB Bar)
- The Mônic, West Valmets, Anacrônica (Crossroad)
- Metallica Cover, Terra Celta, Cracker Blues (Tork)
- Jam Session (Zepellin)
- Acústicos & Valvulados, Cometz Tributo Queen (Empório)
- ... e mais

### Vídeos
Funcionam via HTTP server (file:// protocol tem restrições de navegador)

## 🚀 Como testar

### Opção 1: Python HTTP Server (RECOMENDADO)

**Mac/Linux:**
```bash
cd /caminho/para/showlink-repo
chmod +x serve.sh
./serve.sh
```

**Windows:**
```bash
cd C:\caminho\para\showlink-repo
serve.bat
```

Então abra no navegador:
- **Home**: http://localhost:8000
- **Fã**: http://localhost:8000/modo-fa.html
- **Artista**: http://localhost:8000/modo-artista.html
- **Produtor**: http://localhost:8000/modo-produtor.html
- **Patrocinador**: http://localhost:8000/modo-patrocinador.html
- **Realizador**: http://localhost:8000/modo-realizador.html

### Opção 2: File Manager + File Protocol

Se abrir os arquivos `.html` diretamente no navegador via file manager:
- ❌ Vídeos **NÃO** funcionam (restrição de segurança do navegador)
- ✅ Cores e layout funcionam normalmente

## 🏗️ Arquitetura

**5 Personas, cada uma com instrumento diferente:**

| Persona | Cor | Instrumento | Dashboard |
|---------|-----|-------------|-----------|
| **Fã** | Rosa | Votos/Reservas | Bandas seguidas, pontos |
| **Artista** | Verde | Página completa | Demanda por cidade, godmother earnings |
| **Produtor** | Roxo | Ficha técnica + rotas | Bandas representadas, encaixe |
| **Patrocinador** | Cyan | Match % | Artistas descobertos, sinalizações |
| **Realizador** | Laranja | Curadoria | Bandas validadas, transmissão, repasses |

**Casa (Realizador) valida Banda** → Banda aparece como local em shows dessa região → Fãs/Produtores/Patrocinadores veem como opção.

## 🎯 O que Testar Agora

- [ ] Cores aparecem corretas (fundo roxo/rosa/verde/cyan/laranja nos chapters)
- [ ] Vídeos rodam quando servidos via HTTP (não via file://)
- [ ] Nomes de casas e bandas aparecem corretamente
- [ ] Casa/banda relationships estão claras ("Validada por Hooligans")
- [ ] Links entre páginas funcionam

## 📚 Próximas Features

Quando implementar em produção:
- [ ] Hall de Bandas por região (shows → bandas locais → bandas nacionais)
- [ ] Mapear mais bandas reais aos preços/horários
- [ ] Sistema de reservas (fãs)
- [ ] API de integração com banco de bandas NEO Vision
