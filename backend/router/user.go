package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/controllers"
)

func userRouter(c fiber.Router) {
		c.Get("",func(c *fiber.Ctx) error{ return c.SendString("User router") })
		c.Post("",controllers.CreateUser)
}