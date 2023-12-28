package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/controllers"
)


func boardRouter(c fiber.Router) {
	c.Get("",controllers.GetAllBoards)
	c.Post("",controllers.PostBoard)
}