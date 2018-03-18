# webapp-template

This is my most latest thoughts on web app architecture. I will update this from time to time.

## Frontend

React by unejected `create-react-app`. This make sure it will be easier for us to move forward. No need to manually write Service Worker for now.

Redux for data store and [`glamor`](https://github.com/threepointone/glamor) for CSS.

## Backend

No ExpressJS or Restify. Instead of RESTful, we prefer pure Web Socket (no SockJS). Advantages:
* Auth once: no need to check auth cookies for every call
* Push updates: more like Server-Side Events but better
  * Same client code to handle update and request, `FETCH_FULFILLED` will be sent on response or update

Each client connection will have a Redux data store, storing very little to no data:
* `redux-saga` for handling incoming calls
* `redux-websocket-bridge` to send every actions over Web Socket to client

## Package management

Use [Lerna](https://lernajs.io) and hoist dev-only packages.

## DevOps and hosting

Docker and Kubernetes for deployment. GitHub push will update whole server infrastructure, including setting up and tearing down containers. Then host on Azure Container Services for Kubernetes (AKS) because cheapest node B1 cost only about USD 10 for each.
