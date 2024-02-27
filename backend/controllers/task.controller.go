package controllers

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/db"
	"github.com/tweedle2dum/tracker/schemas"
)

func CreateTask(c *fiber.Ctx) error {
	var task schemas.TaskSchema
	err := c.BodyParser(&task)
	if err != nil {
		fmt.Println("Error occured while parsing the Task Schema", err)
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": err})
	}
	createdTask, err := db.TasksSvc.CreateTask(task.ColumnID, task.Name, task.Description)
	if err != nil {
		fmt.Println("Error occured while creating the Task ", err)
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": err})

	}
	return c.Status(200).JSON(fiber.Map{"ok": true, "task": createdTask})

}

func GetAlltasks(c *fiber.Ctx) error {
	var task schemas.TaskSchema
	err := c.BodyParser(&task)
	if err != nil {
		fmt.Println("Error occured while parsing the task schema ", err)
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": err})

	}
	tasks, err := db.TasksSvc.GetAllTasks(task.ColumnID)
	if err != nil {
		fmt.Println("Error occured while getting all the task  ", err)
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": err})

	}
	return c.Status(400).JSON(fiber.Map{"ok": false, "tasks": tasks})
}
