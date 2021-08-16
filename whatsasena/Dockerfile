FROM fusuf/whatsasena:latest

RUN git clone https://github.com/mrclfd/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Jakarta
RUN npm install
RUN yarn install --no-audit

CMD ["node", "bot.js"]
