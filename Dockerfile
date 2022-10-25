FROM node:18.10.0-alpine as build-deps

# Create app directory
WORKDIR /usr/src/app

ENV PATH /app/frontend/node_modules/.bin:$PATH

# Install app dependencies
COPY . ./

RUN cd frontend && pwd && ls -la && npm install

RUN cd frontend && pwd && ls -la && npm run build

FROM nginx:alpine
COPY --from=build-deps /usr/src/app/frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]