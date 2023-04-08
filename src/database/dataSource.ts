import { DataSource } from "typeorm";
import { Todo } from "./entity/Todo";

export const db = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [Todo],
    subscribers: [],
    migrations: [],
})

db.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))
