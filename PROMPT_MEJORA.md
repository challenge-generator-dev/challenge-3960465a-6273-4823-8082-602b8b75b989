# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `api/src/infrastructure/dynamodb/dynamodb.repository.ts` — La fase "Implementación de Operaciones CRUD en DynamoDB" se implementa aqui: este archivo es el ejercicio.
- `api/src/infrastructure/mongodb/mongodb.repository.ts` — La practica elegida no tenia ningun cuerpo que implementar: este archivo alcanzable, con cuerpos, pasa a ser el ejercicio.
- `client/src/hooks/useProducts.ts` — La fase "Implementación de Operaciones CRUD en DynamoDB" se implementa aqui: este archivo es el ejercicio.
- `client/src/components/ProductTable.tsx` — La fase "Implementación de Operaciones CRUD en MongoDB" se implementa aqui: este archivo es el ejercicio.

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

## Como saber que terminaste

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee L2

### Brecha de conocimiento
Construye operaciones básicas, como crear, obtener, actualizar y eliminar (CRUD), en bases de datos SQL o NoSQL utilizando definición y manipulación de datos (DDL y DML)

### Reto
- Tema: Construye operaciones CRUD en Bases de Datos SQL y NoSQL
- Seniority: trainee-l2
- Tipo: practical
- Título: Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del Entorno y Conexión a la Base de Datos — objetivo: Configurar el entorno de desarrollo y establecer la conexión a DynamoDB y MongoDB. — entregable (NO resolver): Proyecto configurado con TypeScript y React, y conexiones a DynamoDB y MongoDB establecidas y verificadas.
- Fase 2: Implementación de Operaciones CRUD en DynamoDB — objetivo: Implementar operaciones CRUD (crear, leer, actualizar, eliminar) en DynamoDB. — entregable (NO resolver): Operaciones CRUD implementadas y verificadas en DynamoDB.
- Fase 3: Implementación de Operaciones CRUD en MongoDB — objetivo: Implementar operaciones CRUD (crear, leer, actualizar, eliminar) en MongoDB. — entregable (NO resolver): Operaciones CRUD implementadas y verificadas en MongoDB.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: api/src/app.module.ts ===
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DynamoDBModule } from './infrastructure/dynamodb/dynamodb.module';
import { MongoDBModule as MongodbModule } from './infrastructure/mongodb/mongodb.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DynamoDBModule,
    MongodbModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// === ARCHIVO: api/src/main.ts ===
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Product API')
    .setDescription('API for product management')
    .setVersion('1.0')
    .addTag('products')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

// === ARCHIVO: api/package.json ===
{
  "name": "reto-nest",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json"
  },
  "dependencies": {
    "@aws-sdk/client-dynamodb": "3.1170.0",
    "@aws-sdk/lib-dynamodb": "3.1170.0",
    "@nestjs/common": "10.4.22",
    "@nestjs/config": "4.0.4",
    "@nestjs/core": "10.4.22",
    "@nestjs/mongoose": "11.0.4",
    "@nestjs/platform-express": "10.4.22",
    "@nestjs/swagger": "8.1.1",
    "class-transformer": "0.5.1",
    "class-validator": "0.15.1",
    "mongoose": "8.24.10",
    "reflect-metadata": "0.2.2",
    "rxjs": "7.8.2",
    "uuid": "14.0.3"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3"
  }
}

// === ARCHIVO: api/tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}

// === ARCHIVO: api/src/domain/product.entity.ts ===
import { v4 as uuidv4 } from 'uuid';

export class Product {
  readonly id: string;
  name: string;
  price: number;
  category: string;

  constructor(name: string, price: number, category: string, id?: string) {
    if (!name || name.trim().length === 0) {
      throw new Error('Product name is required');
    }
    if (price <= 0) {
      throw new Error('Product price must be greater than zero');
    }
    if (!category || category.trim().length === 0) {
      throw new Error('Product category is required');
    }

    this.id = id || uuidv4();
    this.name = name;
    this.price = price;
    this.category = category;
  }

