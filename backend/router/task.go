package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/controllers"
	"github.com/tweedle2dum/tracker/middlewares"
)


func taskRouter (c fiber.Router){
	c.Get(":columnId",controllers.GetAlltasks)
	c.Use(middlewares.CheckAuth)
	c.Post(":columnId",controllers.CreateTask)
}