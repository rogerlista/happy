# Happy

Criando a pasta de trabalho

```
mkdir happy && $_
```

Inicializando o projeto web com reactjs

```
npx create-react-app web --template typescript
cd web
code .
yarn start
```

Instalar

```
yarn add react-icons
```

Instalar

```
yarn add react-router-dom
yarn add -D @types/react-router-dom
```

Instalar alternativa gratuita de mapas

```
yarn add leaflet react-leaflet
yarn add -D @types/react-leaflet
```

Outra alternativa gratuita de mapas - tem que criar conta para ter acesso ao access token

```
www.mapbox.com
```

Iniciando o projeto backend

```
mkdir backend && $_

yarn init -y || npm init -Y
```

Instalar

```
yarn add express
yarn add -D @types/express
```

Instalar

```
yarn add -D typescript ts-node-dev
yarn tsc --init
```

Conceitos de rotas

```
- Rota = todo o conjunto
- Recurso = usuário

- Métodos HTTP = GET, POST, PUT, DELETE

GET = Buscar uma informação (Lista, item)
POST = Criando uma informação
PUT = Editando um informação
DELETE = Apagando um informação

- Parâmetros

Query Params: http://localhost:3333/user?search=juca&page=2 (request.query)
Route Params: http://localhost?3333/users/1 (identificar um recurso) (request.params)
Body: http://localhost:3333/users (corpo da requisição) (request.body)
```

Instalar

```
yarn add typeorm sqlite3
```

Criando a migration

```
yarn typeorm migration:create -n create_orphanages
```

Executar a migration

```
yarn typeorm migration:run
```

Desfazer a migration

```
yarn typeorm migraton:revert
```

Insonia

```
Listar orfanatos

GET - http://localhost:3333/orphanages

Detalhe do orfanato

GET - http://localhost:3333/orphanages/2

Criar orfanato

POST - http://localhost:3333/orphanages
JSON - {
  "name": "Lar das meninas",
  "latitude": -27.2104339,
  "longitude": -49.629111,
  "about": "Sobre o orfanato",
  "instructions": "Venha visitar",
  "opening_hours": "Das 8h até 18h",
  "open_on_weekends": true
}
```
