# запустить сервак

nodemon server.js
node server.js

# получить состояние сервера на порту

lsof -i tcp:3003

# убить процесс

kill -9 65159

# Запрсы на сервер

fetch('http://localhost:3003/api/users/123', {method: 'GET'})

fetch('http://localhost:3003/api/users/123', {method: 'POST', body: JSON.stringify{title:'JS', author:'yuranius'}}) - при post запросе можно передавать данные в формате json объекта

во вкладке Netowrk - Payload можно увидеть запрос 

PUT - как и POST только обновляем данные

PATCH - указываем те параметры, которые хотим обновить

# Request Headers - заголовки

поэтому если мы например отправляем в таком формате, то для сервера нужно указать тип json:
fetch('http://localhost:3003/api/users/123', {method: 'POST', body: JSON.stringify({title:'JS', author:'yuranius'}), headers: {"content-type": "application/json"}})

http status-code - 100-199, 200-299, 300-399, errors - 400-499, 500-599

