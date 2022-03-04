# Logging and Error Handling Middlewares For Express

Tired of repeating ugly try/catchs inside your code. Well, you can use these middlewares to capture all endpoint errors, even async ones. Tested with express version 4. Winston library is used as a logger with custom formatting(colorful stuff).

Things to be aware of:

- For logging reponse and requests you need to app.use() before endpoints
- For error handling you need to app.use() after endpoints
- To catch async error you need to add "express-async-errors" library
