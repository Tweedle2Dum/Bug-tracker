package controllers

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/db"
	"github.com/tweedle2dum/tracker/schemas"
)

func CreateTask(c *fiber.Ctx) error {
	columnId := c.Params("columnId")

	if columnId == "" {
		fmt.Println("ColumnId not provided in the URL")
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": "ColumnId not provided"})
	}
	uuid,err := uuid.Parse(columnId)
	if err!= nil {
		fmt.Println("Not a valid UUID")
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": "Not a valid UUID"})

	}
	var task schemas.TaskSchema
	err = c.BodyParser(&task)
	if err != nil {
		fmt.Println("Error occured while parsing the Task Schema", err)
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": err})
	}
	createdTask, err := db.TasksSvc.CreateTask(uuid, task.Name, task.Description)
	if err != nil {
		fmt.Println("Error occured while creating the Task ", err)
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": err})

	}
	return c.Status(200).JSON(fiber.Map{"ok": true, "task": createdTask})

}

func GetAlltasks(c *fiber.Ctx) error {
	columnId := c.Params("columnId")
	if columnId == "" {
		fmt.Println("ColumnId not provided in the URL")
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": "ColumnId not provided"})
	}
	uuid,err := uuid.Parse(columnId)
	if err!= nil {
		fmt.Println("Not a valid UUID")
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": "Not a valid UUID"})

	}
	tasks, err := db.TasksSvc.GetAllTasks(uuid)
	if err != nil {
		fmt.Println("Error occured while getting all the task  ", err)
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": err})

	}
	return c.Status(200).JSON(fiber.Map{"ok": true, "tasks": tasks})
}
