package router

import "github.com/gofiber/fiber/v2"


func commentRouter(c fiber.Router){
	c.Get("")
	c.Post(":taskId")
}