package controllers

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/db"
	"github.com/tweedle2dum/tracker/schemas"
)

func GetAllBoards(c *fiber.Ctx) error {
	return c.Status(200).SendString("Getallboards")
}

func PostBoard(c *fiber.Ctx) error {
	var board schemas.BoardSchema
	err := c.BodyParser(&board)
	if err != nil {
		fmt.Println("Bad request while posting board")
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": "Bad Request"})
	}
	fmt.Println("the board name is: " + board.Name)
	createdBoard, err := db.BoardsSvc.CreateBoard(board.WorkspaceId, board.Name, board.Description)
	if err != nil {
        fmt.Println("Error creating boards:", err)
        return c.Status(500).JSON(fiber.Map{"ok": false, "err": "Internal Server Error"})
    }
	return c.Status(201).JSON(fiber.Map{"ok": true, "user": createdBoard})

}

/*
func GetBoard(c *fiber.Ctx) error {

}


func UpdateBoard(c *fiber.Ctx) error {

}

func DeleteBoard(c *fiber.Ctx) error {

} */
