package migrations

import "github.com/tweedle2dum/tracker/db"
import "github.com/tweedle2dum/tracker/models"
import "log"

func Migrate() {
	database := db.GetDB()
	err := database.AutoMigrate(&models.User{})
	if(err==nil) {
		log.Println("Migrations failed")
		return 
	}
	log.Println("Migrations ran successfully")
	

}
