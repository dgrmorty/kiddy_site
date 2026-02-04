# Инструкция по загрузке на GitHub

## Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на https://github.com
2. Нажмите кнопку **"New"** или **"+"** → **"New repository"**
3. Заполните форму:
   - **Repository name**: `kiddy-site` (или любое другое имя)
   - **Description**: "Веб-сайт для IT-школы Kiddy"
   - Выберите **Public** или **Private** (по желанию)
   - **НЕ** ставьте галочки на "Add a README file", "Add .gitignore", "Choose a license" (всё уже готово)
4. Нажмите **"Create repository"**

## Шаг 2: Подключите локальный репозиторий к GitHub

После создания репозитория GitHub покажет инструкции. Выполните команды в папке `kiddy_site`:

```bash
cd d:\detivtope\kiddy_site
git remote add origin https://github.com/ВАШ_USERNAME/kiddy-site.git
git branch -M main
git push -u origin main
```

**Важно:** Замените `ВАШ_USERNAME` на ваш GitHub username и `kiddy-site` на имя вашего репозитория.

## Альтернативный способ (через SSH)

Если у вас настроен SSH ключ:

```bash
git remote add origin git@github.com:ВАШ_USERNAME/kiddy-site.git
git branch -M main
git push -u origin main
```

## Шаг 3: Проверка

После выполнения команд откройте ваш репозиторий на GitHub - все файлы должны быть там!

## Дальнейшая работа

После первого пуша, для обновления репозитория используйте:

```bash
git add .
git commit -m "Описание изменений"
git push
```

## Клонирование на другом устройстве

Чтобы получить проект на другом компьютере:

```bash
git clone https://github.com/ВАШ_USERNAME/kiddy-site.git
cd kiddy-site
```

Или через SSH:
```bash
git clone git@github.com:ВАШ_USERNAME/kiddy-site.git
cd kiddy-site
```

После клонирования просто откройте `main.html` в браузере - всё будет работать!
