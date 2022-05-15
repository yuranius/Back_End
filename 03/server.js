const http = require("http");
const fs = require("fs");
const { resolve } = require("path");
const port = 3003;

const delay = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 3000);
	});
};

const readFile = (path) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path, (err, data) => {
			if (err) reject(err);
			else resolve(data);
		});
	});
};

const server = http.createServer(async (request, response) => {
	//создаем сервер и задаем его переменной

	switch (
		request.url //если в requeste в url`e будет:
	) {
		case "/home": {
			// setTimeout(() => {
			// 	const data = ",la bla bla";
			// 	response.write(data);
			// }, 5000);

			// задержка 5 сек
			// const start = new Date();
			// while(new Date() - start < 5000){
			//     console.log(new Date() - start);
			// }

			try {
				const home = await readFile("./pages/about.html");
				response.write(home);
				response.end();
			} catch (err) {
				response.write("error");
				response.end();
			}

			// Работа с файлами подключаем модуль fs

			break;
		}

		case "/about": {
			await delay(3000);
			response.write("ABOUT COURSE");
			response.end();
			break;
		}

		default: {
			response.write("404 not found");
			response.end();
		}
	}

	// response.end(); // Завершаем респонс какие данные к нам не пришли бы
});

// Поток один, клиентов много, нужно как можно быстрее отдать respons, т.к. Каждая отдача - это время ожидания

console.log("сервер запущен на порту: " + port);

server.listen(port); //запускаем сервер
