import app from "./api/app.js"
import LOGGER from "./config/logger.js";

const PORT = 3000

app.listen(PORT, () => {LOGGER.info(`Server is running at port ${PORT}`)});