  update(name?: string, price?: number, category?: string): void {
    if (name !== undefined) {
      if (!name || name.trim().length === 0) {
        throw new Error('Product name is required');
      }
      this.name = name;
    }
    if (price !== undefined) {
      if (price <= 0) {
        throw new Error('Product price must be greater than zero');
      }
      this.price = price;
    }
    if (category !== undefined) {
      if (!category || category.trim().length === 0) {
        throw new Error('Product category is required');
      }
      this.category = category;
    }
  }
}

// === ARCHIVO: api/src/infrastructure/dynamodb/dynamodb.module.ts ===
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { DynamoDBRepository } from './dynamodb.repository';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'DYNAMODB_CLIENT',
      useFactory: (configService: ConfigService) => {
        throw new Error('TODO(reto): provide');
      },
      inject: [ConfigService],
    },
    {
      provide: 'PRODUCT_TABLE',
      useValue: 'Products',
    },
    {
      provide: DynamoDBRepository,
      useFactory: (dynamoDBClient: DynamoDBDocumentClient, tableName: string) => {
        throw new Error('TODO(reto): provide');
      },
      inject: ['DYNAMODB_CLIENT', 'PRODUCT_TABLE'],
    },
  ],
  exports: [DynamoDBRepository],
})
export class DynamoDBModule {}

// === ARCHIVO: api/src/infrastructure/dynamodb/dynamodb.repository.ts ===
import { Injectable } from '@nestjs/common';
import { DynamoDBDocumentClient, PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { Product } from '../../domain/product.entity';

@Injectable()
export class DynamoDBRepository {
  constructor(
    private readonly dynamoDBClient: DynamoDBDocumentClient,
    private readonly tableName: string,
  ) {}

  async create(product: Product): Promise<Product> {
    // TODO(reto): Implementar la lógica para crear un producto en DynamoDB
    throw new Error('Method not implemented');
  }

  async findAll(): Promise<Product[]> {
    // TODO(reto): Implementar la lógica para obtener todos los productos de DynamoDB
    throw new Error('Method not implemented');
  }

  async findById(id: string): Promise<Product | null> {
    // TODO(reto): Implementar la lógica para obtener un producto por ID de DynamoDB
    throw new Error('Method not implemented');
  }

  async update(id: string, product: Partial<Product>): Promise<Product> {
    // TODO(reto): Implementar la lógica para actualizar un producto en DynamoDB
    throw new Error('Method not implemented');
  }

  async delete(id: string): Promise<void> {
    // TODO(reto): Implementar la lógica para eliminar un producto de DynamoDB
    throw new Error('Method not implemented');
  }
}

// === ARCHIVO: api/src/infrastructure/mongodb/mongodb.module.ts ===
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDBRepository } from './mongodb.repository';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [MongoDBRepository],
  exports: [MongoDBRepository],
})
export class MongoDBModule {}

// === ARCHIVO: api/src/infrastructure/mongodb/mongodb.repository.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../../domain/product.entity';
import { ProductDocument } from './schemas/product.schema';

@Injectable()
export class MongoDBRepository {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async create(product: Product): Promise<Product> {
    throw new Error('TODO(reto): create');
  }

  async findAll(): Promise<Product[]> {
    throw new Error('TODO(reto): findAll');
  }

  async findById(id: string): Promise<Product | null> {
    throw new Error('TODO(reto): findById');
  }

  async update(id: string, product: Partial<Product>): Promise<Product> {
    throw new Error('TODO(reto): update');
  }

  async delete(id: string): Promise<void> {
    throw new Error('TODO(reto): delete');
  }
}

// === ARCHIVO: api/src/infrastructure/mongodb/schemas/product.schema.ts ===
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, min: 0 })
  price: number;

  @Prop({ required: true })
  category: string;
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);

// === ARCHIVO: api/src/infrastructure/dto/create-product.dto.ts ===
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsPositive()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly category: string;
}

