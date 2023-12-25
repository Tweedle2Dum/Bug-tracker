package controllers

import "github.com/gofiber/fiber/v2"


func GetAllBoards(c *fiber.Ctx) error {
		return c.Status(200).SendString("Getallboards")
}
/* 
func GetBoard(c *fiber.Ctx) error {

}

func PostBoard(c *fiber.Ctx) error {

}

func UpdateBoard(c *fiber.Ctx) error {

}

func DeleteBoard(c *fiber.Ctx) error {

} */