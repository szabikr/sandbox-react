# Sundaes on Demand

This repository is the result of a course I did on React Testing Library.

Udemy course: [Testing React with Jest and React Testing Library](https://www.udemy.com/share/1040ZS3@CFdCKI5ithkwOYGf-YeYUq3_40mXz7F_x2ZIQxDPcX5jhDmrSme2g_-FVCr7coeB/) by [Bonnie Schulkin](https://bonnie.dev/)

It's a small application that allows the user to order **Sundaes** (psst - no deliveries will actually be made).

## Technologies

- React
- create-react-app
- React Testing Library
- Jest
- [Mock Service Worker](https://mswjs.io/)
- React Bootstrap
- axios
- eslint
- prettier

## TDD

The development of this project used the TDD approach. Rarely looked at the application running in the browser, and it was actually quite refreshing not to click away in the browser, but to use the red, green, refactor approach.

## Business Logic

The application has 3 high level states that guide the user through creating, reviewing and ordering their ice cream.

![application state machine](assets/app-state-machine.png)

To implement this state machine across all the React components and to create an application level state we used a React Context as it's defined in this article: [Application State Management with React](https://kentcdodds.com/blog/application-state-management-with-react)

While the application is `inProgress` the user has the ability to choose from scoops and toppings that came from the server as HTTP responses. We use Mock Service Worker in order to mock these requests. This allows us developers to test the application in a way that a real user would.

Implemented validation for the scoops, at least one scoops is mandatory and it has an upper and a lower limit.

`review`: Before the user confirms the order they look through the summary and agree to the Terms and Conditions.

`completed`: Finally, a server will respond with an order number for all orders.

## Static Code Analysis

We configured ESLint and Prettier to make our code clean and nicely formatted.
