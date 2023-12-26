package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/controllers"
	"github.com/tweedle2dum/tracker/middlewares"
)


func workspaceRouter(c fiber.Router) {
	c.Use(middlewares.CheckAuth)
	c.Get("",controllers.GetAllWorkspaces)
}