

**Why we need Fetch API or Axios?**

1. **Fetch** — 
The Fetch API provides an interface for fetching resources (including across the network).
The Fetch API is a simple interface for fetching resources. It also supports the CORS. 
Fetch makes it easier to make web requests and handle responses than with the older XMLHttpRequest.

2. **Axios** — 
Axios is a library that helps us make HTTP requests to external resources. 
Axios Is More Secure, Featuring Built-In Cross-Site Forgery (XSRF) Protection.

This could be an external API or your own backend Node.js server, for example.
By making a request, you expect your API to perform an operation according to the request you made.

For example, if you make a GET request, you expect to get back data to display in your application.


### Ways of Fetching Data 
- using Fetch API
- using Axios library
- using async-await syntax
- using custom hooks
- using React Query library
- using GrapthQL API

```
import {useEffect} from "react";

useEffect(() => {
  fetchData();
  }, []);

```


#### 1. Fetching Data with Fetch API

Fetch API is built into most modern browsers on the window object (window.fetch) and enables us to make HTTP requests very easily using JavaScript promises.

```
const fetchData = () => {
return fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => console.log(data));}
```

#### 2. Fetching Data with Axois library

It does the same job as Fetch, but the main difference is that it already returns the result as JSON object, so we don't need to convert it.

```
const fetchData = () => {
return axios.get("https://randomuser.me/api/")
      .then((response) => console.log(response.data));}
```


#### 3.Fetching Data with Async-Await syntax

In ES7, it became possible to resolve promises using the async-await syntax.
The benefit of this is that it enables us to remove our .then() callbacks and simply get back our asynchronously resolved data.

```
async function fetchData() {
    try {
      const result = await axios.get("https://randomuser.me/api/")
      console.log(result.data));
    } catch (error) {
      console.error(error);
    }
  }

```



#### 4.Fetching Data with Custom Hook

We can use the library React-Fetch-Hook to extract the data from API. It includes already several properties we can use: data, error for errors handling and isLoading for loading issues.

npm install react-fetch-hook


```

import useFetch from "react-fetch-hook"

const {data} = useFetch("https://randomuser.me/api/");
console.log(data);

```

#### Axios pros : 
- request and response interception
- Streamlined errot handling
- Protection against cross-site request forgery (XSRF)
- Support for upload progress
- Response timeout
- Ability to cancel requests.
- Support for older browsers.
- Automatic JSON Data transformation.


**NOTE**
*Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns.*

**while making get request using axios, it shows error " No 'Access-Control-Allow-Origin' header is present on the requested resource.".**

solution is : 

1. add this in get statement 
```
get.(url, { 'headers' : { 'Access-Control-Allow-Origin' : '*'}})
```

2. If your backend is written in nodeJS then use CORS middle ware to solve this iusse. 
``` 
app.use(cors()).
```