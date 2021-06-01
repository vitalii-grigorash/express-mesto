# Проект Mesto. REST API для одностраничного приложения.

---

## Стек

* Node.js
* Express
* MongoDB

## Директории

* `/models` – папка со схемами и моделями пользователя и карточки
* `/routes` — папка с файлами роутера  
* `/controllers` – папка с контроллерами

## Запуск проекта

Для запуска проекта:
1. Клонировать репозиторий
2. Установить зависимости `npm install`
3. Запустить проект `npm start`
4. Проект запускается на http://localhost:3000/

## Запросы

### Редактирование информации о пользователе

PATCH http://localhost:3000/users/me

В теле запроса передать объект вида

  {
    "name": "Жак-Ив Кусто",
    "about": "Исследователь океана"
  }
  
:heavy_check_mark: При успехе в ответе приходит обновлённый объект пользователя со статусом `200`.
  
:x: При попытке создать пользователя с некорректными данными приходит ответ со статусом `400` и ошибкой валидации.

### Редактирование аватара

PATCH http://localhost:3000/users/me/avatar

В теле запроса передать объект вида

  {
    "avatar": "https://ichef.bbci.co.uk/news/976/cpsprodpb/15C06/production/_109449098_catsstaring.jpg"
  }
  
:heavy_check_mark: При успехе в ответе приходит обновлённый объект пользователя со статусом `200`.
  
:x: При попытке создать пользователя с некорректными данными приходит ответ со статусом `400` и ошибкой валидации.

### Добавление карточки
  
POST http://localhost:3000/cards

В теле запроса передать объект вида

  {
    "name": "Новая карточка",
    "link": "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
  }
  
:heavy_check_mark: При успехе в ответе приходит объект карточки со статусом `201`.
  
:x: При попытке создать карточку с некорректными данными приходит ответ со статусом `400` и ошибкой валидации.
  
### Лайк карточки
  
PUT http://localhost:3000/cards/:id/likes
  
:heavy_check_mark: При успехе в ответе приходит обновлённый объект карточки со статусом `200`.
  
:x: При попытке лайкнуть карточку с несуществующим в базе id приходит ответ со статусом `404` и сообщением `Нет карточки с таким id`.

:x: При попытке лайкнуть карточку с некорректным id приходит ответ со статусом `400` и ошибкой валидации.
  
### Дизлайк карточки
  
DELETE http://localhost:3000/cards/:id/likes
  
:heavy_check_mark: При успехе в ответе приходит обновлённый объект карточки со статусом `200`.
  
:x: При попытке дизлайкнуть карточку с несуществующим в базе id приходит ответ со статусом `404` и сообщением `Нет карточки с таким id`.

:x: При попытке дизлайкнуть карточку с некорректным id приходит ответ со статусом `400` и ошибкой валидации.

### Удаление карточки
  
DELETE http://localhost:3000/cards/:id
  
:heavy_check_mark: При успехе в ответе приходит обновлённый объект карточки со статусом `200`.
  
:x: При попытке удалить чужую карточку приходит ответ со статусом `403` и сообщением `Недостаточно прав для выполнения операции`.

:x: При повторной попытке удалить карточку или попытке удалить карточку с несуществующим в базе id приходит ответ со статусом `404` и сообщением `Нет карточки с таким id`.

:x: При попытке удалить карточку с некорректным id приходит ответ со статусом `400` и ошибкой валидации.
