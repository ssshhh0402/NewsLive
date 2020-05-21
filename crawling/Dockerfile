#어떤 이미지로부터 새로운 이미지를 생성할지를 지정
FROM node:12.14.1
LABEL name "puppeteraas"

#Dockerfile 을 생성/관리하는 사람
MAINTAINER Dae Yoon <sensecodevalue@gmail.com>

# /app 디렉토리 생성
# http://www.hardkoded.com/blog/puppeteer-sharp-docker 참고
# npm install 을 실행
RUN apt-get update && apt-get install -yq libgconf-2-4

RUN apt-get update && apt-get install -y wget --no-install-recommends \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst ttf-freefont \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get purge --auto-remove -y curl \
    && rm -rf /src/*.deb
ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init


RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN npm install
RUN npm install -g pm2 node-gyp
ENV NODE_ENV development

RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser ./node_modules

USER pptruser

EXPOSE 3777 80

#컨테이너에서 실행될 명령을 지정
CMD ["pm2-docker", "index.js"]