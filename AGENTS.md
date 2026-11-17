# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL**.

| | |
|---|---|
| Tema | Construye operaciones CRUD en Bases de Datos SQL y NoSQL |
| Nivel | trainee-l2 |
| Chapter | Frontend |
| Especialidad | Node |
| Stack | TypeScript / NestJS 10 |
| Patron arquitectonico | capas estándar (controller-service-repository) |
| Tiempo estimado | 8 horas |

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `api` | `api/` | practice | server | Node | DynamoDB, MongoDB |
| `client` | `client/` | chapter, support | client | React | - |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB, MongoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `cd api && npm install --no-audit --no-fund && npm run build` — componente `api` (practice).
3. `cd client && npm install --no-audit --no-fund && npm run build` — componente `client` (chapter, support).

### Contratos entre componentes

- `api` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`

## Herramientas

- **IntelliJ IDEA Debugger**: Depura el componente con la run-config de IntelliJ IDEA (menu Run, carpeta .run/): pone breakpoints donde implementas el reto y arranca en modo debug.

## Receta del stack

Esqueleto obligatorio:

- `package.json y tsconfig.json en la raiz`
- `src/main.ts como bootstrap`
- `modulo raiz de Nest`
- `src/domain con entidades y puertos`
- `src/application con casos de uso`
- `src/infrastructure con repositorios y controller`

Trampas conocidas:

- No inventes versiones de npm. Usa rango con caret (`^5.7.2`) sobre una version que exista, o deja que el paquete la resuelva. Una version inexistente (ej. `@types/react-router-dom@6.19.0`) hace fallar `npm install` con ETARGET y el proyecto no instala.
- Los paquetes `@types/*` solo hacen falta para librerias que no traen sus propios tipos. React Router, NestJS y Prisma ya los traen: agregar `@types/` de esos rompe o sobra.
- El `tsconfig.json` es obligatorio: sin el, `tsc` no sabe que compilar.

Dependencias:

- @aws-sdk/client-dynamodb 3.1170.0
- @aws-sdk/lib-dynamodb 3.1170.0
- @nestjs/common 10.4.22
- @nestjs/config 4.0.4
- @nestjs/core 10.4.22
- @nestjs/mongoose 11.0.4
- @nestjs/platform-express 10.4.22
- class-validator 0.15.1
- mongoose 8.24.10
- reflect-metadata 0.2.2
- rxjs 7.8.2
- uuid 14.0.3
- @types/express 4.17.25
- @types/node 22.20.5
- typescript 5.7.3

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Segui el orden de arranque del mapa de componentes (infraestructura local primero) y corre `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q` desde la raiz: mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Configuración del Entorno y Conexión a la Base de Datos**: Proyecto configurado con TypeScript y React, y conexiones a DynamoDB y MongoDB establecidas y verificadas.
- **Fase 2 — Implementación de Operaciones CRUD en DynamoDB**: Operaciones CRUD implementadas y verificadas en DynamoDB.
- **Fase 3 — Implementación de Operaciones CRUD en MongoDB**: Operaciones CRUD implementadas y verificadas en MongoDB.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `api/src/infrastructure/dynamodb/dynamodb.repository.ts` — La fase "Implementación de Operaciones CRUD en DynamoDB" se implementa aqui: este archivo es el ejercicio.
- [ ] `api/src/infrastructure/mongodb/mongodb.repository.ts` — La practica elegida no tenia ningun cuerpo que implementar: este archivo alcanzable, con cuerpos, pasa a ser el ejercicio.
- [ ] `client/src/hooks/useProducts.ts` — La fase "Implementación de Operaciones CRUD en DynamoDB" se implementa aqui: este archivo es el ejercicio.
- [ ] `client/src/components/ProductTable.tsx` — La fase "Implementación de Operaciones CRUD en MongoDB" se implementa aqui: este archivo es el ejercicio.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (29)

- `api/src/app.module.ts`
- `api/src/main.ts`
- `api/package.json`
- `api/tsconfig.json`
- `api/src/domain/product.entity.ts`
- `api/src/infrastructure/dynamodb/dynamodb.module.ts`
- `api/src/infrastructure/dynamodb/dynamodb.repository.ts`
- `api/src/infrastructure/mongodb/mongodb.module.ts`
- `api/src/infrastructure/mongodb/mongodb.repository.ts`
- `api/src/infrastructure/mongodb/schemas/product.schema.ts`
- `api/src/infrastructure/dto/create-product.dto.ts`
- `api/src/infrastructure/dto/update-product.dto.ts`
- `client/src/main.tsx`
- `client/package.json`
- `client/tsconfig.json`
- `client/vite.config.ts`
- `client/index.html`
- `client/src/vite-env.d.ts`
- `client/src/components/ProductTable.tsx`
- `client/src/components/ProductForm.tsx`
- `client/src/hooks/useProducts.ts`
- `client/src/services/api.service.ts`
- `client/src/types/product.ts`
- `client/src/pages/Home.tsx`
- `.run/api.run.xml`
- `docker-compose.yml`
- `infra-local/README.md`
- `infra-local/dynamodb/create-tables.sh`
- `infra-local/mongo/init.js`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `api` (presente)
- `api/src/domain` (presente)
- `api/src/application` (ausente)
- `api/src/infrastructure/dynamodb` (presente)
- `api/src/infrastructure/mongodb` (presente)
- `api/src/infrastructure/dto` (presente)
- `api/src/common` (ausente)
- `client` (presente)
- `client/src/components` (presente)
- `client/src/hooks` (presente)
- `client/src/services` (presente)
- `client/src/types` (presente)
- `client/src/pages` (presente)

## Verificacion

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- Cada componente vive en su carpeta: instala y compila dentro de ella, y no muevas archivos entre componentes.
- Respeta los contratos entre componentes (endpoints, topics) tal como estan declarados en el mapa de componentes.
- El patron es **capas estándar (controller-service-repository)**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee L2
- Brecha que el reto ataca: Construye operaciones básicas, como crear, obtener, actualizar y eliminar (CRUD), en bases de datos SQL o NoSQL utilizando definición y manipulación de datos (DDL y DML)

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
