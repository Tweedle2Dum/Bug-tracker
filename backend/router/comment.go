package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/controllers"
	"github.com/tweedle2dum/tracker/middlewares"
)


func commentRouter(c fiber.Router){

	c.Use(middlewares.CheckAuth)
	c.Post("/:taskId",controllers.CreateComment)
	c.Get("/:taskId",controllers.GetAllComments)

	
}