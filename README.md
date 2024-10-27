# todo_app_using_cqrs


# Create todo:

`curl --location 'http://localhost:3000/api/todos' \
--header 'Content-Type: application/json' \
--data '{
    "title": "NewTodo Added",
    "description": "NewTodo description"
}'`

# Get all todos

`curl --location 'http://localhost:3000/api/todos'`

# Get single todo

`curl --location 'http://localhost:3000/api/todos/671e15c73d892821d48ccd77' \
--data ''`

# Update todo
`curl --location --request PUT 'http://localhost:3000/api/todos/671e15c73d892821d48ccd77' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Todo1",
    "description": "Todo1 description",
    "completed": true
}'`