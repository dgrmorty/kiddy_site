# Инструкция по деплою на GitHub Pages

## Структура проекта

Проект теперь имеет правильную структуру для деплоя:

```
kiddy_site/
├── index.html          # Главная страница
├── .nojekyll          # Отключает Jekyll на GitHub Pages
├── assets/             # Видео и логотипы
│   ├── kiddy.mp4
│   └── logo.png
├── css/               # Все CSS файлы
│   ├── all.min.css
│   ├── index-Bj8H20fg.css
│   ├── css2
│   ├── remixicon.css
│   └── modal.css
├── js/                # Все JavaScript файлы
│   ├── index-n7Ys4e3Q.js
│   ├── array.full.min.js
│   └── modal.js
└── images/            # Все изображения
    ├── search-image
    ├── search-image(1)
    ├── ...
    ├── modal-level-1.jpg
    ├── modal-level-2.jpg
    ├── modal-level-3.jpg
    └── modal-level-4.jpg
```

## Деплой на GitHub Pages

### Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на https://github.com
2. Нажмите **"New repository"**
3. Заполните форму:
   - **Repository name**: `kiddy-site` (или любое другое имя)
   - Выберите **Public**
   - **НЕ** ставьте галочки на "Add a README file", "Add .gitignore", "Choose a license"

### Шаг 2: Инициализируйте Git (если еще не сделано)

```bash
cd D:\detivtope\kiddys\kiddy_site
git init
git add .
git commit -m "Initial commit - refactored structure"
```

### Шаг 3: Подключите к GitHub

```bash
git remote add origin https://github.com/ВАШ_USERNAME/kiddy-site.git
git branch -M main
git push -u origin main
```

**Важно:** Замените `ВАШ_USERNAME` на ваш GitHub username.

### Шаг 4: Включите GitHub Pages

1. Перейдите в настройки репозитория: **Settings** → **Pages**
2. В разделе **Source** выберите:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Нажмите **Save**

### Шаг 5: Проверьте сайт

Через несколько минут ваш сайт будет доступен по адресу:
```
https://ВАШ_USERNAME.github.io/kiddy-site/
```

## Деплой на обычный хостинг

Просто загрузите все файлы из папки `kiddy_site` на ваш хостинг через FTP или панель управления. Структура уже правильная, все пути относительные и будут работать на любом хостинге.

## Важные изменения

✅ Все пути исправлены (убраны `./`, используются абсолютные пути от корня)
✅ Файлы с проблемными именами переименованы
✅ Структура оптимизирована (css/, js/, images/, assets/)
✅ Создан `index.html` (главная страница)
✅ Создан `.nojekyll` (для GitHub Pages)
✅ Все дублирующиеся файлы объединены

## Проверка перед деплоем

Убедитесь, что:
- ✅ Файл `index.html` существует
- ✅ Все пути в HTML начинаются с `css/`, `js/`, `images/`, `assets/` (без `./`)
- ✅ Файл `.nojekyll` создан
- ✅ Все файлы находятся в правильных папках
