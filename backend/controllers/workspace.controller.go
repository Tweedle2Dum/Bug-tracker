package controllers

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/db"
	"github.com/tweedle2dum/tracker/schemas"
)


func GetAllWorkspaces(c *fiber.Ctx) error {
		return c.Status(200).SendString("Getallworkspaces")
}

func PostWorkspace(c *fiber.Ctx) error {
	var workspace schemas.WorkspaceSchema
	userEmail := c.Locals("userEmail").(string)
	fmt.Println(userEmail)
	err := c.BodyParser(&workspace)
	if(err != nil) {
		fmt.Println("Bad request while posting user")
		return c.Status(400).JSON(fiber.Map{"ok":false,"err":"Bad Request"})
	}
	fmt.Println("the workspace name is: "+ workspace.Name)
	//user model

	createdWorkspace,err := db.WorkspacesSvc.CreateWorkspace(userEmail,workspace.Name,workspace.Description)
	if err != nil {
        fmt.Println("Error creating workspace:", err)
        return c.Status(500).JSON(fiber.Map{"ok": false, "err": "Internal Server Error"})
    }
	return c.Status(201).JSON(fiber.Map{"ok": true, "user": createdWorkspace})

}

/* func GetWorkspace(c *fiber.Ctx) error {

}



func UpdateWorkspace(c *fiber.Ctx) error {

}

func DeleteWorkspace(c *fiber.Ctx) error {

} */