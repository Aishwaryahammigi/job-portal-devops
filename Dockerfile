FROM nginx:alpine

LABEL maintainer="Veerabhadrappa Hoolikatti"
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]