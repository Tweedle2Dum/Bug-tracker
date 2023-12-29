package controllers

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/db"
	"github.com/tweedle2dum/tracker/schemas"
)



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
	return c.Status(201).JSON(fiber.Map{"ok": true, "board": createdBoard})

}

func GetBoards(c *fiber.Ctx) error {
	workspaceIdString := c.Params("workspaceId")
	workspaceId,err := uuid.Parse(workspaceIdString)
	if err != nil {
		fmt.Println("Error parsing workspaceId:", err)
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": "Invalid workspaceId"})
	}
	
	fmt.Println("the workspaceId is: " + workspaceIdString)
	//Call getBoards function 
	boards, err := db.BoardsSvc.GetBoards(workspaceId)
	if err != nil {
        fmt.Println("Error fetching boards:", err)
        return c.Status(500).JSON(fiber.Map{"ok": false, "err": "Internal Server Error"})
    }
	return c.Status(201).JSON(fiber.Map{"ok": true, "boards": boards})

}

/*
func GetBoard(c *fiber.Ctx) error {

}


func UpdateBoard(c *fiber.Ctx) error {

}

func DeleteBoard(c *fiber.Ctx) error {

} */
