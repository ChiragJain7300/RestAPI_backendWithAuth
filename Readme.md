# The Project Learnings

    The server is the entry file which means it contains all the server related code or express code.

    Then we create the routers for each route (contact, users, etc.)

    For each route we write a controller function so as to not cluster the router.

    In the controller file best practice is to write "desc, path and access"

    ## Error Handling
        In case of error handling we use a middleware.

        Be careful as error handling differs for async and sync methods
