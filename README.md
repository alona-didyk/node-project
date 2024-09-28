# node-project

**model view controller** - separation of concerns

models - objects, represent data in our code and works with it
views - what the user sees
controllers - connecting models and views (routes are above it)

**Databases**

Sql (MySql) - has tables with fields and we fill rows (data) in these tables. They allow to relate different tables. Characteristics: data schema, data relations, queries (commands used to interact with the data base). Horizontal scalling is difficult, vertical is possible. Limitations for lots of read and write queries per second
NoSql (MongoDb) - has collections (tables) with records, no strict collections, duplicate data (no relations). Characteristics: no data schema, no data relations. Both horizontal and vertical scalling are possible. Great performace for mass read and write requests.

**Horizontal scalling** add more servers (and merge data into one database)
**Vertical scalling** improve server capacity / hardware

look how to use mysql in database.js
