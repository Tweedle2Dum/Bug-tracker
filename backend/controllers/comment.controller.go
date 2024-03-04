package controllers

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/db"
	"github.com/tweedle2dum/tracker/schemas"
)

func CreateComment(c *fiber.Ctx) error {
	userEmail := c.Locals("userEmail").(string)
	taskId := c.Params("taskId")
	if taskId == "" {
		fmt.Println("TaskId not provided in the URL")
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": "TaskId not provided"})
	}
	fmt.Println("This is the taskID" + taskId)
	var commentData schemas.CommentSchema
	err := c.BodyParser(&commentData)
	if err != nil {
		log.Fatal(err)
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": "Some error in parsing comment data"})
	}
	uuid, err := uuid.Parse(taskId)
	if err != nil {
		log.Fatal(err)
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": "Some error in uuid, unable to parse"})
	}
	user, err := db.UsersSvc.FetchProfileByEmail(userEmail)
	if err != nil {
		log.Fatal(err)
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": "Error retrieving user"})
	}

	createdComment, err := db.CommentsSvc.CreateComment(commentData.Text, uuid, user.ID)
	if err != nil {
		log.Fatal(err)
		return c.Status(500).JSON(fiber.Map{"ok": false, "err": "Error creating comment"})
	}
	return c.Status(201).JSON(fiber.Map{"ok": true, "comment": createdComment})

}

func GetAllComments(c *fiber.Ctx) error {
	taskId := c.Params("taskId")

	if taskId == "" {
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": "TaskId not provided"})
	}

	// Parse taskId to UUID
	uuid, err := uuid.Parse(taskId)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": "Some error in uuid, unable to parse"})
	}

	// Retrieve all comments for the specified taskId
	comments, err := db.CommentsSvc.GetAllComments(uuid)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"ok": false, "err": "Error retrieving comments"})
	}

	// Return the comments as a JSON response
	return c.Status(200).JSON(fiber.Map{"ok": true, "comments": comments})
}
