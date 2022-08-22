# используем yarn

# устновка 
npm install --global yarn

# создаем проект
yarn init

# устновка Express
yarn add express

# Express geting start
базовый код index.js из интернета

# установка nodemon (nodemonitor)
лучше локальная устновка и в devDepencies
yarn add nodemon -D

# запуск проекта
yarn nodemon index.js 

# дебагинг проекта
 💲 yarn nodemon --inspect index.js 

# 📌 TypeScript 
# установка
yarn add typescript ts-node @types/express @types/node -D

расширение файла - .ts

# компиляция index.ts
yarn tsc  index.ts

# инициализация TypeScript
yarn tsc --init

 💲 yarn tsc -w (в режиме наблюдения)

# Используем 2 терминала с командами  💲 или создаем в package.json
  "scripts": {
    "watch": "tsc -w",
    "dev": "nodemon .\\dist\\index.js"
  },


# Закачка файлов на сервер Multer:
Установка Multer
yarn add multer --save

Установка fs

