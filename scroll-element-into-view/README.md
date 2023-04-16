# Scroll Element into View

This project is the result of a technical spike and it's about to scroll different sections of the website into view after the respected navigation item has been clicked. We also want to preserve the hash routing functionality so that users can share different sections of the website via a URL link.

I used `useRef` hook to gain access to the DOM element that exposes the `scrollIntoView` function on. We call that function on navigation item click.

> **Note:**
>
> `useRef` hook is one of the escape hatches of React.

In our solution we are going break the UI down into relatively small components and because of that we'll have to "pass around" `ref`. The React documentation is against passing `ref` objects as simple `props`, so they provide a `forwardRef` constructor and a `useImperativeHandle` hook. We are going to use these these functions to implement a clean solution.

### Run the Project

```
$ yarn
$ yarn dev
```

### Useful Reads

- [Scroll a React component into view](https://robinvdvleuten.nl/post/scroll-a-react-component-into-view/)
- [HTML Element scrollIntoView() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

- [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)
- [React API Reference - useRef](https://react.dev/reference/react/useRef)
- [React API Reference - forwardRef](https://react.dev/reference/react/forwardRef)
- [React API Reference - useImperativeHanlde](https://react.dev/reference/react/useImperativeHandle)

Preserve the Hash Routing

- [Changing the URL hash without scrolling in Javascript](https://www.sean-lloyd.com/post/changing-the-url-hash-without-scrolling-javascript/)
- [History: pushState() method](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState)
