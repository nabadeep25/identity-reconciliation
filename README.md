
# Identity Reconciliation Task

## instructions 
### clone the repository
```
git clone https://github.com/nabadeep25/identity-reconciliation.git

```

### go to the project folder
```
cd identity-reconciliation/

```
### create .env file from .env.example
```
cp .env.example .env

```
 
### for running server and the database container
```
docker-compose up -d

```
 ### for creating table
 ```
 docker exec node-server npm run migrate

 ```
### for inserting sample row
 ```
 docker exec node-server npm run seed

 ```
## information
### PORT=8000
### API Endpoint :
```
localhost:8000/identify
```
