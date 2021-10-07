# nest-mysql-docker

```
# nest app
docker compose up -d
docker compose exec nest /bin/sh

cd nest-app

# 初回起動時のみ npm install (node_modulesがないので)
npm run start


# database
docker compose exec db /bin/sh

mysql -u user -p
```
