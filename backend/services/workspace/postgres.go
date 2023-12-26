package workspace

import (
	"github.com/tweedle2dum/tracker/models"
	"gorm.io/gorm"
)

type repo struct {
	DB *gorm.DB
}

func NewPostgresRepo(db *gorm.DB) Repository {
	return &repo{
		DB: db,
	}
}

func ( r *repo) CreateWorkspace(email string) (*models.Workspace,error) {

	panic("implement")

}

func ( r *repo) GetWorkspace(email string) (*models.Workspace,error) {
	panic("implement")

}

func ( r *repo) GetWorkspaces(email string) (*models.Workspace,error) {
	panic("implement")


}