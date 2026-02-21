скачиваем проект с гита: git clone ссылка на репозиторий
далее, перед началом работы npm i, далее npm run de

Как создать ветку.
1. после скачивания проекта, открываем терминал и переходим в папку проекта: cd HeatedRivalryCoolForm
2. теперь создаем ветку: git branch название ветки
3. переключаемся на свою ветку: git checkout название ветки
4. отправляем ветку на github: git push origin название ветки

Теперь после изменений, чтоб они отправились на github, пишем:
git add .
git commit -m "Описание того, что сделала"
git push origin название вашей ветки

далее создаем pull request
5. Создание Pull Request
Через веб-интерфейс GitHub:
Зайди на страницу своего репозитория на GitHub

Появится уведомление о новой ветке - нажми "Compare & pull request"

Или перейди во вкладку "Pull requests" → "New pull request"

Выбери:

base: ветка, куда хочешь внести изменения (обычно main/master)

compare: твоя ветка

Заполни:

Title: заголовок PR

Description: подробное описание изменений

Нажми "Create pull request"

или gh pr create --title "Заголовок" --body "Описание"