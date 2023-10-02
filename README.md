https://yarnpkg.com/lang/en/docs/migrating-from-npm


# Adonis API application
# AULA 56 CRUD DE IMAGENS - Listagem de Imagens

legacy.adonisjs.com/docs/4.1/about
knex.js

* npm i -g @adonisjs/cli

* adonis --help

### adonis repl -> linha de comando de teste do adonis, um console de comandos

(* npm i -g node-gyp -> esse não sei pra que é)

* adonis new ecommerce --api-only

CREATE DATABASE 'adoinisecommerce'@'localhost' identified with mysql_native_password by '123456';
GRANT ALL PRIVILEGES ON 'curso.* to 'curso'@'localhost';
FLUSH PRIVILEGES;

* CONFIGURAR O .env
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=1HXjbRzL13GYONO8m5ovhmvmHKzDtIar
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=123456
DB_DATABASE=adonisecommerce
HASH_DRIVER=bcrypt


* config/database.js

connection: Env.get('DB_CONNECTION', 'mysql'),

* npm install --save mysql
* adonis install @adonisjs/mail
* adonis install @adonisjs/validator

.prettierrc

{
    "arrowParens": "avoid",
    "semi": false,
    "singleQuote": true,
    "bracketSpacing": true,
    "tabWidth": 2
}

* node ace migration:run

*  adonis install @adonisjs/mail   
* adonis install @adonisjs/validator
* adonis install @adonisjs/websocket
* npm i adonis-acl --save




* start/app.js
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/mail/providers/MailProvider',  -> digitar estas 3 linhas 
  '@adonisjs/validator/providers/ValidatorProvider', 
  '@adonisjs/websocket/providers/WsProvider',
  'adonis-acl/providers/AclProvider'
]

e aqui:
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider',
  'adonis-acl/providers/AclProvider'  -> digitar esta linha
]

e aqui também no mesmo aquivo stat/app.js

const aliases = {
  Role: 'Adonis/Acl/Role', -> digitar esta
  Permission: 'Adonis/Acl/Permission'  -> digitar esta
}

// DIGITA ESSA LINHA DEPOIS DE static boot() {...
}

 static get traits() {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provide:Adonis/Acl/HasPermission'
    ]
  }

// colocar em start/kernel.js
const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth',
  guest: 'Adonis/Middleware/AllowGuestOnly',
  is: 'Adonis/Acl/Is',  --> digitar esta linha
  can: 'Adonis/Acl/Can' --> digitar esta linha
}

// e em globalMiddleware no mesmo arquivo start/kernel.js
const globalMiddleware = [
  'Adonis/Middleware/BodyParser',
  'App/Middleware/ConvertEmptyStringsToNull',
  'Adonis/Acl/Init'
]

* DIGITAR O COMANDO PARA CRIAR AS MIGRATIONS DE RELACIONAMENTOS:
adonis acl:setup


* adonis install adonis-bumblebee
start/app.js  -> neste aquivo adiciona a linha:  'adonis-bumblebee/providers/BumblebeeProvider'

const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/mail/providers/MailProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  'adonis-acl/providers/AclProvider',
  '@adonisjs/websocket/providers/WsProvider',
  'adonis-bumblebee/providers/BumblebeeProvider'
]
// AQUI ADICIONA ESTA ÚLTIMA LINHA -> 'adonis-bumblebee/providers/BumblebeeProvider'
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider',
  'adonis-acl/providers/AclProvider',
  'adonis-acl/providers/CommandsProvider',
  'adonis-bumblebee/providers/CommandsProvider'
]

* adonis make:migration Category


