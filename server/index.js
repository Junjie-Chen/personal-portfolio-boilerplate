const application = require('./app');
const { app, sessionStore, createApp, syncDatabase } = application;
const port = process.env.PORT || 8080;

const startListening = () => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
  });
};

if (require.main === module) {
  sessionStore.sync()
  .then(syncDatabase)
  .then(createApp)
  .then(startListening);
} else {
  createApp();
}
