package controllers

import (
	"errors"
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/tweedle2dum/tracker/db"
	"github.com/tweedle2dum/tracker/schemas"
	"gorm.io/gorm"
)



func GetUser(c *fiber.Ctx) error {
		var user schemas.UserSchema
		err := c.BodyParser(&user)
		if(err != nil) {
			fmt.Println("Bad request while getting user")
			return c.Status(400).JSON(fiber.Map{"ok":false,"err":"Bad Request"})
		}
		data , err := db.UsersSvc.FetchProfileByEmail(user.Email)
		if(err!=nil) {
			if errors.Is(err, gorm.ErrRecordNotFound) {
				return c.Status(500).JSON(fiber.Map{"ok":false,"err":"User not found"})

			}
			return c.Status(500).JSON(fiber.Map{"ok":false,"err":"Internal Server Error"})
		}
		return c.Status(200).JSON(data)
}



func CreateUser(c *fiber.Ctx) error {
	var user schemas.UserSchema
	err :=c.BodyParser(&user)
	if(err != nil) {
		fmt.Println("Bad request while getting user")
		return c.Status(400).JSON(fiber.Map{"ok":false,"err":"Bad Request"})
	}
	createdUser, err := db.UsersSvc.CreateUser(user.Email,user.Name)
	if err != nil {
        fmt.Println("Error creating user:", err)
        return c.Status(500).JSON(fiber.Map{"ok": false, "err": "Internal Server Error"})
    }
	return c.Status(201).JSON(fiber.Map{"ok": true, "user": createdUser})

}