This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
[1m[35mUsage:[39m[22m
  command [arguments] [options]

[1m[35mGlobal Options:[39m[22m
  [34m--env               [39m Set NODE_ENV before running the commands
  [34m--no-ansi           [39m Disable colored output
  [34m--version           [39m output the version number

[1m[35mAvailable Commands:[39m[22m
  [34maddon               [39m Create a new AdonisJs addon
  [34minstall             [39m Install Adonisjs provider from npm/yarn and run post install instructions
  [34mnew                 [39m Create a new AdonisJs application
  [34mrepl                [39m Start a new repl session
  [34mseed                [39m Seed database using seed files
  [34mserve               [39m Start Http server
 [1m[35mkey[39m[22m
  [34mkey:generate        [39m Generate secret key for the app
 [1m[35mmake[39m[22m
  [34mmake:command        [39m Make a new ace command
  [34mmake:controller     [39m Make a new HTTP or Websocket channel controller
  [34mmake:ehandler       [39m Make a new global exception handler
  [34mmake:exception      [39m Make a new exception
  [34mmake:hook           [39m Make a new lucid model hook
  [34mmake:listener       [39m Make a new event or redis listener
  [34mmake:middleware     [39m Make a new HTTP or Ws Middleware
  [34mmake:migration      [39m Create a new migration file
  [34mmake:model          [39m Make a new lucid model
  [34mmake:provider       [39m Make a new provider
  [34mmake:seed           [39m Create a database seeder
  [34mmake:trait          [39m Make a new lucid trait
  [34mmake:view           [39m Make a view file
 [1m[35mmigration[39m[22m
  [34mmigration:refresh   [39m Refresh migrations by performing rollback and then running from start
  [34mmigration:reset     [39m Rollback migration to the first batch
  [34mmigration:rollback  [39m Rollback migration to latest batch or to a specific batch number
  [34mmigration:run       [39m Run all pending migrations
  [34mmigration:status    [39m Check migrations current status
 [1m[35mroute[39m[22m
  [34mroute:list          [39m List all registered routes
 [1m[35mrun[39m[22m
  [34mrun:instructions    [39m Run instructions for a given module
    1  cd
    2  e.
    3  pa tinker
    4  cp app/constants.php
    5  php -S  localhost:8000
    6  mkdir public
    7  copy con index.php
    8  composer init
    9  ls -la
   10  rm -rf .git
   11  git remote add origin https://github.com/albertogomesdasilva/curso-laravel10-docker.git
   12  docker-compose exec app bash
   13  php composer.phar dump-autoload -o
   14  php -S localhost:8000 -t public
   15   composer dump-autoload -o
   16  cd celke
   17  cd admin
   18  cd adm
   19  php -S localhost:8000 
   20  composer dump-autoload -o
   21  docker-compose up -d]
   22  docker-compose up -d --buid
   23  docker-compose up -d --build
   24  docker-composer down
   25  docker-compose down
   26  pa
   27  docker-compose up -d
   28  docker compose build
   29  php artisan
   30  ./vendor/bin/root artisan 
   31  ./vendor/bin/root php artisan
   32  vendor/bin/root php artisan
   33  mysql -u root -p
   34  ph -v
   35  php -V
   36  docker container ls
   37  docker stop all
   38  docker down
   39  docker image
   40  docker start 6bb891430fb6
   41  docker up 6bb891430fb6
   42  docker help
   43  docker run 6bb891430fb6
   44  docker run -e MYSQL_ROOT_PASSWORD=123456 6bb891430fb6
   45  docker container down
   46  docker stop dca54c828185
   47  docker run -e MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 -d
   48  docker run -d MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 
   49  docker run -e  -d MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 -d
   50  docker run -e   MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 bash
   51  docker run -e   MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 | bash
   52  docker run -e   MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6
   53  volumes
   54  volumes -l
   55  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /caminho/para/diretorio:/var/lib/mysql meu_mysql
   56  docker images
   57  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /caminho/para/diretorio:/var/lib/mysql 011343cf3ec3
   58  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3
   59  docker container
   60  docker container stop
   61  docker container stop all
   62  docker stop
   63  docker stop 62b3d459b12a
   64  docker stop 62b3d459b12a bash
   65  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 bash
   66  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 -d
   67  docker run -p 3306:3306 -e -it MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 
   68  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 it
   69  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 -it
   70  docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 
   71  docker stop 62b3d459b12a 
   72  docker stop 3588e5cc3f15
   73  docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /caminho/para/diretorio:/var/lib/mysql meu_mysql
   74  docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /:/var/lib/mysql meu_mysql
   75  docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /:/var/lib/mysql docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /caminho/para/diretorio:/var/lib/mysql meu_mysql
   76   docker run -p 3306:3306 -d -e MYSQL_ROOT_PASSWORD=123456 -v /:/var/lib/mysql 011343cf3ec3
   77  docker stop cb34acb641a1
   78  php artissan make:model Despesa
   79  ./vendor/bin/sail artisan serve
   80  ./vendor/bin/sail artisan make:model Despesa
   81  ./vendor/bin/sail
   82  ./vendor/bin/sail up -d
   83  php artisan make:model Despesas -mf
   84  php artisan ui bootstrap
   85  npm install && npm run dev
   86  php artisan ui bootstrap --auth
   87  npm run watch
   88  npm install --global yarn
   89  npm init adonis-ts-app@4.0.2 roleplay-api
   90  yarn add sqlite3 -D
   91  node -r @adonisjs/assembler/build/register japaFile.ts
   92  yarn add japa execa@5.1.1 get-port@5.1.1 -D
   93  php artisan key:generate
   94  php filalament
   95  php filament
   96  php artisan make:filament-user
   97  docker stop 20220d55e404 
   98  docker stop d4aeb13f63b2
   99  docker stop 807e5bec8d35
  100  yarn add -D supertest @types/supertest
  101  npm test
  102  node ace --help
  103  node ace node:controller User
  104  node ace make:controller User
  105  yarn test
  106  node ace configure --help
  107  docke ps
  108  adonis serve -d
  109  npm install pg
  110  adonis migrations:run
  111  yarn add @adonisjs/lucid
  112  hystory
  113  hystory > hystory.md
  114  color red
  115  colo 9
  116  color
  117  color help
  118  color [0]
  119  color fc
  120  color f
  121  color w
  122  color e5
  123  doskey /history > historico.txt
  124  dockey /history
  125  dockey history
  126  doskey /history
  127  h
  128  help
  129  sc
  130  systeminfo
  131  php -S localhost:8000 -t /www
  132  php -S localhost:8000 -t www
  133  docker compose up 
  134  git help
  135  git help -g
  136  git commit -am "criado index.html"
  137  git commit -am "criado o teste.md"
  138   git push --set-upstream origin master
  139  git commit -m "criado o arquivo 1"
  140  echo Teste 1 > teste1.md
  141  git commit -am "criado o arquivo teste1"
  142  git add
  143  git checkout df8f6467c096e65c3f404d204db01cfd499af7f1
  144  git branch main
  145  git commit -am "push feito"
  146  git remote add origin https://github.com/albertogomesdasilva/2023-git-iniciando.git
  147  git commit -m "códigos finalizados"
  148  git merge linhatestes
  149  git pull
  150  git commit "fim"
  151  git commit -m "adicionado NOTAS.md"
  152  git branch linhatestes
  153  git checkout linhatestes
  154  echo TESTE.md > TESTE.md
  155  git commit -m "criado TESTE.md"
  156   git push --set-upstream origin linhatestes
  157  git checkout main
  158  git checkout 7339967e79bcf096d4ad536ed8630887ef3e6691
  159  git reset 7339967e79bcf096d4ad536ed8630887ef3e6691
  160  git reset 21c7b8067708d92cfb8b0dfe1004ece5c9702af5
  161  git reset b776edef278e1c9fd053b384737de78f56e89d98
  162  git reset --hard b776edef278e1c9fd053b384737de78f56e89d98
  163  git reset --soft  b776edef278e1c9fd053b384737de78f56e89d98
  164  git remote -v
  165  git remote remove origin
  166  git commit -m "ok final"
  167  ECHO ARQUIVO1.md
  168  ECHO ARQUIVO1 > ARQUIVo1.MD
  169  DEL ARQUIVo1.MD 
  170  echo 1 > 1
  171  echo echo 2 > 2
  172  echo 3 > 3
  173  git commit -m "123"
  174  echo 4 > 4
  175  git commit -m "1 2 3 4 log.md"
  176  echo a > A
  177  echo 5 > 5
  178  git commit -am " criou o 5"
  179  log > log.md
  180  git reset --soft e75630eaca89e3a84ed0bf8d50e7926e76ef0a55
  181  git reset --hard ac460f5ba2539cc8c28ad3d45f295a1421a2a872
  182  echo inicio > inicio.md
  183  git commit -m "inicio criado"
  184  echo primeiro > primeiro.md
  185  git add primeiro.md 
  186  git commit -m "criado primeiro.md"
  187  git reset --soft e1378baea6f1e521d8c06129f241591c528d58ab
  188  git reset --soft commit 82074e228884c6127a3e79c9df51deb3af42c680
  189  git reset --soft  82074e228884c6127a3e79c9df51deb3af42c680
  190  git reset --hard e1378baea6f1e521d8c06129f241591c528d58ab
  191  git reset --hard  82074e228884c6127a3e79c9df51deb3af42c680
  192  echo a > a.md
  193  git commit -am "criado o arquivo a.md"
  194  git log 
  195  git statu
  196  git log > log.md
  197  type index.js > log.md
  198  clink update
  199  type index.js >> log.md
  200  npm install node-fetch
  201  node --trace-warnings ...`
  202  git commit -m "commit inicial"
  203  npm add express
  204  git commit -m "adding express"
  205  npm install nodemon -g
  206  npm install dotenv
  207  git commit -m "projeto básico"
  208  git commit -m "página home ok"
  209  git commit -am "formulário passando os dados via post ok"
  210  git remote
  211  git remote add https://github.com/albertogomesdasilva/2023-git-iniciando
  212  git remote add https://github.com/albertogomesdasilva/2023-git-iniciando.git
  213  git commit -am "formulário passando os dados via pos ok"
  214  git commit -am "antes da view-engine"
  215  npm install express-edge
  216  npm install ejs
  217  npm uninstall edge
  218  git commit -am "projeto ejs express básico"
  219  git commit -am "projeto ejs express básico ok"
  220  node ace >> NOTAS.md
  221  node acee make:view login >> NOTAS.md
  222  node acee make:view login
  223  node ace make:view login
  224    const titulo = "Login";
  225  node ace make:controller --help
  226  node ace make:controller document
  227  node ace list:routes > listRoutes.md
  228  node ace make:view documents
  229  git commit -m "funcionando rota, controllers e view"
  230  node ace make:view jsons
  231  git commit -am "com rota json todos e com id"
  232  node ace routes:list >> NOTAS.md
  233  echo  Teste >> NOTAS.md
  234  node ace list:routes >> NOTAS.md
  235  git commit -am "funcionando get e push"
  236  git checkout 2e88e2e596893760e8c6014f95b46d5e30067f8b
  237  git checkout 3a3fbde3692698ee16ef0a059a36c9727b414e55
  238  git reset 3a3fbde3692698ee16ef0a059a36c9727b414e55
  239  git reset --hard 3a3fbde3692698ee16ef0a059a36c9727b414e55
  240  node ace make:view doc
  241  npm i @adonisjs/lucid >> README.md
  242  npm i @adonisjs/lucid 
  243  node ace migraton:run
  244  node ace make:migration add_last_login_column --table=users
  245  php artisan serve
  246  php artisan server
  247  php artisan migrate:fresh
  248  php artisan make:migration create_posts_table
  249  php artisan make:migration create_posts_table --create=posts
  250  php artisan make:model Post
  251  php artisan make:seeder PostTableSeeder 
  252  php artisan make:factory PostFacktory --model=Post
  253  php artisan db:seed
  254  php artisan migrate --seed
  255  php artisan make:factory PostFactory --model=Post
  256  php artisan make:controller PostController
  257  php artisan make:model Product -m
  258  php artisan make:controller ProductController -r
  259  php artisan make:factory ProductFactory --model=Product
  260  php artisan migrate:fresh --seed
  261  php artisan make:request ProductStoreRequest
  262  npx create-react-app api-laravel-infinite-scroll-consumer
  263  npm i react-router-dom --save
  264  pas 
  265  cd laravel-infinite-scrolling-com-api\
  266  cd react-consumer-api-laravel\
  267  ir
  268  npm i react-router-dom
  269  pm i
  270  cd api\
  271  npm run devc
  272  npm  i
  273  npm install express
  274  npm install typescript
  275  cd dist
  276  node main
  277  npx tsc
  278  node ./dist/main.js
  279  npm i typescript
  280  npm i ts-node-dev -D
  281  npm ts-node-dev
  282  npm install typescript tsc-node-dev -D
  283  npm install typescript ts-node-dev -D
  284  npx tsc --init
  285  ./src/main.ts >> README.md
  286  nodemon index.js
  287  npm i -g nodemon
  288  npm install mysql2 --sav
  289  npm install mysql2 --save
  290  node app.js
  291  echo Comando para instalar o driver do banco de dados mysql >> README.md
  292  echo ### npm install --save mysql2 >> README.md
  293   npm install --save mysql2 
  294  npm install express-handlebars
  295  npm install body-parser
  296  npm i --save sequelize
  297  npm i --save mysql2
  298  npm install --save express-session
  299  npm intall --save connect-flash
  300  npm install --save connect-flash
  301  npm install --save dotenv 
  302   npx sequelize-cli migration:generate --name:create-users
  303  npx sequelize-cli migration:generate --name create-users
  304  type README.md
  305  echo PROJETO NODEJS-CRUD > PROJETO.docx
  306  README.md >> PROJETO.docx
  307  type README.md >> PROJETO.docx
  308  type package.json  >> PROJETO.docx
  309  echo ### app.js >> README.md
  310  echo ### app.js >> PROJETO.docx
  311  npx sequelize-cli seed:generate --name criar-usuarios
  312  nodemon app.js
  313  npx install --save bcryptjs
  314  npm install --save bcryptjs
  315  npx sequelize-cli db:seed:all
  316   npx sequelize-cli db:migrate
  317  npm install --save express
  318  npm install --save dotenv
  319  npm install --save express-handlebars
  320  npm install --save sequelize
  321  npm install --save-dev sequelize-cli
  322  echo history
  323  npx sequelize-cli init
  324  process
  325  npm install fs
  326  node geralog.js
  327  node geralog
  328  nodemon index
  329  np i
  330  yarn install
  331  npm instalar cors
  332  npm install --save consign
  333  npm install --save ejs
  334  composer require laravel/ui
  335  composer ui
  336  composer
  337  php artisan 
  338  php artisan ui:auth
  339  php artisan migrate
  340  docker-compose up -d mysql
  341  docker-compose -f docker-compose.phpmyadmin.yaml up -d
  342  sudo apt-get install -y libxshmfence-dev libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils
  343  nano .env
  344  php -S localhost:8080
  345  nodemn app
  346  np install
  347  php -v
  348  LS
  349  docker volumes
  350  docker ps
  351  docker compose down
  352  docker compose up -d
  353  node botzdg.js
  354  node app-bot
  355  node botzadg_numero_fantasma
  356  node botzdg_numero_fantasma
  357  oi
  358  node botzdgmysql
  359  echo "# bot" >> README.md
  360  git add . 
  361  push.autoSetupRemote
  362   git push --set-upstream origin main
  363  git commit -m "first commit" 
  364  git branch -M main 
  365  git remote add origin https://github.com/albertogomesdasilva/bot.git
  366   git push -u origin main
  367  npm install yarn
  368  yarn
  369  yarn start
  370  docker up -d
  371  docker 
  372  npm run start:dev
  373  npm run start
  374  node start:dev
  375  node botmysql
  376  node botmysql2
  377  nmp start
  378  echo "# albertobot" >> README.md
  379  git remote add origin https://github.com/albertogomesdasilva/albertobot.git
  380  git commit -am "first ok"
  381  nodemon botzdgmysql2
  382  node botzdg
  383  nodemon botzdgdialog
  384  cd whaticket\
  385  pm2 start dist/server.js --name whaticket-backend
  386  npm install --force
  387  cd backend\
  388  npx sequelize db:seed:all --force
  389  npx sequelize db:migrate
  390  npx sequelize db:seed:all
  391  node botzdgdialog
  392  node botzdgmysql2
  393  php -S localhost:800
  394  cd public\
  395  npm init -y
  396  npm install sequelize --save
  397  npm install --save mysql2
  398  mysql -u root 
  399  adonis key:generate
  400  npm init
  401  npm install express --save
  402  cd v
  403  dir
  404  cd app
  405  php server.php
  406  npm run dev --fix
  407  npm install normalize.css
  408  npm install bootstrap.npm install --save jquery popper.js
  409  npm install --save jquery popper.js
  410  npm install axios
  411  npm install bootstrap
  412  nrs
  413  npm install bootstrap-vue bootstrap
  414  npm install --save @fontawesome/fontawesome-free
  415  npm install --save @fortawesome/fontawesome-free
  416  npm install --save animate.css
  417  vue-server-renderer@2.6.14 
  418  vue-server-renderer -V
  419  vue-server-renderer --version
  420  vue-server-render --version
  421  npm run serve
  422  vue@3.3.4
  423  vue -V
  424  npm run build@3.3.4
  425  npm run dev@3.3.4
  426  npm start@3.3.4
  427  npm install @adonisjs/lucid@alpha
  428  node ace invoque @adonisjs/lucid
  429  node ace:migration posts
  430  node ace make:controller Posts -r
  431  nodemon app
  432  cd API-FacebookClone-master\
  433  node ace configure @adonisjs/lucid 
  434   npm install --save phpc-argon2
  435   npm install --save phc-argon2
  436  node ace serve --watch
  437  node ace make:controller Posts
  438  node ace invoke @adonisjs/lucid
  439  node ace make:migration posts
  440  node ace make:migration add_obs_collunm --table=posts
  441  node ace migration:rollback
  442  node ace make:model Post
  443  node ace make:model Despesa
  444  node ace make:controller Despesa -r
  445  node ace db:fresh
  446  node ace db:refresh
  447  git remote add origin https://github.com/albertogomesdasilva/despesas.git
  448  git sttus
  449  npm i @adonisjs/auth@alpha
  450  node ace invoke @adonisjs/auth
  451  node ace make:controller Auth -r
  452  node ace make:seeder FirstUser
  453  git commit -am "auth"
  454  git commit -am "api com aut"
  455  git commit -am "rotas protegidas com middleware"
  456  node ace make:middleware Acl
  457  node ace make:validator Despesa
  458  git commit -am "com nivel de acesso"
  459  git commit -am ".env addicionado"
  460  npm install  vuex-module-decorators
  461  npm i vuex-module-decorators
  462  npm i vue-module-decorators
  463  npm update
  464  npm i --save axios
  465  CD api
  466  npm i -g ts-node
  467  CD API
  468  cd crud\
  469  npm install next react react-dom
  470  cd api
  471  cd frontend\
  472  node ace make:validator Auth/StoreValidator
  473  node ace make:migration
  474  node ace make:migrations
  475  node ace migrations:run
  476   node ace configure @adonis/lucid
  477  node ace configure @adonisjs
  478  npm install @adonisjs/@lucid
  479  npm install @adonisjs/lucid
  480  node ace configure @adonis/lucid
  481  npm install @adonisjs/auth
  482  node ace make:controller Post
  483     
  484  node ace make:view index
  485  node ace make:view posts/index
  486  node ace make:view home
  487  node ace make:view about
  488  node ace make:view contact
  489  node ace make:view partials/navbar
  490  node ace make:view component/button
  491  npi @adonisjs/lucid
  492  npm i @adonisjs/lucid
  493  node ace config @adonisjs/lucid
  494  node ace configure @adonisjs/lucid
  495  node ace make:migration users
  496  node ace make:seeder User
  497  node ace make:model User
  498   npm install phc-argon2 --save
  499   npm install phc-argon2
  500  node ace db:run
  501  npm install --save bootstrap@5.2.1
  502  npm install --save bootstrap
  503   npm install sass-loader@^13.0.0 sass --save-dev
  504  node ace make:view layouts/main
  505  node ace make:view welcome
  506  node ace make:controller Auth
  507  node ace make:view auth/signup
  508  rd
  509  node ace make:view partials/toasts
  510  node ace make:view auth/login
  511  clea
  512  npm install -g node@latest
  513  npm i adonisjs/auth
  514  nvm -v
  515  npm i @adonisj/auth
  516  npm i @adonisjs/auth
  517  node ace configure @adonijs/auth
  518  node ace
  519  node ace configure
  520  node ace configure @adonisjs/auth
  521  node ace make:model Task -m
  522  node ace make:controller Task -r
  523  node ace make:view task/index
  524  node ace make:view task/create
  525  node ace make:validator CreateTask
  526  node ace migration:sttus
  527  node ace migration:status
  528  git remote add origin https://github.com/albertogomesdasilva/adonis-web-crud-tarefas.git
  529  git commit -am "first commit"
  530  git commit -am "primeiro commit"
  531  git push --set-upstream origin main
  532  git commit -am "aula 75"
  533  node --trace-warnings
  534  node ace make:view tasks/show
  535  git commit -am "aula 78 - formatar as páginas de detalhes das tarefas"
  536  node ace make:view components/priority
  537  node ace make:view tasks/edit
  538  git commit -am "editar tarefas"
  539  git commit -am "editar"
  540  ace node route:list
  541  CLEAR
  542  git commit -am "AULA 84 - Adding auth middleware"
  543  node ace make:middleware IsGuest
  544  npm i @adonisjs/shield
  545  node ace configure @adonisjs/shield
  546  NRD
  547  git commit -am "final - proteção crud de usuários diferentes do proprietário, crsf"
  548  git commit -am "final"
  549  git commit -am "ok final"
  550  node ace db:seed
  551  pwd
  552  cd build\
  553  node server.js
  554  cd build npm ci --production
  555  node serve.js
  556  ls
  557  cd ..
  558  npm run build
  559  cd build
  560  npm ci --production
  561  node server
  562  npm i @adonisjs/bouncer
  563  node ace configure @adonisjs/bouncer
  564  npm i @adonisjs/session
  565  node ace configure @adonisjs/session
  566  git commit -am "fim"
  567  git commit -am "okkk"
  568  git commit -am "ALL RIGHT"
  569  echo "# adonisjs-doc" >> README.md
  570  git add README.md
  571  git commit -m "first commit"
  572  git remote add origin https://github.com/albertogomesdasilva/adonisjs-doc.git
  573  git commit -am "o"
  574  git commit -am "okk"
  575  node db:seed
  576  node ace migration:run
  577  node ace migration:fresh
  578  node ace list:route
  579  node ace routes:list
  580  node ace route:list
  581  node ace -h
  582  node ace list:routes
  583  git checkout
  584  git push -u origin main
  585  git commit -am "1"
  586  git commit -m "arquivo 2 criado"
  587  git commit -am "apagado"
  588  git reset --hard
  589  git reset --soft
  590  git reset 5bc
  591  git reset 2379dea461985a9a530087ee8e68248046146c20
  592  git commit -am "inicio"
  593  git commit -m "estapa2"
  594  git commit -am "esta 2"
  595  git reset d3ba
  596  git reset
  597  git estatus
  598  git commit -am "inicio 0"
  599  git commit -am "função criada"
  600  git commit -am "2.html criado"
  601  git commit -am "classe em 2.html"
  602  clear
  603  git commit -m "criada a classe 2.html"
  604  git reset 4b91f5630a25efad14e9b88669fd8ae4ea4ff11c
  605  git commit -m "2!
  606  git commit -m "2"
  607  git commit -am "2!
  608  git commit -am "2"
  609  git commit -am " segundo "
  610  git commit -am "primeiro comit"
  611  git commit -am "segundo commit"
  612  git commit -am "segunda linha criada"
  613  git commit -am "terceiro html"
  614  git reset 046a29093f99d7fe89f1c62fbfbaec8d7943905b
  615  git reset --hard f15ae59aa3afb23c2087ce15f6c017c2c9e45d5a
  616  git reset f15ae59aa3afb23c2087ce15f6c017c2c9e45d5a 
  617  git init
  618  git branch -M main
  619  git status
  620  git commit -am "primeiro"
  621  git commit -am "segundo"
  622  git commit
  623  git add.
  624  git commit -am "terceiro"
  625  git log
  626  git reset 510f96fb171e7496b533533dde97390d19e251cd
  627  git reset --hard 510f96fb171e7496b533533dde97390d19e251cd
  628  cls
  629  composer install
  630  pas
  631  git 
  632  git branch
  633  git commit -m "ok"
  634  git add .
  635  git commit -am "ok"
  636  git push
  637  npm install
  638  nvm node
  639  npm nvm
  640  npm start
  641  nvm ls
  642  nvm -ls
  643  npm i nvm
  644  nvm use 12.18.3
  645  nvm -h
  646  npm install nvm
  647  node start
  648  cd src
  649  node app
  650  nvm
  651  node -v
  652  npm -v
  653  php -S localhost:8000
  654  node index
  655  npm run dev
  656  npm i
  657  nrd
  658  adonis serve-dev
  659  adonis serve --dev
  660  npm i --save mysql
  661  adonis migration:run
  662  adonis --help
  663  adonis --help >> README.md
    1  cd
    2  e.
    3  pa tinker
    4  cp app/constants.php
    5  php -S  localhost:8000
    6  mkdir public
    7  copy con index.php
    8  composer init
    9  ls -la
   10  rm -rf .git
   11  git remote add origin https://github.com/albertogomesdasilva/curso-laravel10-docker.git
   12  docker-compose exec app bash
   13  php composer.phar dump-autoload -o
   14  php -S localhost:8000 -t public
   15   composer dump-autoload -o
   16  cd celke
   17  cd admin
   18  cd adm
   19  php -S localhost:8000 
   20  composer dump-autoload -o
   21  docker-compose up -d]
   22  docker-compose up -d --buid
   23  docker-compose up -d --build
   24  docker-composer down
   25  docker-compose down
   26  pa
   27  docker-compose up -d
   28  docker compose build
   29  php artisan
   30  ./vendor/bin/root artisan 
   31  ./vendor/bin/root php artisan
   32  vendor/bin/root php artisan
   33  mysql -u root -p
   34  ph -v
   35  php -V
   36  docker container ls
   37  docker stop all
   38  docker down
   39  docker image
   40  docker start 6bb891430fb6
   41  docker up 6bb891430fb6
   42  docker help
   43  docker run 6bb891430fb6
   44  docker run -e MYSQL_ROOT_PASSWORD=123456 6bb891430fb6
   45  docker container down
   46  docker stop dca54c828185
   47  docker run -e MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 -d
   48  docker run -d MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 
   49  docker run -e  -d MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 -d
   50  docker run -e   MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 bash
   51  docker run -e   MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 | bash
   52  docker run -e   MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6
   53  volumes
   54  volumes -l
   55  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /caminho/para/diretorio:/var/lib/mysql meu_mysql
   56  docker images
   57  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /caminho/para/diretorio:/var/lib/mysql 011343cf3ec3
   58  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3
   59  docker container
   60  docker container stop
   61  docker container stop all
   62  docker stop
   63  docker stop 62b3d459b12a
   64  docker stop 62b3d459b12a bash
   65  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 bash
   66  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 -d
   67  docker run -p 3306:3306 -e -it MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 
   68  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 it
   69  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 -it
   70  docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 
   71  docker stop 62b3d459b12a 
   72  docker stop 3588e5cc3f15
   73  docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /caminho/para/diretorio:/var/lib/mysql meu_mysql
   74  docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /:/var/lib/mysql meu_mysql
   75  docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /:/var/lib/mysql docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /caminho/para/diretorio:/var/lib/mysql meu_mysql
   76   docker run -p 3306:3306 -d -e MYSQL_ROOT_PASSWORD=123456 -v /:/var/lib/mysql 011343cf3ec3
   77  docker stop cb34acb641a1
   78  php artissan make:model Despesa
   79  ./vendor/bin/sail artisan serve
   80  ./vendor/bin/sail artisan make:model Despesa
   81  ./vendor/bin/sail
   82  ./vendor/bin/sail up -d
   83  php artisan make:model Despesas -mf
   84  php artisan ui bootstrap
   85  npm install && npm run dev
   86  php artisan ui bootstrap --auth
   87  npm run watch
   88  npm install --global yarn
   89  npm init adonis-ts-app@4.0.2 roleplay-api
   90  yarn add sqlite3 -D
   91  node -r @adonisjs/assembler/build/register japaFile.ts
   92  yarn add japa execa@5.1.1 get-port@5.1.1 -D
   93  php artisan key:generate
   94  php filalament
   95  php filament
   96  php artisan make:filament-user
   97  docker stop 20220d55e404 
   98  docker stop d4aeb13f63b2
   99  docker stop 807e5bec8d35
  100  yarn add -D supertest @types/supertest
  101  npm test
  102  node ace --help
  103  node ace node:controller User
  104  node ace make:controller User
  105  yarn test
  106  node ace configure --help
  107  docke ps
  108  adonis serve -d
  109  npm install pg
  110  adonis migrations:run
  111  yarn add @adonisjs/lucid
  112  hystory
  113  hystory > hystory.md
  114  color red
  115  colo 9
  116  color
  117  color help
  118  color [0]
  119  color fc
  120  color f
  121  color w
  122  color e5
  123  doskey /history > historico.txt
  124  dockey /history
  125  dockey history
  126  doskey /history
  127  h
  128  help
  129  sc
  130  systeminfo
  131  php -S localhost:8000 -t /www
  132  php -S localhost:8000 -t www
  133  docker compose up 
  134  git help
  135  git help -g
  136  git commit -am "criado index.html"
  137  git commit -am "criado o teste.md"
  138   git push --set-upstream origin master
  139  git commit -m "criado o arquivo 1"
  140  echo Teste 1 > teste1.md
  141  git commit -am "criado o arquivo teste1"
  142  git add
  143  git checkout df8f6467c096e65c3f404d204db01cfd499af7f1
  144  git branch main
  145  git commit -am "push feito"
  146  git remote add origin https://github.com/albertogomesdasilva/2023-git-iniciando.git
  147  git commit -m "códigos finalizados"
  148  git merge linhatestes
  149  git pull
  150  git commit "fim"
  151  git commit -m "adicionado NOTAS.md"
  152  git branch linhatestes
  153  git checkout linhatestes
  154  echo TESTE.md > TESTE.md
  155  git commit -m "criado TESTE.md"
  156   git push --set-upstream origin linhatestes
  157  git checkout main
  158  git checkout 7339967e79bcf096d4ad536ed8630887ef3e6691
  159  git reset 7339967e79bcf096d4ad536ed8630887ef3e6691
  160  git reset 21c7b8067708d92cfb8b0dfe1004ece5c9702af5
  161  git reset b776edef278e1c9fd053b384737de78f56e89d98
  162  git reset --hard b776edef278e1c9fd053b384737de78f56e89d98
  163  git reset --soft  b776edef278e1c9fd053b384737de78f56e89d98
  164  git remote -v
  165  git remote remove origin
  166  git commit -m "ok final"
  167  ECHO ARQUIVO1.md
  168  ECHO ARQUIVO1 > ARQUIVo1.MD
  169  DEL ARQUIVo1.MD 
  170  echo 1 > 1
  171  echo echo 2 > 2
  172  echo 3 > 3
  173  git commit -m "123"
  174  echo 4 > 4
  175  git commit -m "1 2 3 4 log.md"
  176  echo a > A
  177  echo 5 > 5
  178  git commit -am " criou o 5"
  179  log > log.md
  180  git reset --soft e75630eaca89e3a84ed0bf8d50e7926e76ef0a55
  181  git reset --hard ac460f5ba2539cc8c28ad3d45f295a1421a2a872
  182  echo inicio > inicio.md
  183  git commit -m "inicio criado"
  184  echo primeiro > primeiro.md
  185  git add primeiro.md 
  186  git commit -m "criado primeiro.md"
  187  git reset --soft e1378baea6f1e521d8c06129f241591c528d58ab
  188  git reset --soft commit 82074e228884c6127a3e79c9df51deb3af42c680
  189  git reset --soft  82074e228884c6127a3e79c9df51deb3af42c680
  190  git reset --hard e1378baea6f1e521d8c06129f241591c528d58ab
  191  git reset --hard  82074e228884c6127a3e79c9df51deb3af42c680
  192  echo a > a.md
  193  git commit -am "criado o arquivo a.md"
  194  git log 
  195  git statu
  196  git log > log.md
  197  type index.js > log.md
  198  clink update
  199  type index.js >> log.md
  200  npm install node-fetch
  201  node --trace-warnings ...`
  202  git commit -m "commit inicial"
  203  npm add express
  204  git commit -m "adding express"
  205  npm install nodemon -g
  206  npm install dotenv
  207  git commit -m "projeto básico"
  208  git commit -m "página home ok"
  209  git commit -am "formulário passando os dados via post ok"
  210  git remote
  211  git remote add https://github.com/albertogomesdasilva/2023-git-iniciando
  212  git remote add https://github.com/albertogomesdasilva/2023-git-iniciando.git
  213  git commit -am "formulário passando os dados via pos ok"
  214  git commit -am "antes da view-engine"
  215  npm install express-edge
  216  npm install ejs
  217  npm uninstall edge
  218  git commit -am "projeto ejs express básico"
  219  git commit -am "projeto ejs express básico ok"
  220  node ace >> NOTAS.md
  221  node acee make:view login >> NOTAS.md
  222  node acee make:view login
  223  node ace make:view login
  224    const titulo = "Login";
  225  node ace make:controller --help
  226  node ace make:controller document
  227  node ace list:routes > listRoutes.md
  228  node ace make:view documents
  229  git commit -m "funcionando rota, controllers e view"
  230  node ace make:view jsons
  231  git commit -am "com rota json todos e com id"
  232  node ace routes:list >> NOTAS.md
  233  echo  Teste >> NOTAS.md
  234  node ace list:routes >> NOTAS.md
  235  git commit -am "funcionando get e push"
  236  git checkout 2e88e2e596893760e8c6014f95b46d5e30067f8b
  237  git checkout 3a3fbde3692698ee16ef0a059a36c9727b414e55
  238  git reset 3a3fbde3692698ee16ef0a059a36c9727b414e55
  239  git reset --hard 3a3fbde3692698ee16ef0a059a36c9727b414e55
  240  node ace make:view doc
  241  npm i @adonisjs/lucid >> README.md
  242  npm i @adonisjs/lucid 
  243  node ace migraton:run
  244  node ace make:migration add_last_login_column --table=users
  245  php artisan serve
  246  php artisan server
  247  php artisan migrate:fresh
  248  php artisan make:migration create_posts_table
  249  php artisan make:migration create_posts_table --create=posts
  250  php artisan make:model Post
  251  php artisan make:seeder PostTableSeeder 
  252  php artisan make:factory PostFacktory --model=Post
  253  php artisan db:seed
  254  php artisan migrate --seed
  255  php artisan make:factory PostFactory --model=Post
  256  php artisan make:controller PostController
  257  php artisan make:model Product -m
  258  php artisan make:controller ProductController -r
  259  php artisan make:factory ProductFactory --model=Product
  260  php artisan migrate:fresh --seed
  261  php artisan make:request ProductStoreRequest
  262  npx create-react-app api-laravel-infinite-scroll-consumer
  263  npm i react-router-dom --save
  264  pas 
  265  cd laravel-infinite-scrolling-com-api\
  266  cd react-consumer-api-laravel\
  267  ir
  268  npm i react-router-dom
  269  pm i
  270  cd api\
  271  npm run devc
  272  npm  i
  273  npm install express
  274  npm install typescript
  275  cd dist
  276  node main
  277  npx tsc
  278  node ./dist/main.js
  279  npm i typescript
  280  npm i ts-node-dev -D
  281  npm ts-node-dev
  282  npm install typescript tsc-node-dev -D
  283  npm install typescript ts-node-dev -D
  284  npx tsc --init
  285  ./src/main.ts >> README.md
  286  nodemon index.js
  287  npm i -g nodemon
  288  npm install mysql2 --sav
  289  npm install mysql2 --save
  290  node app.js
  291  echo Comando para instalar o driver do banco de dados mysql >> README.md
  292  echo ### npm install --save mysql2 >> README.md
  293   npm install --save mysql2 
  294  npm install express-handlebars
  295  npm install body-parser
  296  npm i --save sequelize
  297  npm i --save mysql2
  298  npm install --save express-session
  299  npm intall --save connect-flash
  300  npm install --save connect-flash
  301  npm install --save dotenv 
  302   npx sequelize-cli migration:generate --name:create-users
  303  npx sequelize-cli migration:generate --name create-users
  304  type README.md
  305  echo PROJETO NODEJS-CRUD > PROJETO.docx
  306  README.md >> PROJETO.docx
  307  type README.md >> PROJETO.docx
  308  type package.json  >> PROJETO.docx
  309  echo ### app.js >> README.md
  310  echo ### app.js >> PROJETO.docx
  311  npx sequelize-cli seed:generate --name criar-usuarios
  312  nodemon app.js
  313  npx install --save bcryptjs
  314  npm install --save bcryptjs
  315  npx sequelize-cli db:seed:all
  316   npx sequelize-cli db:migrate
  317  npm install --save express
  318  npm install --save dotenv
  319  npm install --save express-handlebars
  320  npm install --save sequelize
  321  npm install --save-dev sequelize-cli
  322  echo history
  323  npx sequelize-cli init
  324  process
  325  npm install fs
  326  node geralog.js
  327  node geralog
  328  nodemon index
  329  np i
  330  yarn install
  331  npm instalar cors
  332  npm install --save consign
  333  npm install --save ejs
  334  composer require laravel/ui
  335  composer ui
  336  composer
  337  php artisan 
  338  php artisan ui:auth
  339  php artisan migrate
  340  docker-compose up -d mysql
  341  docker-compose -f docker-compose.phpmyadmin.yaml up -d
  342  sudo apt-get install -y libxshmfence-dev libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils
  343  nano .env
  344  php -S localhost:8080
  345  nodemn app
  346  np install
  347  php -v
  348  LS
  349  docker volumes
  350  docker ps
  351  docker compose down
  352  docker compose up -d
  353  node botzdg.js
  354  node app-bot
  355  node botzadg_numero_fantasma
  356  node botzdg_numero_fantasma
  357  oi
  358  node botzdgmysql
  359  echo "# bot" >> README.md
  360  git add . 
  361  push.autoSetupRemote
  362   git push --set-upstream origin main
  363  git commit -m "first commit" 
  364  git branch -M main 
  365  git remote add origin https://github.com/albertogomesdasilva/bot.git
  366   git push -u origin main
  367  npm install yarn
  368  yarn
  369  yarn start
  370  docker up -d
  371  docker 
  372  npm run start:dev
  373  npm run start
  374  node start:dev
  375  node botmysql
  376  node botmysql2
  377  nmp start
  378  echo "# albertobot" >> README.md
  379  git remote add origin https://github.com/albertogomesdasilva/albertobot.git
  380  git commit -am "first ok"
  381  nodemon botzdgmysql2
  382  node botzdg
  383  nodemon botzdgdialog
  384  cd whaticket\
  385  pm2 start dist/server.js --name whaticket-backend
  386  npm install --force
  387  cd backend\
  388  npx sequelize db:seed:all --force
  389  npx sequelize db:migrate
  390  npx sequelize db:seed:all
  391  node botzdgdialog
  392  node botzdgmysql2
  393  php -S localhost:800
  394  cd public\
  395  npm init -y
  396  npm install sequelize --save
  397  npm install --save mysql2
  398  mysql -u root 
  399  adonis key:generate
  400  npm init
  401  npm install express --save
  402  cd v
  403  dir
  404  cd app
  405  php server.php
  406  npm run dev --fix
  407  npm install normalize.css
  408  npm install bootstrap.npm install --save jquery popper.js
  409  npm install --save jquery popper.js
  410  npm install axios
  411  npm install bootstrap
  412  nrs
  413  npm install bootstrap-vue bootstrap
  414  npm install --save @fontawesome/fontawesome-free
  415  npm install --save @fortawesome/fontawesome-free
  416  npm install --save animate.css
  417  vue-server-renderer@2.6.14 
  418  vue-server-renderer -V
  419  vue-server-renderer --version
  420  vue-server-render --version
  421  npm run serve
  422  vue@3.3.4
  423  vue -V
  424  npm run build@3.3.4
  425  npm run dev@3.3.4
  426  npm start@3.3.4
  427  npm install @adonisjs/lucid@alpha
  428  node ace invoque @adonisjs/lucid
  429  node ace:migration posts
  430  node ace make:controller Posts -r
  431  nodemon app
  432  cd API-FacebookClone-master\
  433  node ace configure @adonisjs/lucid 
  434   npm install --save phpc-argon2
  435   npm install --save phc-argon2
  436  node ace serve --watch
  437  node ace make:controller Posts
  438  node ace invoke @adonisjs/lucid
  439  node ace make:migration posts
  440  node ace make:migration add_obs_collunm --table=posts
  441  node ace migration:rollback
  442  node ace make:model Post
  443  node ace make:model Despesa
  444  node ace make:controller Despesa -r
  445  node ace db:fresh
  446  node ace db:refresh
  447  git remote add origin https://github.com/albertogomesdasilva/despesas.git
  448  git sttus
  449  npm i @adonisjs/auth@alpha
  450  node ace invoke @adonisjs/auth
  451  node ace make:controller Auth -r
  452  node ace make:seeder FirstUser
  453  git commit -am "auth"
  454  git commit -am "api com aut"
  455  git commit -am "rotas protegidas com middleware"
  456  node ace make:middleware Acl
  457  node ace make:validator Despesa
  458  git commit -am "com nivel de acesso"
  459  git commit -am ".env addicionado"
  460  npm install  vuex-module-decorators
  461  npm i vuex-module-decorators
  462  npm i vue-module-decorators
  463  npm update
  464  npm i --save axios
  465  CD api
  466  npm i -g ts-node
  467  CD API
  468  cd crud\
  469  npm install next react react-dom
  470  cd api
  471  cd frontend\
  472  node ace make:validator Auth/StoreValidator
  473  node ace make:migration
  474  node ace make:migrations
  475  node ace migrations:run
  476   node ace configure @adonis/lucid
  477  node ace configure @adonisjs
  478  npm install @adonisjs/@lucid
  479  npm install @adonisjs/lucid
  480  node ace configure @adonis/lucid
  481  npm install @adonisjs/auth
  482  node ace make:controller Post
  483     
  484  node ace make:view index
  485  node ace make:view posts/index
  486  node ace make:view home
  487  node ace make:view about
  488  node ace make:view contact
  489  node ace make:view partials/navbar
  490  node ace make:view component/button
  491  npi @adonisjs/lucid
  492  npm i @adonisjs/lucid
  493  node ace config @adonisjs/lucid
  494  node ace configure @adonisjs/lucid
  495  node ace make:migration users
  496  node ace make:seeder User
  497  node ace make:model User
  498   npm install phc-argon2 --save
  499   npm install phc-argon2
  500  node ace db:run
  501  npm install --save bootstrap@5.2.1
  502  npm install --save bootstrap
  503   npm install sass-loader@^13.0.0 sass --save-dev
  504  node ace make:view layouts/main
  505  node ace make:view welcome
  506  node ace make:controller Auth
  507  node ace make:view auth/signup
  508  rd
  509  node ace make:view partials/toasts
  510  node ace make:view auth/login
  511  clea
  512  npm install -g node@latest
  513  npm i adonisjs/auth
  514  nvm -v
  515  npm i @adonisj/auth
  516  npm i @adonisjs/auth
  517  node ace configure @adonijs/auth
  518  node ace
  519  node ace configure
  520  node ace configure @adonisjs/auth
  521  node ace make:model Task -m
  522  node ace make:controller Task -r
  523  node ace make:view task/index
  524  node ace make:view task/create
  525  node ace make:validator CreateTask
  526  node ace migration:sttus
  527  node ace migration:status
  528  git remote add origin https://github.com/albertogomesdasilva/adonis-web-crud-tarefas.git
  529  git commit -am "primeiro commit"
  530  git push --set-upstream origin main
  531  git commit -am "aula 75"
  532  node --trace-warnings
  533  node ace make:view tasks/show
  534  git commit -am "aula 78 - formatar as páginas de detalhes das tarefas"
  535  node ace make:view components/priority
  536  node ace make:view tasks/edit
  537  git commit -am "editar tarefas"
  538  git commit -am "editar"
  539  ace node route:list
  540  CLEAR
  541  git commit -am "AULA 84 - Adding auth middleware"
  542  node ace make:middleware IsGuest
  543  npm i @adonisjs/shield
  544  node ace configure @adonisjs/shield
  545  NRD
  546  git commit -am "final - proteção crud de usuários diferentes do proprietário, crsf"
  547  git commit -am "final"
  548  git commit -am "ok final"
  549  node ace db:seed
  550  pwd
  551  cd build\
  552  node server.js
  553  cd build npm ci --production
  554  node serve.js
  555  ls
  556  cd ..
  557  npm run build
  558  cd build
  559  npm ci --production
  560  node server
  561  npm i @adonisjs/bouncer
  562  node ace configure @adonisjs/bouncer
  563  npm i @adonisjs/session
  564  node ace configure @adonisjs/session
  565  git commit -am "fim"
  566  git commit -am "okkk"
  567  git commit -am "ALL RIGHT"
  568  echo "# adonisjs-doc" >> README.md
  569  git add README.md
  570  git commit -m "first commit"
  571  git remote add origin https://github.com/albertogomesdasilva/adonisjs-doc.git
  572  git commit -am "o"
  573  git commit -am "okk"
  574  node db:seed
  575  node ace migration:fresh
  576  node ace list:route
  577  node ace routes:list
  578  node ace route:list
  579  node ace -h
  580  node ace list:routes
  581  git push -u origin main
  582  git commit -am "1"
  583  git commit -m "arquivo 2 criado"
  584  git commit -am "apagado"
  585  git reset --hard
  586  git reset --soft
  587  git reset 5bc
  588  git reset 2379dea461985a9a530087ee8e68248046146c20
  589  git commit -am "inicio"
  590  git commit -m "estapa2"
  591  git commit -am "esta 2"
  592  git reset d3ba
  593  git reset
  594  git estatus
  595  git commit -am "inicio 0"
  596  git commit -am "função criada"
  597  git commit -am "2.html criado"
  598  git commit -am "classe em 2.html"
  599  git commit -m "criada a classe 2.html"
  600  git reset 4b91f5630a25efad14e9b88669fd8ae4ea4ff11c
  601  git commit -m "2!
  602  git commit -m "2"
  603  git commit -am "2!
  604  git commit -am "2"
  605  git commit -am " segundo "
  606  git commit -am "primeiro comit"
  607  git commit -am "segundo commit"
  608  git commit -am "segunda linha criada"
  609  git commit -am "terceiro html"
  610  git reset 046a29093f99d7fe89f1c62fbfbaec8d7943905b
  611  git reset --hard f15ae59aa3afb23c2087ce15f6c017c2c9e45d5a
  612  git reset f15ae59aa3afb23c2087ce15f6c017c2c9e45d5a 
  613  git init
  614  git branch -M main
  615  git commit -am "primeiro"
  616  git commit -am "segundo"
  617  git commit
  618  git add.
  619  git commit -am "terceiro"
  620  git log
  621  git reset 510f96fb171e7496b533533dde97390d19e251cd
  622  git reset --hard 510f96fb171e7496b533533dde97390d19e251cd
  623  cls
  624  composer install
  625  pas
  626  git 
  627  git commit -m "ok"
  628  git commit -am "ok"
  629  git push
  630  npm install
  631  nvm node
  632  npm nvm
  633  nvm ls
  634  nvm -ls
  635  npm i nvm
  636  nvm use 12.18.3
  637  nvm -h
  638  npm install nvm
  639  node start
  640  cd src
  641  node app
  642  nvm
  643  node -v
  644  npm -v
  645  php -S localhost:8000
  646  node index
  647  nrd
  648  adonis serve-dev
  649  adonis serve --dev
  650  npm i --save mysql
  651  adonis --help >> README.md
  652  adonis install @adonisjs/mail
  653  adonis install adonis-acl
  654  npm i --save adonis-acl@legacy
  655  adonis acl
  656  ./ace acl:setup
  657  ace acl:setup
  658  node ace acl:setup
  659  adonis ace acl:setup
  660  adonis migration:run
  661  npm i
  662  npm i adonis-acl --save
  663  adonis acl:setup
  664  adonis install adonis-bumblebee --save
  665  adonis install --save adonis-bumblebee 
  666  adonis install adonis-bumblebee
  667  npm i --save adonis-bumblebee@legacy
  668  clear
  669  adonis install @adonisjs/websocket
  670  adonis install @adonisjs/validator
  671  adonis make:validator User
  672  npm i --save adonis-bumblebee
  673  npm start
  674  npm run dev
  675  node ace migration:run
  676  adonis --help
  677  adonis make:ehandler
  678  git init 
  679  git add .
  680  git commit -am "first commit"
  681  git checkout -b development
  682  git checkout
  683  git status
  684  git branch
  685  git config --global user.name 'albertogomesdasilva'
  686  git config --global user.email 'albertogomesdasilva@hotmail.com
  687  git config --global user.email 'albertogomesdasilva@hotmail.com'
  688  git remote add origin https://github.com/albertogomesdasilva/ecommerce-adonis.git
  689  git push -u origin --all
    1  cd
    2  e.
    3  pa tinker
    4  cp app/constants.php
    5  php -S  localhost:8000
    6  mkdir public
    7  copy con index.php
    8  composer init
    9  ls -la
   10  rm -rf .git
   11  git remote add origin https://github.com/albertogomesdasilva/curso-laravel10-docker.git
   12  docker-compose exec app bash
   13  php composer.phar dump-autoload -o
   14  php -S localhost:8000 -t public
   15   composer dump-autoload -o
   16  cd celke
   17  cd admin
   18  cd adm
   19  php -S localhost:8000 
   20  composer dump-autoload -o
   21  docker-compose up -d]
   22  docker-compose up -d --buid
   23  docker-compose up -d --build
   24  docker-composer down
   25  docker-compose down
   26  pa
   27  docker-compose up -d
   28  docker compose build
   29  php artisan
   30  ./vendor/bin/root artisan 
   31  ./vendor/bin/root php artisan
   32  vendor/bin/root php artisan
   33  mysql -u root -p
   34  ph -v
   35  php -V
   36  docker container ls
   37  docker stop all
   38  docker down
   39  docker image
   40  docker start 6bb891430fb6
   41  docker up 6bb891430fb6
   42  docker help
   43  docker run 6bb891430fb6
   44  docker run -e MYSQL_ROOT_PASSWORD=123456 6bb891430fb6
   45  docker container down
   46  docker stop dca54c828185
   47  docker run -e MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 -d
   48  docker run -d MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 
   49  docker run -e  -d MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 -d
   50  docker run -e   MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 bash
   51  docker run -e   MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6 | bash
   52  docker run -e   MYSQL_ROOT_PASSWORD='123456' 6bb891430fb6
   53  volumes
   54  volumes -l
   55  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /caminho/para/diretorio:/var/lib/mysql meu_mysql
   56  docker images
   57  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /caminho/para/diretorio:/var/lib/mysql 011343cf3ec3
   58  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3
   59  docker container
   60  docker container stop
   61  docker container stop all
   62  docker stop
   63  docker stop 62b3d459b12a
   64  docker stop 62b3d459b12a bash
   65  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 bash
   66  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 -d
   67  docker run -p 3306:3306 -e -it MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 
   68  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 it
   69  docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 -it
   70  docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v :/var/lib/mysql 011343cf3ec3 
   71  docker stop 62b3d459b12a 
   72  docker stop 3588e5cc3f15
   73  docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /caminho/para/diretorio:/var/lib/mysql meu_mysql
   74  docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /:/var/lib/mysql meu_mysql
   75  docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /:/var/lib/mysql docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /caminho/para/diretorio:/var/lib/mysql meu_mysql
   76   docker run -p 3306:3306 -d -e MYSQL_ROOT_PASSWORD=123456 -v /:/var/lib/mysql 011343cf3ec3
   77  docker stop cb34acb641a1
   78  php artissan make:model Despesa
   79  ./vendor/bin/sail artisan serve
   80  ./vendor/bin/sail artisan make:model Despesa
   81  ./vendor/bin/sail
   82  ./vendor/bin/sail up -d
   83  php artisan make:model Despesas -mf
   84  php artisan ui bootstrap
   85  npm install && npm run dev
   86  php artisan ui bootstrap --auth
   87  npm run watch
   88  npm install --global yarn
   89  npm init adonis-ts-app@4.0.2 roleplay-api
   90  yarn add sqlite3 -D
   91  node -r @adonisjs/assembler/build/register japaFile.ts
   92  yarn add japa execa@5.1.1 get-port@5.1.1 -D
   93  php artisan key:generate
   94  php filalament
   95  php filament
   96  php artisan make:filament-user
   97  docker stop 20220d55e404 
   98  docker stop d4aeb13f63b2
   99  docker stop 807e5bec8d35
  100  yarn add -D supertest @types/supertest
  101  npm test
  102  node ace --help
  103  node ace node:controller User
  104  node ace make:controller User
  105  yarn test
  106  node ace configure --help
  107  docke ps
  108  adonis serve -d
  109  npm install pg
  110  adonis migrations:run
  111  yarn add @adonisjs/lucid
  112  hystory
  113  hystory > hystory.md
  114  color red
  115  colo 9
  116  color
  117  color help
  118  color [0]
  119  color fc
  120  color f
  121  color w
  122  color e5
  123  doskey /history > historico.txt
  124  dockey /history
  125  dockey history
  126  doskey /history
  127  h
  128  help
  129  sc
  130  systeminfo
  131  php -S localhost:8000 -t /www
  132  php -S localhost:8000 -t www
  133  docker compose up 
  134  git help
  135  git help -g
  136  git commit -am "criado index.html"
  137  git commit -am "criado o teste.md"
  138   git push --set-upstream origin master
  139  git commit -m "criado o arquivo 1"
  140  echo Teste 1 > teste1.md
  141  git commit -am "criado o arquivo teste1"
  142  git add
  143  git checkout df8f6467c096e65c3f404d204db01cfd499af7f1
  144  git branch main
  145  git commit -am "push feito"
  146  git remote add origin https://github.com/albertogomesdasilva/2023-git-iniciando.git
  147  git commit -m "códigos finalizados"
  148  git merge linhatestes
  149  git pull
  150  git commit "fim"
  151  git commit -m "adicionado NOTAS.md"
  152  git branch linhatestes
  153  git checkout linhatestes
  154  echo TESTE.md > TESTE.md
  155  git commit -m "criado TESTE.md"
  156   git push --set-upstream origin linhatestes
  157  git checkout main
  158  git checkout 7339967e79bcf096d4ad536ed8630887ef3e6691
  159  git reset 7339967e79bcf096d4ad536ed8630887ef3e6691
  160  git reset 21c7b8067708d92cfb8b0dfe1004ece5c9702af5
  161  git reset b776edef278e1c9fd053b384737de78f56e89d98
  162  git reset --hard b776edef278e1c9fd053b384737de78f56e89d98
  163  git reset --soft  b776edef278e1c9fd053b384737de78f56e89d98
  164  git remote -v
  165  git remote remove origin
  166  git commit -m "ok final"
  167  ECHO ARQUIVO1.md
  168  ECHO ARQUIVO1 > ARQUIVo1.MD
  169  DEL ARQUIVo1.MD 
  170  echo 1 > 1
  171  echo echo 2 > 2
  172  echo 3 > 3
  173  git commit -m "123"
  174  echo 4 > 4
  175  git commit -m "1 2 3 4 log.md"
  176  echo a > A
  177  echo 5 > 5
  178  git commit -am " criou o 5"
  179  log > log.md
  180  git reset --soft e75630eaca89e3a84ed0bf8d50e7926e76ef0a55
  181  git reset --hard ac460f5ba2539cc8c28ad3d45f295a1421a2a872
  182  echo inicio > inicio.md
  183  git commit -m "inicio criado"
  184  echo primeiro > primeiro.md
  185  git add primeiro.md 
  186  git commit -m "criado primeiro.md"
  187  git reset --soft e1378baea6f1e521d8c06129f241591c528d58ab
  188  git reset --soft commit 82074e228884c6127a3e79c9df51deb3af42c680
  189  git reset --soft  82074e228884c6127a3e79c9df51deb3af42c680
  190  git reset --hard e1378baea6f1e521d8c06129f241591c528d58ab
  191  git reset --hard  82074e228884c6127a3e79c9df51deb3af42c680
  192  echo a > a.md
  193  git commit -am "criado o arquivo a.md"
  194  git log 
  195  git statu
  196  git log > log.md
  197  type index.js > log.md
  198  clink update
  199  type index.js >> log.md
  200  npm install node-fetch
  201  node --trace-warnings ...`
  202  git commit -m "commit inicial"
  203  npm add express
  204  git commit -m "adding express"
  205  npm install nodemon -g
  206  npm install dotenv
  207  git commit -m "projeto básico"
  208  git commit -m "página home ok"
  209  git commit -am "formulário passando os dados via post ok"
  210  git remote
  211  git remote add https://github.com/albertogomesdasilva/2023-git-iniciando
  212  git remote add https://github.com/albertogomesdasilva/2023-git-iniciando.git
  213  git commit -am "formulário passando os dados via pos ok"
  214  git commit -am "antes da view-engine"
  215  npm install express-edge
  216  npm install ejs
  217  npm uninstall edge
  218  git commit -am "projeto ejs express básico"
  219  git commit -am "projeto ejs express básico ok"
  220  node ace >> NOTAS.md
  221  node acee make:view login >> NOTAS.md
  222  node acee make:view login
  223  node ace make:view login
  224    const titulo = "Login";
  225  node ace make:controller --help
  226  node ace make:controller document
  227  node ace list:routes > listRoutes.md
  228  node ace make:view documents
  229  git commit -m "funcionando rota, controllers e view"
  230  node ace make:view jsons
  231  git commit -am "com rota json todos e com id"
  232  node ace routes:list >> NOTAS.md
  233  echo  Teste >> NOTAS.md
  234  node ace list:routes >> NOTAS.md
  235  git commit -am "funcionando get e push"
  236  git checkout 2e88e2e596893760e8c6014f95b46d5e30067f8b
  237  git checkout 3a3fbde3692698ee16ef0a059a36c9727b414e55
  238  git reset 3a3fbde3692698ee16ef0a059a36c9727b414e55
  239  git reset --hard 3a3fbde3692698ee16ef0a059a36c9727b414e55
  240  node ace make:view doc
  241  npm i @adonisjs/lucid >> README.md
  242  npm i @adonisjs/lucid 
  243  node ace migraton:run
  244  node ace make:migration add_last_login_column --table=users
  245  php artisan serve
  246  php artisan server
  247  php artisan migrate:fresh
  248  php artisan make:migration create_posts_table
  249  php artisan make:migration create_posts_table --create=posts
  250  php artisan make:model Post
  251  php artisan make:seeder PostTableSeeder 
  252  php artisan make:factory PostFacktory --model=Post
  253  php artisan db:seed
  254  php artisan migrate --seed
  255  php artisan make:factory PostFactory --model=Post
  256  php artisan make:controller PostController
  257  php artisan make:model Product -m
  258  php artisan make:controller ProductController -r
  259  php artisan make:factory ProductFactory --model=Product
  260  php artisan migrate:fresh --seed
  261  php artisan make:request ProductStoreRequest
  262  npx create-react-app api-laravel-infinite-scroll-consumer
  263  npm i react-router-dom --save
  264  pas 
  265  cd laravel-infinite-scrolling-com-api\
  266  cd react-consumer-api-laravel\
  267  ir
  268  npm i react-router-dom
  269  pm i
  270  cd api\
  271  npm run devc
  272  npm  i
  273  npm install express
  274  npm install typescript
  275  cd dist
  276  node main
  277  npx tsc
  278  node ./dist/main.js
  279  npm i typescript
  280  npm i ts-node-dev -D
  281  npm ts-node-dev
  282  npm install typescript tsc-node-dev -D
  283  npm install typescript ts-node-dev -D
  284  npx tsc --init
  285  ./src/main.ts >> README.md
  286  nodemon index.js
  287  npm i -g nodemon
  288  npm install mysql2 --sav
  289  npm install mysql2 --save
  290  node app.js
  291  echo Comando para instalar o driver do banco de dados mysql >> README.md
  292  echo ### npm install --save mysql2 >> README.md
  293   npm install --save mysql2 
  294  npm install express-handlebars
  295  npm install body-parser
  296  npm i --save sequelize
  297  npm i --save mysql2
  298  npm install --save express-session
  299  npm intall --save connect-flash
  300  npm install --save connect-flash
  301  npm install --save dotenv 
  302   npx sequelize-cli migration:generate --name:create-users
  303  npx sequelize-cli migration:generate --name create-users
  304  type README.md
  305  echo PROJETO NODEJS-CRUD > PROJETO.docx
  306  README.md >> PROJETO.docx
  307  type README.md >> PROJETO.docx
  308  type package.json  >> PROJETO.docx
  309  echo ### app.js >> README.md
  310  echo ### app.js >> PROJETO.docx
  311  npx sequelize-cli seed:generate --name criar-usuarios
  312  nodemon app.js
  313  npx install --save bcryptjs
  314  npm install --save bcryptjs
  315  npx sequelize-cli db:seed:all
  316   npx sequelize-cli db:migrate
  317  npm install --save express
  318  npm install --save dotenv
  319  npm install --save express-handlebars
  320  npm install --save sequelize
  321  npm install --save-dev sequelize-cli
  322  echo history
  323  npx sequelize-cli init
  324  process
  325  npm install fs
  326  node geralog.js
  327  node geralog
  328  nodemon index
  329  np i
  330  yarn install
  331  npm instalar cors
  332  npm install --save consign
  333  npm install --save ejs
  334  composer require laravel/ui
  335  composer ui
  336  composer
  337  php artisan 
  338  php artisan ui:auth
  339  php artisan migrate
  340  docker-compose up -d mysql
  341  docker-compose -f docker-compose.phpmyadmin.yaml up -d
  342  sudo apt-get install -y libxshmfence-dev libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils
  343  nano .env
  344  php -S localhost:8080
  345  nodemn app
  346  np install
  347  php -v
  348  LS
  349  docker volumes
  350  docker ps
  351  docker compose down
  352  docker compose up -d
  353  node botzdg.js
  354  node app-bot
  355  node botzadg_numero_fantasma
  356  node botzdg_numero_fantasma
  357  oi
  358  node botzdgmysql
  359  echo "# bot" >> README.md
  360  git add . 
  361  push.autoSetupRemote
  362   git push --set-upstream origin main
  363  git commit -m "first commit" 
  364  git branch -M main 
  365  git remote add origin https://github.com/albertogomesdasilva/bot.git
  366   git push -u origin main
  367  npm install yarn
  368  yarn
  369  yarn start
  370  docker up -d
  371  docker 
  372  npm run start:dev
  373  npm run start
  374  node start:dev
  375  node botmysql
  376  node botmysql2
  377  nmp start
  378  echo "# albertobot" >> README.md
  379  git remote add origin https://github.com/albertogomesdasilva/albertobot.git
  380  git commit -am "first ok"
  381  nodemon botzdgmysql2
  382  node botzdg
  383  nodemon botzdgdialog
  384  cd whaticket\
  385  pm2 start dist/server.js --name whaticket-backend
  386  npm install --force
  387  cd backend\
  388  npx sequelize db:seed:all --force
  389  npx sequelize db:migrate
  390  npx sequelize db:seed:all
  391  node botzdgdialog
  392  node botzdgmysql2
  393  php -S localhost:800
  394  cd public\
  395  npm init -y
  396  npm install sequelize --save
  397  npm install --save mysql2
  398  mysql -u root 
  399  adonis key:generate
  400  npm init
  401  npm install express --save
  402  cd v
  403  dir
  404  cd app
  405  php server.php
  406  npm run dev --fix
  407  npm install normalize.css
  408  npm install bootstrap.npm install --save jquery popper.js
  409  npm install --save jquery popper.js
  410  npm install axios
  411  npm install bootstrap
  412  nrs
  413  npm install bootstrap-vue bootstrap
  414  npm install --save @fontawesome/fontawesome-free
  415  npm install --save @fortawesome/fontawesome-free
  416  npm install --save animate.css
  417  vue-server-renderer@2.6.14 
  418  vue-server-renderer -V
  419  vue-server-renderer --version
  420  vue-server-render --version
  421  npm run serve
  422  vue@3.3.4
  423  vue -V
  424  npm run build@3.3.4
  425  npm run dev@3.3.4
  426  npm start@3.3.4
  427  npm install @adonisjs/lucid@alpha
  428  node ace invoque @adonisjs/lucid
  429  node ace:migration posts
  430  node ace make:controller Posts -r
  431  nodemon app
  432  cd API-FacebookClone-master\
  433  node ace configure @adonisjs/lucid 
  434   npm install --save phpc-argon2
  435   npm install --save phc-argon2
  436  node ace serve --watch
  437  node ace make:controller Posts
  438  node ace invoke @adonisjs/lucid
  439  node ace make:migration posts
  440  node ace make:migration add_obs_collunm --table=posts
  441  node ace migration:rollback
  442  node ace make:model Post
  443  node ace make:model Despesa
  444  node ace make:controller Despesa -r
  445  node ace db:fresh
  446  node ace db:refresh
  447  git remote add origin https://github.com/albertogomesdasilva/despesas.git
  448  git sttus
  449  npm i @adonisjs/auth@alpha
  450  node ace invoke @adonisjs/auth
  451  node ace make:controller Auth -r
  452  node ace make:seeder FirstUser
  453  git commit -am "auth"
  454  git commit -am "api com aut"
  455  git commit -am "rotas protegidas com middleware"
  456  node ace make:middleware Acl
  457  node ace make:validator Despesa
  458  git commit -am "com nivel de acesso"
  459  git commit -am ".env addicionado"
  460  npm install  vuex-module-decorators
  461  npm i vuex-module-decorators
  462  npm i vue-module-decorators
  463  npm update
  464  npm i --save axios
  465  CD api
  466  npm i -g ts-node
  467  CD API
  468  cd crud\
  469  npm install next react react-dom
  470  cd api
  471  cd frontend\
  472  node ace make:validator Auth/StoreValidator
  473  node ace make:migration
  474  node ace make:migrations
  475  node ace migrations:run
  476   node ace configure @adonis/lucid
  477  node ace configure @adonisjs
  478  npm install @adonisjs/@lucid
  479  npm install @adonisjs/lucid
  480  node ace configure @adonis/lucid
  481  npm install @adonisjs/auth
  482  node ace make:controller Post
  483     
  484  node ace make:view index
  485  node ace make:view posts/index
  486  node ace make:view home
  487  node ace make:view about
  488  node ace make:view contact
  489  node ace make:view partials/navbar
  490  node ace make:view component/button
  491  npi @adonisjs/lucid
  492  npm i @adonisjs/lucid
  493  node ace config @adonisjs/lucid
  494  node ace configure @adonisjs/lucid
  495  node ace make:migration users
  496  node ace make:seeder User
  497  node ace make:model User
  498   npm install phc-argon2 --save
  499   npm install phc-argon2
  500  node ace db:run
  501  npm install --save bootstrap@5.2.1
  502  npm install --save bootstrap
  503   npm install sass-loader@^13.0.0 sass --save-dev
  504  node ace make:view layouts/main
  505  node ace make:view welcome
  506  node ace make:controller Auth
  507  node ace make:view auth/signup
  508  rd
  509  node ace make:view partials/toasts
  510  node ace make:view auth/login
  511  clea
  512  npm install -g node@latest
  513  npm i adonisjs/auth
  514  nvm -v
  515  npm i @adonisj/auth
  516  npm i @adonisjs/auth
  517  node ace configure @adonijs/auth
  518  node ace
  519  node ace configure
  520  node ace configure @adonisjs/auth
  521  node ace make:model Task -m
  522  node ace make:controller Task -r
  523  node ace make:view task/index
  524  node ace make:view task/create
  525  node ace make:validator CreateTask
  526  node ace migration:sttus
  527  node ace migration:status
  528  git remote add origin https://github.com/albertogomesdasilva/adonis-web-crud-tarefas.git
  529  git commit -am "primeiro commit"
  530  git push --set-upstream origin main
  531  git commit -am "aula 75"
  532  node --trace-warnings
  533  node ace make:view tasks/show
  534  git commit -am "aula 78 - formatar as páginas de detalhes das tarefas"
  535  node ace make:view components/priority
  536  node ace make:view tasks/edit
  537  git commit -am "editar tarefas"
  538  git commit -am "editar"
  539  ace node route:list
  540  CLEAR
  541  git commit -am "AULA 84 - Adding auth middleware"
  542  node ace make:middleware IsGuest
  543  npm i @adonisjs/shield
  544  node ace configure @adonisjs/shield
  545  NRD
  546  git commit -am "final - proteção crud de usuários diferentes do proprietário, crsf"
  547  git commit -am "final"
  548  git commit -am "ok final"
  549  node ace db:seed
  550  pwd
  551  cd build\
  552  node server.js
  553  cd build npm ci --production
  554  node serve.js
  555  ls
  556  cd ..
  557  npm run build
  558  cd build
  559  npm ci --production
  560  node server
  561  npm i @adonisjs/bouncer
  562  node ace configure @adonisjs/bouncer
  563  npm i @adonisjs/session
  564  node ace configure @adonisjs/session
  565  git commit -am "fim"
  566  git commit -am "okkk"
  567  git commit -am "ALL RIGHT"
  568  echo "# adonisjs-doc" >> README.md
  569  git add README.md
  570  git commit -m "first commit"
  571  git remote add origin https://github.com/albertogomesdasilva/adonisjs-doc.git
  572  git commit -am "o"
  573  git commit -am "okk"
  574  node db:seed
  575  node ace migration:fresh
  576  node ace list:route
  577  node ace routes:list
  578  node ace route:list
  579  node ace -h
  580  node ace list:routes
  581  git push -u origin main
  582  git commit -am "1"
  583  git commit -m "arquivo 2 criado"
  584  git commit -am "apagado"
  585  git reset --hard
  586  git reset --soft
  587  git reset 5bc
  588  git reset 2379dea461985a9a530087ee8e68248046146c20
  589  git commit -am "inicio"
  590  git commit -m "estapa2"
  591  git commit -am "esta 2"
  592  git reset d3ba
  593  git reset
  594  git estatus
  595  git commit -am "inicio 0"
  596  git commit -am "função criada"
  597  git commit -am "2.html criado"
  598  git commit -am "classe em 2.html"
  599  git commit -m "criada a classe 2.html"
  600  git reset 4b91f5630a25efad14e9b88669fd8ae4ea4ff11c
  601  git commit -m "2!
  602  git commit -m "2"
  603  git commit -am "2!
  604  git commit -am "2"
  605  git commit -am " segundo "
  606  git commit -am "primeiro comit"
  607  git commit -am "segundo commit"
  608  git commit -am "segunda linha criada"
  609  git commit -am "terceiro html"
  610  git reset 046a29093f99d7fe89f1c62fbfbaec8d7943905b
  611  git reset --hard f15ae59aa3afb23c2087ce15f6c017c2c9e45d5a
  612  git reset f15ae59aa3afb23c2087ce15f6c017c2c9e45d5a 
  613  git init
  614  git branch -M main
  615  git commit -am "primeiro"
  616  git commit -am "segundo"
  617  git commit
  618  git add.
  619  git commit -am "terceiro"
  620  git log
  621  git reset 510f96fb171e7496b533533dde97390d19e251cd
  622  git reset --hard 510f96fb171e7496b533533dde97390d19e251cd
  623  cls
  624  composer install
  625  pas
  626  git 
  627  git commit -m "ok"
  628  git commit -am "ok"
  629  npm install
  630  nvm node
  631  npm nvm
  632  nvm ls
  633  nvm -ls
  634  npm i nvm
  635  nvm use 12.18.3
  636  nvm -h
  637  npm install nvm
  638  node start
  639  cd src
  640  node app
  641  nvm
  642  node -v
  643  npm -v
  644  php -S localhost:8000
  645  node index
  646  nrd
  647  adonis serve-dev
  648  adonis serve --dev
  649  npm i --save mysql
  650  adonis --help >> README.md
  651  adonis install @adonisjs/mail
  652  adonis install adonis-acl
  653  npm i --save adonis-acl@legacy
  654  adonis acl
  655  ./ace acl:setup
  656  ace acl:setup
  657  node ace acl:setup
  658  adonis ace acl:setup
  659  adonis migration:run
  660  npm i
  661  npm i adonis-acl --save
  662  adonis install adonis-bumblebee --save
  663  adonis install --save adonis-bumblebee 
  664  adonis install adonis-bumblebee
  665  npm i --save adonis-bumblebee@legacy
  666  adonis install @adonisjs/websocket
  667  adonis install @adonisjs/validator
  668  adonis make:validator User
  669  npm i --save adonis-bumblebee
  670  npm start
  671  npm run dev
  672  node ace migration:run
  673  adonis --help
  674  adonis make:ehandler
  675  git init 
  676  git commit -am "first commit"
  677  git checkout -b development
  678  git checkout
  679  git status
  680  git branch
  681  git config --global user.name 'albertogomesdasilva'
  682  git config --global user.email 'albertogomesdasilva@hotmail.com
  683  git config --global user.email 'albertogomesdasilva@hotmail.com'
  684  git remote add origin https://github.com/albertogomesdasilva/ecommerce-adonis.git
  685  git push -u origin --all
  686  adonis acl:setup
  687  git commit -am "configurado com websocket roles providers"
  688  adonis make:migration Image
  689  adonis make:migration UserImageFk
  690  git commit -am "criado as migrations user image e user_image de relacionamento"
  691  adonis make:migration Category
  692  adonis make:migration Product
  693  git commit -am "product and image relationship"
  694  adonis make:migration Coupon
  695  adonis make:migration Order
  696  adonis make:migration CouponOrder
  697  git commit -am "coupon_order"
  698  adonis make:migration OrderItem
  699  git add .
  700  git commit -am "order itens schema"
  701  git push
  702  clear
┌───────────────────┬──────────┬──────────────────────────────┬────────────┬───────────────┬────────┐
│ Route             │ Verb(s)  │ Handler                      │ Middleware │ Name          │ Domain │
├───────────────────┼──────────┼──────────────────────────────┼────────────┼───────────────┼────────┤
│ /                 │ HEAD,GET │ Closure                      │            │ home          │        │
├───────────────────┼──────────┼──────────────────────────────┼────────────┼───────────────┼────────┤
│ /v1/auth/register │ HEAD,GET │ Auth/AuthController.register │            │ auth.register │        │
├───────────────────┼──────────┼──────────────────────────────┼────────────┼───────────────┼────────┤
│ /v1/auth/login    │ POST     │ Auth/AuthController.login    │            │ auth.login    │        │
├───────────────────┼──────────┼──────────────────────────────┼────────────┼───────────────┼────────┤
│ /v1/auth/refresh  │ POST     │ Auth/AuthController.refresh  │            │ auth.refresh  │        │
├───────────────────┼──────────┼──────────────────────────────┼────────────┼───────────────┼────────┤
│ /v1/auth/logout   │ POST     │ Auth/AuthController.logout   │            │ auth.logout   │        │
└───────────────────┴──────────┴──────────────────────────────┴────────────┴───────────────┴────────┘
┌─────────────────────────┬──────────┬──────────────────────────────┬────────────┬───────────────┬────────┐
│ Route                   │ Verb(s)  │ Handler                      │ Middleware │ Name          │ Domain │
├─────────────────────────┼──────────┼──────────────────────────────┼────────────┼───────────────┼────────┤
│ /                       │ HEAD,GET │ Closure                      │            │ home          │        │
├─────────────────────────┼──────────┼──────────────────────────────┼────────────┼───────────────┼────────┤
│ /v1/auth/register       │ HEAD,GET │ Auth/AuthController.register │            │ auth.register │        │
├─────────────────────────┼──────────┼──────────────────────────────┼────────────┼───────────────┼────────┤
│ /v1/auth/login          │ POST     │ Auth/AuthController.login    │            │ auth.login    │        │
├─────────────────────────┼──────────┼──────────────────────────────┼────────────┼───────────────┼────────┤
│ /v1/auth/refresh        │ POST     │ Auth/AuthController.refresh  │            │ auth.refresh  │        │
├─────────────────────────┼──────────┼──────────────────────────────┼────────────┼───────────────┼────────┤
│ /v1/auth/logout         │ POST     │ Auth/AuthController.logout   │            │ auth.logout   │        │
├─────────────────────────┼──────────┼──────────────────────────────┼────────────┼───────────────┼────────┤
│ /v1/auth/reset-password │ POST     │ Auth/AuthController.forgot   │            │ auth.forgot   │        │
├─────────────────────────┼──────────┼──────────────────────────────┼────────────┼───────────────┼────────┤
│ /v1/auth/reset-password │ HEAD,GET │ Auth/AuthContoller.remember  │            │ auth.remember │        │
├─────────────────────────┼──────────┼──────────────────────────────┼────────────┼───────────────┼────────┤
│ /v1/auth/reset-password │ PUT      │ Auth/AuthController.reset    │            │ auth.reset    │        │
└─────────────────────────┴──────────┴──────────────────────────────┴────────────┴───────────────┴────────┘
┌───────────────────────────────┬───────────┬──────────────────────────────────┬────────────┬────────────────────┬────────┐
│ Route                         │ Verb(s)   │ Handler                          │ Middleware │ Name               │ Domain │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /                             │ HEAD,GET  │ Closure                          │            │ home               │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/auth/register             │ HEAD,GET  │ Auth/AuthController.register     │            │ auth.register      │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/auth/login                │ POST      │ Auth/AuthController.login        │            │ auth.login         │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/auth/refresh              │ POST      │ Auth/AuthController.refresh      │            │ auth.refresh       │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/auth/logout               │ POST      │ Auth/AuthController.logout       │            │ auth.logout        │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/auth/reset-password       │ POST      │ Auth/AuthController.forgot       │            │ auth.forgot        │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/auth/reset-password       │ HEAD,GET  │ Auth/AuthContoller.remember      │            │ auth.remember      │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/auth/reset-password       │ PUT       │ Auth/AuthController.reset        │            │ auth.reset         │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/admin/categories          │ HEAD,GET  │ Admin/CategoryController.index   │            │ categories.index   │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/admin/categories/create   │ HEAD,GET  │ Admin/CategoryController.create  │            │ categories.create  │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/admin/categories          │ POST      │ Admin/CategoryController.store   │            │ categories.store   │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/admin/categories/:id      │ HEAD,GET  │ Admin/CategoryController.show    │            │ categories.show    │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/admin/categories/:id/edit │ HEAD,GET  │ Admin/CategoryController.edit    │            │ categories.edit    │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/admin/categories/:id      │ PUT,PATCH │ Admin/CategoryController.update  │            │ categories.update  │        │
├───────────────────────────────┼───────────┼──────────────────────────────────┼────────────┼────────────────────┼────────┤
│ /v1/admin/categories/:id      │ DELETE    │ Admin/CategoryController.destroy │            │ categories.destroy │        │
└───────────────────────────────┴───────────┴──────────────────────────────────┴────────────┴────────────────────┴────────┘
### adonis make:controller Admin/Order --resource --type=http
