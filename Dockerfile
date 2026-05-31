FROM nginx:alpine

LABEL maintainer="Praveen"

COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]