package controllers

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/tweedle2dum/tracker/db"
	"github.com/tweedle2dum/tracker/schemas"
)

func CreateColumn (c* fiber.Ctx) error {
	var column  schemas.ColumnSchema
	err := c.BodyParser(&column)
	if(err!=nil){
		fmt.Println("Bad request while posting column")
		return c.Status(400).JSON(fiber.Map{"ok":false,"err":"Bad Request"})
	}
	fmt.Println("The column data is "+column.Name)
	createdColumn,err := db.ColumnsSvc.CreateColumn(column.BoardId,column.Name)
	if(err!=nil){
		fmt.Println("Error creating ecolumn:", err)
        return c.Status(500).JSON(fiber.Map{"ok": false, "err": "Internal Server Error"})
	}

	return c.Status(201).JSON(fiber.Map{"ok": true, "user": createdColumn})
	

}

func GetAllColumns ( c* fiber.Ctx) error {
	boardId := c.Params("boardId")
	if boardId == "" {
		fmt.Println("BoardId not provided in the URL")
		return c.Status(400).JSON(fiber.Map{"ok": false, "err": "BoardId not provided"})
	}
	fmt.Println("This is the boardID "+boardId)
	uuid,err:= uuid.Parse(boardId)
	if (err != nil) {
		fmt.Println("Invalid UUID or UUID is not present",err)
		return c.Status(400).JSON((fiber.Map{"ok":false,"err":err}))
	}
	columns, err:= db.ColumnsSvc.GetAllColumns(uuid)
	if(err != nil) {
		fmt.Println("error occured while getting the columns")
		return c.Status(400).JSON(fiber.Map{"ok":false,"err":err})

	}

	return c.Status(200).JSON(fiber.Map{"ok":true,"columns":columns})


}