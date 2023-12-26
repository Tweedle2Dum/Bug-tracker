package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/controllers"
	"github.com/tweedle2dum/tracker/middlewares"
)

func userRouter(c fiber.Router) {
		c.Post("",controllers.CreateUser)
		c.Use(middlewares.CheckAuth)
		c.Get("",controllers.GetUser)
}