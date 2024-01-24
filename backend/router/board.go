package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/controllers"
)


func boardRouter(c fiber.Router) {
	c.Post("",controllers.PostBoard)
	c.Get("/:workspaceId",controllers.GetBoards)
}