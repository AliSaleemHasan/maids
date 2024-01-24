# Declarations about the implementation methods:

### Caching

- There are multiple methods and techniques used to cache HTTP requests in angular, many of which need
  full implementation from scratch (like creating in memory cash using map object), and validation of this method is considerably hard.

- using the latest Angular SSR (server-side rendering) is one of the above-mentioned methods, and it is (in my opinion) one of the best ways, it defaults to cache on the server disk, and each request of static pages is cached by default (and all get requests are cached), I could've removed this way and implement a cache; however, I think this is more convenient for both performance and code clarity

### Redux

Redux is used to save search queries and search results (if found)
the process is as follows:

1. the user writes a number (ID) to search for
2. this number is dispatched to the redux store as "SearchQuery"
3. a redux effect fires as correspondence to this state change and fetches single user data using API
   (MORE on that later )
4. The API results will be dispatched as user if found or the user in store will be set to null
5. The userSearch component will select the user and conditionally render it

   #### PS: there is no way to reset search results other than manually delete the search query

   #### Why I am getting user data from API instead of using a simple array? find function or by using redux

   - first (array. find): let's say that I have 3 pages of users, I got the first page of users, and after that, I entered 12 as my search query, which is a user on the second page, in this case no search results will appear because I am setting results to an array without compounding them together (without memory caching). This is because I care about memory also
   - second (redux): the same issue, redux will be a hard-to-implement and maintain way to cache and get users, and in some way, it may also store a lot of data (if the user navigates along dozens of pages) which will be a waste of time and memory

   and because I am using server-side rendering and server caching, retrieving data will be very fast after the first time which is ideal for both time and memory

### Finally: loading

I am using a simple "Loading..." text to show a loading state, the implementation is the same for all different components.
