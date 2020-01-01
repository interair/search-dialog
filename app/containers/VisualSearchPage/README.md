## Visual Search Page

<img src="http://react-api.webfortest.ru/imgReadMe/1.png" alt="react boilerplate banner" align="center" />

### Visual search
* Part to Match: Default Image: place holder
* Upload Image: Choose image for search
* Attributes: fetches during page loading 
  ```
  request: GET /?attr-list
  response: 
  {"attr":[{"id":1,"name":"TagsFromServer","value":[{"value":1,"name":"Tag from server 1"},{"value":2,"name":"Tag from server 2"}]},{"id":2,"name":"MaterialFromServer","value":[{"value":1,"name":"Material from server 1"}]}]}
  ```
* Reset
* Search

## Result Of Search
<img src="http://react-api.webfortest.ru/imgReadMe/2.png" alt="react boilerplate banner" align="center" />

* API according discussion loads full result set and shows first 10 with `LOAD MORE` button…
 ```request: POST  fileUpload
    response: 
    {"img":["http:\/\/react-api.webfortest.ru\/img\/2.png","http:\/\/react-api.webfortest.ru\/img\/3.png","http:\/\/react-api.webfortest.ru\/img\/4.png"]}
```


## What is not done:

1.	Styles
2.	API
4.	3-d model
5.	DOWNLOAD PART


## Question
1.	API
2.	3-d model examples?
3.	how to fetch 3-d model?


## Project
<dl>
    <dt>Npm run generate</dt>
    <dt>App / containers / VisualSearchPage</dt>
    <dt>It contains components and style</dt>
</dl>
