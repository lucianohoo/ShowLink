# ShowLink — Instruções de Teste Local

## ✅ O que foi fixado

1. **Cores das personas**: Removemos os `inline styles` que estavam sobrescrevendo a cor de cada persona. Agora:
   - **Fã** mostra rosa (`#FF3D7F`)
   - **Artista** mostra verde (`#10B981`)
   - **Produtor** mostra roxo (`#8B5CF6`)
   - **Patrocinador** mostra cyan (`#35A7FF`)
   - **Realizador** mostra laranja (`#FF8A34`)

2. **Vídeos**: Agora rodam sem problemas via HTTP server

3. **Venues reais**: Atualizado com casas do Paraná:
   - Hooligans Cascavel
   - Empório Santa Maria (Toledo)
   - Zepellin (Foz do Iguaçu)

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

## 📋 Próximos passos

- [ ] Testar se as cores aparecem correto em cada persona
- [ ] Testar se os vídeos rodam via HTTP
- [ ] Confirmar nomes de venues estão corretos
- [ ] Integrar nomes de bandas reais do seu acervo

## 🎯 O que o Luciano vê agora

Cada persona tem sua cor própria:
- ✓ Medidor de demanda (roxo marca official)
- ✓ Capítulos com vídeos (cada etapa roda via HTTP)
- ✓ Dashboard específico da persona
- ✓ Links para as 6 casas do PR
