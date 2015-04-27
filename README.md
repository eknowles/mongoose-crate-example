Created to help out [this guy](http://stackoverflow.com/questions/29859490/how-to-store-a-file-with-mongoose-crate-via-an-express-route)

### Requirements:

* [Node.js](http://nodejs.org/download/) (with npm)
* [MongoDB](http://www.mongodb.org/downloads)

### Installation:

```bash
$ git clone git://github.com/eknowles/mongoose-crate-example ./my-app
$ cd my-app
$ npm install
$ touch .env
```

### Setup:

Add your Amazon creds to the env file
```
KEY=MYKEY
SECRET=MYSECRET
BUCKET=mybucketname
```

After installing, start the application using Node:

```bash
$ node server.js
```

You can now view the application in your browser by navigating to [http://localhost:3000/](http://localhost:3000/)
