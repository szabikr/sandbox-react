# Scroll Element into View

This project is the result of a technical spike and it's about to scroll different sections of the website into view after the respected navigation item has been clicked. We also want to preserve the hash routing functionality so that users can share different sections of the website via a URL link.

I used `useRef` hook to gain access to the DOM element which I can call `scrollIntoView` function on a click event. This hook is one of the escape hatches of React.

### Run the Project

```
$ yarn
$ yarn dev
```

### Useful Reads

- [Scroll a React component into view](https://robinvdvleuten.nl/post/scroll-a-react-component-into-view/)
- [React API Reference - useRef](https://react.dev/reference/react/useRef)
- [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)
- [HTML Element scrollIntoView() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

Preserve the Hash Routing

- [Changing the URL hash without scrolling in Javascript](https://www.sean-lloyd.com/post/changing-the-url-hash-without-scrolling-javascript/)
- [History: pushState() method](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState)
