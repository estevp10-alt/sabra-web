# execution/python — Python Scripts

Directorio para scripts Python deterministas e idempotentes.

## Reglas
- Siempre idempotentes (ejecutar N veces = mismo resultado)
- Leer credenciales SÓLO desde `.env` con `python-dotenv`
- Outputs intermedios → `../../.tmp/`
- Outputs finales → entregable definido en la directiva
