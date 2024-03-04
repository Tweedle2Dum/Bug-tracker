package router

import "github.com/gofiber/fiber/v2"

func MountRoutes(app *fiber.App) {
	app.Get("/api", func(c *fiber.Ctx) error { return c.SendString("Hello world, routes mounted!!") }) // logged in browers /api,if MountRoutes run

	//api routeObject group
	api := app.Group("/api") // api group

	//version group
	v1 := api.Group("/v1") // /api/v1 group

	//main routes
	userRoute := v1.Group("/user") //api/v1/user
	userRouter(userRoute)

	workspaceRoute := v1.Group("/workspace") //api/v1/workspace
	workspaceRouter(workspaceRoute)

	boardRoute := v1.Group("/board") //api/vi/board
	boardRouter(boardRoute)

	columnRoute := v1.Group("/columns") //api/v1/columns
	columnRouter(columnRoute)

	taskRoute  := v1.Group("/tasks") //api/v1/tasks
	taskRouter(taskRoute)

	commentRoute := v1.Group("/comments")//api/v1/comments
	commentRouter(commentRoute)

}