// === ARCHIVO: api/src/infrastructure/dto/update-product.dto.ts ===
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  readonly price?: number;

  @IsString()
  @IsOptional()
  readonly category?: string;
}

// === ARCHIVO: client/src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './pages/Home';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// === ARCHIVO: client/package.json ===
{
  "name": "reto-react",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc --noEmit && vite build"
  },
  "dependencies": {
    "@mui/icons-material": "5.18.0",
    "@mui/material": "5.18.0",
    "@tanstack/react-query": "5.107.1",
    "axios": "1.21.1",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-router-dom": "7.18.5"
  },
  "devDependencies": {
    "@types/react": "18.3.31",
    "@types/react-dom": "18.3.7",
    "@vitejs/plugin-react": "4.7.0",
    "typescript": "5.7.3",
    "vite": "5.4.21"
  }
}

// === ARCHIVO: client/tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.ts",
    "src/**/*.spec.tsx"
  ]
}

// === ARCHIVO: client/vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()] });

// === ARCHIVO: client/index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reto</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: client/src/vite-env.d.ts ===
/// <reference types="vite/client" />

// === ARCHIVO: client/src/components/ProductTable.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Product } from '../types/product';

// TODO(reto): Implementar la lógica para manejar la edición y eliminación de productos
// Este componente debe:
// 1. Recibir la lista de productos como prop
// 2. Mostrar cada producto en una fila de la tabla
// 3. Emitir eventos cuando se solicite editar o eliminar un producto
// 4. Manejar el estado de carga mientras se realizan las operaciones

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
  isLoading: boolean;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onEdit, onDelete, isLoading }) => {
  throw new Error('TODO(reto): anonymous');
};

export default ProductTable;

// === ARCHIVO: client/src/components/ProductForm.tsx ===
import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';
import { Product, CreateProductDto, UpdateProductDto } from '../types/product';

