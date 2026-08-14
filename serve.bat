@echo off
REM Simple HTTP server para ShowLink (Windows)
cd /d "%~dp0"
echo ShowLink server iniciado
echo Abra em seu navegador: http://localhost:8000
echo.
echo Ou acesse as pessoas:
echo   - Fa: http://localhost:8000/modo-fa.html
echo   - Artista: http://localhost:8000/modo-artista.html
echo   - Produtor: http://localhost:8000/modo-produtor.html
echo   - Patrocinador: http://localhost:8000/modo-patrocinador.html
echo   - Realizador: http://localhost:8000/modo-realizador.html
echo.
echo Pressione Ctrl+C para parar
python -m http.server 8000
