# Render as you Fetch

To demonstrate the `render-as-you-fetch` approach to getting data into a React application:

- Open your developer tools and go to the Network tab
- Right click on any of the headers (Name, Status, Type)

  - Check that `Waterfall` header is enabled
  - Check that `Waterfall>Start Time` view is enabled

- Click on any of the `posts` below and observe the waterfall of the requests and the order in which the components are rendered!
- You should see something like this:

![alt text for screen readers](/screenshot-rayf.png 'Text to show on mouseover')

We have effectively flatten the waterfall by loading all data in parallel and render the UI as we get the data! Now, getting data takes however the slowest request takes

### ⚠️ Requests are and artificially slowed down!
