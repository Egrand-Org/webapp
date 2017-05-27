FROM node:0.12.7-wheezy

RUN apt-key adv --keyserver pgp.mit.edu --recv-keys 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
RUN echo "deb http://nginx.org/packages/mainline/debian/ wheezy nginx" >> /etc/apt/sources.list ENV NGINX_VERSION 1.7.12-1~wheezy RUN apt-get update && \ apt-get install -y ca-certificates nginx && \ rm -rf /var/lib/apt/lists/*

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80

WORKDIR /app

COPY ./package.json /app/
RUN npm install

COPY . /app/
RUN npm run build

CMD cp -r dist/* /usr/share/nginx/html/ && nginx -g 'daemon off;'
docker build -t webapp .
docker run -p 80:80 -e "NODE_ENV=production" webapp