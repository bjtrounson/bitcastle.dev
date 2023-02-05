FROM nginx:alpine
LABEL authors="bitcastle"

RUN npm run build
COPY site /usr/share/nginx/html