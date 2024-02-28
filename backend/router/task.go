package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/controllers"
)


func taskRouter (c fiber.Router){
	c.Get(":columnId",controllers.GetAlltasks)
	c.Post(":columnId",controllers.CreateTask)
}