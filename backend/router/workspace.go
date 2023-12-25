package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/controllers"
)


func workspaceRouter(c fiber.Router) {
	c.Get("",controllers.GetAllWorkspaces)
}