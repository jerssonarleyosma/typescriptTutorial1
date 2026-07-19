# Aprendiendo TypeScript

## Objetivo del repositorio

Este repositorio reúne ejercicios y apuntes de mi proceso de aprendizaje de
TypeScript.

TypeScript agrega tipado estático y otras herramientas sobre JavaScript. Como
los navegadores y demás entornos de ejecución trabajan con JavaScript, durante
el desarrollo los archivos `.ts` se comprueban y se transpilan a archivos
`.js`.

El código fuente TypeScript se encuentra en `src` y, de acuerdo con la
configuración actual, los archivos generados se guardan en `dist`.

## Instalación y uso del proyecto

Después de clonar o descargar el repositorio, un nuevo desarrollador debe
instalar sus dependencias con:

```bash
npm install
```

Este comando lee `package.json` y `package-lock.json`, y crea localmente la
carpeta `node_modules` con las versiones correspondientes.

### Compilar el proyecto

Para comprobar y transpilar todo el proyecto usando la configuración de
`tsconfig.json` se ejecuta:

```bash
npx tsc
```

Para mantener el compilador observando los cambios y volver a compilar
automáticamente se usa:

```bash
npx tsc --watch
```

## Cómo se creó el proyecto

### Inicialización

El proyecto se inició con:

```bash
npm init -y
```

`npm init` crea el archivo `package.json`. La opción `-y` (abreviación de
`--yes`) evita el cuestionario interactivo y acepta sus valores
predeterminados.

### Instalación de TypeScript

TypeScript se instaló como una dependencia de desarrollo:

```bash
npm install typescript --save-dev
```

También puede escribirse de forma abreviada:

```bash
npm install -D typescript
```

Esto agrega TypeScript a `devDependencies` porque se necesita para desarrollar,
comprobar y transpilar el proyecto, pero no para ejecutar el JavaScript ya
generado.

No se utilizó una instalación global:

```bash
npm install -g typescript
```

Una instalación local permite que el proyecto defina su propia versión de
TypeScript y evita depender de la versión instalada en la computadora de cada
desarrollador. Tampoco se instaló como una dependencia de producción con
`npm install typescript`, ya que el compilador no forma parte del código que se
necesita durante la ejecución de esta aplicación.

## Compilación en detalle

### Compilar un archivo individual

Como TypeScript está instalado localmente, se puede ejecutar su compilador con
`npx`:

```bash
npx tsc archivo.ts
```

Para volver a compilar ese archivo cuando se detecten cambios se agrega
`--watch`:

```bash
npx tsc archivo.ts --watch
```

`npx` busca primero el ejecutable local. En este proyecto, la resolución sigue
aproximadamente esta ruta:

```text
node_modules/.bin/tsc
  -> node_modules/typescript/bin/tsc
  -> node_modules/typescript/lib/tsc.js
```

El comando correcto no es `npm tsc`. Si TypeScript estuviera instalado
globalmente, se podría ejecutar directamente:

```bash
tsc archivo.ts
```

Una dependencia local instalada en `dependencies` también se ejecutaría
normalmente mediante `npx`. Otra alternativa es crear un script en
`package.json`, porque npm agrega `node_modules/.bin` al `PATH` mientras
ejecuta sus scripts.

> Al pasar nombres de archivos directamente, como en `npx tsc archivo.ts`, el
> compilador no utiliza la configuración del proyecto de la misma forma. Una
> vez creado `tsconfig.json`, es preferible ejecutar `npx tsc` sin indicar
> archivos.

### Elegir la versión de JavaScript con `--target`

La opción `--target` establece la versión de JavaScript que TypeScript debe
generar. Algunos objetivos representativos, desde el más moderno hasta uno de
los más antiguos, son:

| Objetivo | Referencia de sintaxis |
| --- | --- |
| `esnext` | Conserva las características más recientes compatibles con TypeScript. |
| `es2024` | JavaScript estandarizado hasta ECMAScript 2024. |
| `es2022` | Incluye, por ejemplo, campos de clase modernos. |
| `es2020` | Incluye encadenamiento opcional (`obj?.prop`) y `??`. |
| `es2017` | Permite emitir `async` y `await` de forma nativa. |
| `es2015` | Incluye clases, funciones flecha, `let` y `const`. |
| `es5` | Transforma mucha sintaxis moderna para entornos antiguos. |

Ejemplos:

```bash
npx tsc archivo.ts --target esnext
npx tsc archivo.ts --target es2020
npx tsc archivo.ts --target es2015
```

Un objetivo más reciente genera código más cercano al TypeScript original,
pero exige un entorno de ejecución moderno. Un objetivo antiguo transforma
más sintaxis para aumentar la compatibilidad. `target` no agrega por sí solo
implementaciones de APIs que no existan en el entorno de destino.

### Elegir la carpeta de salida con `--outDir`

