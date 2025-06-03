# Fetch on Render

To demonstrate the `fetch-on-render` approach to getting data into a React application:

- Open your developer tools and go to the Network tab
- Right click on any of the headers (Name, Status, Type)

  - Check that `Waterfall` header is enabled
  - Check that `Waterfall>Start Time` view is enabled

- Click on any of the `posts` below and observe the waterfall of the requests and the order in which the components are rendered!
- You should see something like this:

![alt text for screen readers](/screenshot-for.png 'Text to show on mouseover')

This is a network waterfall! Since fetching data for comments doesn't start until we are done with the post itself, getting all the data takes the sum of the time that each individual request takes!

### ⚠️ Requests are and artificially slowed down!