interface ProductFormProps {
  product?: Product;
  onSubmit: (productData: CreateProductDto | UpdateProductDto) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit, onCancel, isLoading }) => {
  const [formData, setFormData] = useState<CreateProductDto>({
    name: '',
    price: 0,
    category: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    price: '',
    category: '',
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        category: product.category,
      });
    } else {
      setFormData({
        name: '',
        price: 0,
        category: '',
      });
    }
  }, [product]);

  const validate = (): boolean => {
    let valid = true;
    const newErrors = { name: '', price: '', category: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
      valid = false;
    }

    if (formData.price <= 0) {
      newErrors.price = 'El precio debe ser mayor que 0';
      valid = false;
    }

    if (!formData.category.trim()) {
      newErrors.category = 'La categoría es requerida';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await onSubmit(formData);
      setFormData({ name: '', price: 0, category: '' });
    } catch (error) {
      console.error('Error al guardar el producto:', error);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 500, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        {product ? 'Editar Producto' : 'Crear Producto'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          margin="normal"
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          disabled={isLoading}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Precio"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          error={!!errors.price}
          helperText={errors.price}
          disabled={isLoading}
          inputProps={{ step: '0.01', min: '0' }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Categoría"
          name="category"
          value={formData.category}
          onChange={handleChange}
          error={!!errors.category}
          helperText={errors.category}
          disabled={isLoading}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button
            variant="outlined"
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            {isLoading ? 'Guardando...' : product ? 'Actualizar' : 'Crear'}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductForm;

// === ARCHIVO: client/src/hooks/useProducts.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState } from 'react';
import { Product, CreateProductDto, UpdateProductDto } from '../types/product';
import { apiService } from '../services/api.service';

// TODO(reto): Implementar la lógica para manejar productos usando React Query
// Este hook debe:
// 1. Utilizar useQuery para obtener la lista de productos
// 2. Utilizar useMutation para crear, actualizar y eliminar productos
// 3. Manejar los estados de loading, error y success
// 4. Proveer funciones para crear, editar y eliminar productos

export const useProducts = () => {
  throw new Error('TODO(reto): useProducts');
};

// === ARCHIVO: client/src/services/api.service.ts ===
import axios, { AxiosInstance, AxiosError } from 'axios';
import { Product, CreateProductDto, UpdateProductDto } from '../types/product';

class ApiService {
  private client: AxiosInstance;

  constructor(baseURL: string = 'http://localhost:3000') {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async createProduct(productData: CreateProductDto): Promise<Product> {
    try {
      const response = await this.client.post<Product>('/products', productData);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  async getProducts(): Promise<Product[]> {
    try {
      const response = await this.client.get<Product[]>('/products');
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  async getProductById(id: string): Promise<Product> {
    try {
      const response = await this.client.get<Product>(`/products/${id}`);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  async updateProduct(id: string, productData: UpdateProductDto): Promise<Product> {
    try {
      const response = await this.client.put<Product>(`/products/${id}`, productData);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  async deleteProduct(id: string): Promise<void> {
    try {
      await this.client.delete(`/products/${id}`);
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  private handleError(error: AxiosError): void {
    if (error.response) {
      console.error('Error en la respuesta:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Error en la solicitud:', error.request);
    } else {
      console.error('Error:', error.message);
    }
  }
}

export const apiService = new ApiService();

// === ARCHIVO: client/src/types/product.ts ===
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

export interface CreateProductDto {
  name: string;
  price: number;
  category: string;
}

export interface UpdateProductDto {
  name?: string;
  price?: number;
  category?: string;
}

// === ARCHIVO: client/src/pages/Home.tsx ===
import { useState, useCallback } from 'react';
import { Container, Typography, Box, Alert, Snackbar } from '@mui/material';
import { Product, CreateProductDto, UpdateProductDto } from '../types/product';
import ProductTable from '../components/ProductTable';
import ProductForm from '../components/ProductForm';
import { useProducts } from '../hooks/useProducts';

export function Home() {
  const [editingProduct, setEditingProduct] = useState<Product | undefined>(undefined);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const {
    products,
    isLoading,
    createProduct,
    updateProduct,
    deleteProduct,
    refetch,
  } = useProducts();

  const handleCreate = useCallback(async (productData: CreateProductDto | UpdateProductDto) => {
    try {
      await createProduct(productData as CreateProductDto);
      setSnackbar({ open: true, message: 'Producto creado exitosamente', severity: 'success' });
      refetch();
      setEditingProduct(undefined);
    } catch {
      setSnackbar({ open: true, message: 'Error al crear el producto', severity: 'error' });
    }
  }, [createProduct, refetch]);

  const handleUpdate = useCallback(async (productData: CreateProductDto | UpdateProductDto) => {
    if (!editingProduct) return;
    try {
      await updateProduct(editingProduct.id, productData as UpdateProductDto);
      setSnackbar({ open: true, message: 'Producto actualizado exitosamente', severity: 'success' });
      refetch();
      setEditingProduct(undefined);
    } catch {
      setSnackbar({ open: true, message: 'Error al actualizar el producto', severity: 'error' });
    }
  }, [editingProduct, updateProduct, refetch]);

  const handleEdit = useCallback((product: Product) => {
    setEditingProduct(product);
  }, []);

  const handleDelete = useCallback(async (id: string) => {
    try {
      await deleteProduct(id);
      setSnackbar({ open: true, message: 'Producto eliminado exitosamente', severity: 'success' });
      refetch();
      if (editingProduct?.id === id) {
        setEditingProduct(undefined);
      }
    } catch {
      setSnackbar({ open: true, message: 'Error al eliminar el producto', severity: 'error' });
    }
  }, [deleteProduct, refetch, editingProduct]);

  const handleCancelEdit = useCallback(() => {
    setEditingProduct(undefined);
  }, []);

  const handleCloseSnackbar = useCallback(() => {
    setSnackbar(prev => ({ ...prev, open: false }));
  }, []);

  const handleSubmit = useCallback(async (productData: CreateProductDto | UpdateProductDto) => {
    if (editingProduct) {
      await handleUpdate(productData);
    } else {
      await handleCreate(productData);
    }
  }, [editingProduct, handleUpdate, handleCreate]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Gestión de Productos
      </Typography>

      <Box sx={{ mb: 4 }}>
        <ProductForm
          product={editingProduct}
          onSubmit={handleSubmit}
          onCancel={handleCancelEdit}
          isLoading={isLoading}
        />
      </Box>

      <Box>
        <ProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={isLoading}
        />
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

// === ARCHIVO: .run/api.run.xml ===
<component name="ProjectRunConfigurationManager">
  <configuration default="false" name="api" type="js.build_tools.npm" nameIsGenerated="false">
    <package-json value="$PROJECT_DIR$/api/package.json" />
    <command value="run" />
    <scripts>
      <script value="start" />
    </scripts>
    <node-interpreter value="project" />
    <envs>
      <env name="DYNAMODB_ENDPOINT" value="http://localhost:8000" />
      <env name="AWS_REGION" value="us-east-1" />
      <env name="AWS_ACCESS_KEY_ID" value="local" />
      <env name="AWS_SECRET_ACCESS_KEY" value="local" />
      <env name="MONGODB_URI" value="mongodb://localhost:27017/app" />
    </envs>
    <method v="2" />
  </configuration>
</component>


// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  dynamodb-local:
    image: "amazon/dynamodb-local:2.5.2"
    command: ["-jar","DynamoDBLocal.jar","-sharedDb","-inMemory"]
    ports:
      - "127.0.0.1:8000:8000"
    healthcheck:
      test: ["CMD-SHELL","bash -c ':> /dev/tcp/127.0.0.1/8000' || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 5s
  mongo:
    image: "mongo:7.0.14"
    ports:
      - "127.0.0.1:27017:27017"
    environment:
      MONGO_INITDB_DATABASE: "app"
    volumes:
      - "./infra-local/mongo/init.js:/docker-entrypoint-initdb.d/init.js:ro"
    healthcheck:
      test: ["CMD","mongosh","--quiet","--eval","db.adminCommand('ping').ok"]
      interval: 10s
      timeout: 10s
      retries: 10
      start_period: 20s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| DynamoDB Local | `amazon/dynamodb-local:2.5.2` | 8000 |
| MongoDB | `mongo:7.0.14` | 27017 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.


// === ARCHIVO: infra-local/dynamodb/create-tables.sh ===
#!/usr/bin/env bash
# Crea las tablas en DynamoDB Local (idempotente). Credenciales dummy: DynamoDB Local no valida firmas.
set -euo pipefail

export AWS_ACCESS_KEY_ID=local
export AWS_SECRET_ACCESS_KEY=local
export AWS_REGION=us-east-1
ENDPOINT="${DYNAMODB_ENDPOINT:-http://localhost:8000}"

create_table() {
  local name="$1" pk="$2" sk="${3:-}"
  if aws dynamodb describe-table --table-name "$name" --endpoint-url "$ENDPOINT" >/dev/null 2>&1; then
    echo "Tabla $name ya existe"
    return
  fi
  local attrs="AttributeName=$pk,AttributeType=S"
  local keys="AttributeName=$pk,KeyType=HASH"
  if [ -n "$sk" ]; then
    attrs="$attrs AttributeName=$sk,AttributeType=S"
    keys="$keys AttributeName=$sk,KeyType=RANGE"
  fi
  # shellcheck disable=SC2086
  aws dynamodb create-table --table-name "$name" --attribute-definitions $attrs --key-schema $keys \
    --billing-mode PAY_PER_REQUEST --endpoint-url "$ENDPOINT" >/dev/null
  echo "Tabla $name creada"
}

create_table "app-items" "id"


// === ARCHIVO: infra-local/mongo/init.js ===
// Se ejecuta una sola vez al crear el volumen de MongoDB (docker-entrypoint-initdb.d).
db = db.getSiblingDB('app');
db.createCollection('items');
db.items.createIndex({ name: 1 });

```