La opción `--outDir` indica dónde guardar los archivos generados:

```bash
npx tsc archivo.ts --outDir dist
```

Sin `--outDir`, al compilar un archivo individual TypeScript genera
normalmente el `.js` junto al `.ts`. Esta opción solamente controla la salida;
no selecciona la carpeta que contiene el código fuente.

También se pueden combinar opciones:

```bash
npx tsc archivo.ts --target es2020 --outDir dist --watch
```

## Configuración con `tsconfig.json`

Para no repetir todas las opciones en cada compilación se puede crear un
archivo de configuración:

```bash
npx tsc --init
```

Con una instalación global también funcionaría:

```bash
tsc --init
```

El archivo `tsconfig.json` marca la raíz de un proyecto TypeScript y permite
centralizar sus opciones. La configuración actual contiene, entre otras, las
siguientes propiedades:

```jsonc
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "nodenext",
    "target": "esnext",
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "strict": true
  }
}
```

### Opciones principales

- `rootDir` define la raíz esperada de los archivos fuente y ayuda a conservar
  su estructura dentro de la salida.
- `outDir` determina la carpeta donde se escriben los archivos generados.
- `target` selecciona la versión de JavaScript que se emitirá.
- `module` establece cómo se interpretan y generan los módulos.
- `strict` activa comprobaciones de tipos más rigurosas.
- `sourceMap` genera mapas que relacionan el JavaScript con su TypeScript.
- `declaration` genera archivos de declaración `.d.ts`.
- `declarationMap` genera mapas para las declaraciones.

`rootDir` no decide por sí solo qué archivos se compilan. Para seleccionar o
excluir archivos se pueden agregar propiedades de nivel superior como
`include`, `exclude` y `files`:

```jsonc
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

### Relación entre `module` y `package.json`

`target` y `module` no son lo mismo:

- `target` controla la versión de la sintaxis JavaScript generada.
- `module` controla el sistema y la resolución de módulos.

Este proyecto utiliza:

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "module": "nodenext"
  }
}
```

Y en `package.json` declara:

```json
{
  "type": "module"
}
```

Con `module: "nodenext"`, TypeScript imita el comportamiento moderno de Node.js
y tiene en cuenta tanto la extensión del archivo como el campo `type` del
`package.json` más cercano. En este caso, `"type": "module"` indica que los
archivos JavaScript `.js` se interpretan como módulos ECMAScript y no como
CommonJS.

Conviene mantener alineados `tsconfig.json`, `package.json` y el entorno donde
se ejecutará el código. Los valores creados por `tsc --init` son un buen punto
de partida, pero no existe una configuración universal: deben cambiarse solo
cuando las necesidades del proyecto lo requieran.

## Comprobación de JavaScript con TypeScript

El archivo `src/demo.js` contiene JavaScript escrito directamente; no fue
transpilado desde un archivo TypeScript. Al principio incluye el comentario:

```js
// @ts-check
```

Esta directiva pide al servicio de TypeScript que compruebe el archivo
JavaScript y muestre en el editor errores que pueda detectar. El archivo sigue
siendo JavaScript y puede ejecutarse como tal.

También se puede proporcionar información de tipos mediante comentarios
[JSDoc](https://jsdoc.app/). Por ejemplo, el archivo declara un arreglo con:

```js
/** @type {any[]} */
const products = [];
```

Y especifica que el parámetro `index` es un número:

```js
/**
 * @param {number} index
 */
function addProduct(index) {
  // ...
}
```

Así se obtiene parte de la ayuda de TypeScript sin convertir el archivo `.js`
en un archivo `.ts`; en este repositorio es una prueba del uso de tipos por
medio de comentarios.

## Archivos de apoyo

### `.gitignore`

El archivo `.gitignore` se generó con
[gitignore.io](https://www.toptal.com/developers/gitignore) utilizando las
plantillas `Windows`, `Linux`, `macOS` y `Node`.

Las primeras tres plantillas evitan subir archivos innecesarios creados por
los diferentes sistemas operativos. La plantilla de Node ignora, entre otros
elementos, la carpeta `node_modules`, mencionada en la sección de instalación.

`node_modules` puede ser muy grande y no debe almacenarse en Git. Las
dependencias ya están declaradas en `package.json` y bloqueadas en
`package-lock.json`, por lo que otro desarrollador puede recuperarlas con
`npm install`.

### `.editorconfig`

El archivo `.editorconfig` comparte reglas básicas de formato entre editores
compatibles. En este proyecto configura, entre otras cosas:

- Codificación UTF-8.
- Indentación con espacios.
- Dos espacios por nivel de indentación.
- Eliminación de espacios sobrantes al final de las líneas.
- Un salto de línea al final de cada archivo.

Visual Studio Code puede respetar estas reglas cuando cuenta con soporte para
EditorConfig.
