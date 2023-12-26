package db

import "github.com/tweedle2dum/tracker/services/user"



var (
	UsersSvc user.Service = nil 

)


func InitServices(){
	db :=GetDB()
	usersRepo := user.NewPostgresRepo(db)
	UsersSvc = user.NewService(usersRepo)
}