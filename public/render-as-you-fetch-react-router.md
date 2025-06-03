# Render as you Fetch (React Router Integration)

To demonstrate the `render-as-you-fetch` approach when you integrate the data loading logic into React Router:

- Open your developer tools and go to the Network tab
- Right click on any of the headers (Name, Status, Type)

  - Check that `Waterfall` header is enabled
  - Check that `Waterfall>Start Time` view is enabled

- Click on any of the `posts` below and observe the waterfall of the requests and the order in which the components are rendered!
- You should see something like this:

![alt text for screen readers](/screenshot-rayf.png 'Text to show on mouseover')

This should look roughly the same as the basic `render-as-you-fetch` example in terms of networking. Crucially, React Router takes over the responsability of aborting requests and all of that.

### ⚠️ Requests are and artificially slowed down!
