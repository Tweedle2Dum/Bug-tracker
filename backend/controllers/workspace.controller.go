package controllers
import "github.com/gofiber/fiber/v2"


func GetAllWorkspaces(c *fiber.Ctx) error {
		return c.Status(200).SendString("Getallworkspaces")
}

/* func GetWorkspace(c *fiber.Ctx) error {

}

func PostWorkspace(c *fiber.Ctx) error {

}

func UpdateWorkspace(c *fiber.Ctx) error {

}

func DeleteWorkspace(c *fiber.Ctx) error {

} */