package router

import "github.com/gofiber/fiber/v2"

func userRouter(c fiber.Router) {
		c.Get("",func(c *fiber.Ctx) error{ return c.SendString("User router") })
}