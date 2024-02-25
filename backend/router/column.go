package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/controllers"
)


func columnRouter (c fiber.Router){
	c.Post("",controllers.CreateColumn)
	c.Get("/:boardId",controllers.GetAllColumns)
}