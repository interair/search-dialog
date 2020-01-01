## Visual Search Page

<img src="http://react-api.webfortest.ru/imgReadMe/1.png" alt="react boilerplate banner" align="center" />

<div align="center"><strong>Визуальный поиск</strong></div>
<br />
<dl>
  <dt>Part to Match</dt>
  <dd>Default картинка, просто визуализация, по ней поиск не идет</dd>
    
  <dt>Upload Image</dt>
  <dd>выбор изображения для поиска</dd>
  
  <dt>Attributes</dt>
  <dd>при загрузке страницы запрос на сервер получения списка атрибутов</dd>
  <dd>api</dd>
  <dd>request</dd>
  <dd>http://react-api.webfortest.ru/?attr-list</dd>
  <dd>response</dd>
  <dd>{"attr":[{"id":1,"name":"TagsFromServer","value":[{"value":1,"name":"Tag from server 1"},{"value":2,"name":"Tag from server 2"}]},{"id":2,"name":"MaterialFromServer","value":[{"value":1,"name":"Material from server 1"}]}]}</dd>

  <dt>Reset </dt>
  <dd>сброс данных</dd>
  
  <dt>Search</dt>
  <dd>поиск по выбранным параметрам</dd>
</dl>

## Result Of Search
<img src="http://react-api.webfortest.ru/imgReadMe/2.png" alt="react boilerplate banner" align="center" />
<br />
<dl>
  <dd>Получаю полный результат поиска, показываю первые 10 + кнопка LOAD MORE…</dd>
  <dd>На данный момент, для примера, загружаю выбранный файл и в ответе отдаю все имеющиеся файлы. Изображения при загрузке не дублируются, проверка по имени.</dd>
  <dt>api</dt>
  <dd>request</dd>
  <dd>http://react-api.webfortest.ru/?search</dd>
  <dd>POST  fileUpload</dd>
  <dd>response</dd>
  <dd>{"img":["http:\/\/react-api.webfortest.ru\/img\/2.png","http:\/\/react-api.webfortest.ru\/img\/3.png","http:\/\/react-api.webfortest.ru\/img\/4.png"]}</dd>
  
</dl>


## Что не доделал

1.	Верстка, нужно увидеть проект, чтоб под него сверстать
2.	Выборка атрибутов не multi-select
3.	При поиске передаю только картинку, для примера этого достаточно, добавлю атрибуты, как будет пример api.
4.	Построение 3-d модели при клике на изображение
5.	DOWNLOAD PART


## Вопросы
1.	Api запрос атрибутов, поиска и, если таковой будет, запрос 3-d модели по выбранному изображению из результата поиска
2.	Пример файлов для 3-d модели
3.	3-d модель изображения получаю при поиске или это отдельный запрос (клик по изображению из результата поиска)
4.	DOWNLOAD PART, все картинки или одна, которая была выбрана


## По структуре контейнера. 
<dl>
    <dt>Npm run generate</dt>
    <dt>App / containers / VisualSearchPage</dt>
    <dt>В нем свои components и style , потом сделаю по правилам проекта.</dt>
</dl>
