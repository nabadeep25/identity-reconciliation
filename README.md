
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
### make POST request to localhost:8000/identify
```
sample POST request body
{
"email":"mcfly@hillvalley.edu",
"phoneNumber":"123456"
}
```
## information
### Sample data inserted by above seed command
```
      {
        email: "lorraine@hillvalley.edu",
        phoneNumber: "123456",
        linkPrecedence: "primary",
        createdAt: "2023-04-01 00:00:00.374+00",
        updatedAt: "2023-04-01 00:00:00.374+00",
      }

      {
        email: "mcfly@hillvalley.edu",
        phoneNumber: "123456",
        linkPrecedence: "secondary",
        linkedId: 1,
        createdAt: "2023-04-20 05:30:00.11+00",
        updatedAt: "2023-04-20 05:30:00.11+00",
      }
```
### PORT=8000
### API Endpoint :
```
POST localhost:8000/identify
```
### API Request body
```
{
"email":"mcfly@hillvalley.edu",
"phoneNumber":"123456"
}
```
