## Use Node Slim image
FROM node:14-slim
WORKDIR /usr/src/app
## Copy source code
COPY dist/ /usr/src/app/dist/
## Start the application
CMD ["node", "dist/tailwindcssAngular/server/main.js"]