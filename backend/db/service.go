package db

import (
	"github.com/tweedle2dum/tracker/services/user"
	"github.com/tweedle2dum/tracker/services/workspace"
)



var (
	UsersSvc user.Service = nil 
	WorkspacesSvc workspace.Service = nil 
)


func InitServices(){
	db :=GetDB()
	usersRepo := user.NewPostgresRepo(db)
	UsersSvc = user.NewService(usersRepo)
	workspacesRepo :=  workspace.NewPostgresRepo(db)
	WorkspacesSvc = workspace.NewService(workspacesRepo)
}