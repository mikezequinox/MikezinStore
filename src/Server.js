import app from "./api/app.js"
import LOGGER from "./config/logger.js";
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import { initAllRoutes } from "./api/routes.js"
>>>>>>> Stashed changes
=======
import { initAllRoutes } from "./api/routes.js"
>>>>>>> 6794707fdb8e4cf9774f20c4c54abfc205cbaced

const PORT = 3000

initAllRoutes(app)

app.listen(PORT, () => {LOGGER.info(`Server is running at port ${PORT}`)});


