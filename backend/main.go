package main

import (
	"log"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/tweedle2dum/tracker/config"
	"github.com/tweedle2dum/tracker/db"
	"github.com/tweedle2dum/tracker/migrations"
	"github.com/tweedle2dum/tracker/router"
	"github.com/tweedle2dum/tracker/utils"
)

func main() {
	utils.ImportEnv()
	config.LoadCfg()
	db.Connect()
	migrations.Migrate()
	app := fiber.New()
	app.Use(logger.New(logger.Config{
		Next: func(c *fiber.Ctx) bool {
			return strings.HasPrefix(c.Path(), "/api")
		},
	}))

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "*",
	}))

	app.Get("/", func(c *fiber.Ctx) error {

		return  c.Status(200).JSON(fiber.Map{"Welcome":"Hello world","status":true})
	})

	//Mount all routes 
	router.MountRoutes(app)

	app.Listen(":3001")
	log.Fatal(app.Listen(":3001"))
}
